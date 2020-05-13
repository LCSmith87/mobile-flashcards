import React, { useState, useEffect } from 'react'
import { Text, View, Button, TouchableHighlight, Alert } from 'react-native'
import { connect } from 'react-redux'
import QuestionCard from '../components/QuestionCard'
import { FontAwesome } from '@expo/vector-icons'



const QuizPage = (props) => {
    const deck = props.decks
    const { navigation } = props
    const [allCards, setAllCards] = useState([])
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [currentCard, setCurrentCard] = useState(null)
    const [showAnswer, setShowAnswer] = useState(false)

    const returnCard = () => {
        let r = Math.floor(Math.random() * deck.cards.length)
        while (allCards.includes(r)) {
            r = Math.floor(Math.random() * deck.cards.length)
        }
        setCurrentCard(r)
    }

    const handleShowAnswer = (answer) => {
        setShowAnswer(answer)
    }
    const handleAnswer = (bool) => {
        if(bool && allCards.length < deck.cards.length) {
            setCorrectAnswers(correctAnswers + 1)
        }
        setShowAnswer(false)
        setAllCards(allCards => [...allCards, currentCard])
    }
    const handleRestart = () => {
        Alert.alert(
            'Restart Quiz',
            'Are you sure you would like to restart this quiz? All current progress will be lost.',
            [
                {
                    text: 'Cancel',
                    style: 'cancel'

                },
                {
                    text: 'Restart',
                    onPress: () => {
                        setCorrectAnswers(0)
                        setCurrentCard(null)
                        setShowAnswer(false)
                        setAllCards([])
                    }
                }
            ],
            { cancelable: false }
        )
    }
    useEffect(() => {
        if(allCards.length < deck.cards.length) {
            returnCard()
        }
    },[allCards])
    return(
        <View style={{flex: 1, alignItems: 'center', paddingTop: 20}}>
            <Text style={{ fontSize: 30}}>Quiz</Text>
            <Text style={{ fontSize: 20, color: "#777", paddingBottom: 20}}>{deck.name}</Text>
            {!deck.cards.length
                ? <View style={{justifyContent: 'center', alignItems: 'center', width: 200}}>
                    <Text style={{textAlign: 'center', fontSize: 20, color: "#777"}}>
                        Sorry, you cannot take a quiz because there are no cards in the deck
                    </Text>
                </View>
                : allCards.length >= deck.cards.length
                    ? <View style={{alignItems: 'center', width: 200}}>
                        <Text style={{textAlign: 'center', fontSize: 28}}>
                            {`${((correctAnswers / deck.cards.length) * 100).toFixed(2)}%`}
                        </Text>
                        <Text style={{textAlign: 'center', fontSize: 20, color: "#777"}}>
                            {(correctAnswers / deck.cards.length) * 100 > 80 ? "Great job, you know your stuff!" : "Try again, I'm sure you'll do better next time!"}
                        </Text>
                      </View>
                    : <View style={{alignItems: 'center'}}>
                    {currentCard !== null
                        ? <View style={{alignItems: 'center'}}>
                            <QuestionCard
                                question={deck.cards[currentCard].question}
                                answer={deck.cards[currentCard].answer}
                                showAnswer={showAnswer}
                            />
                            <Button
                                title="Show Answer"
                                onPress={() => handleShowAnswer(true)}
                            />
                            <Text style={{color: "#777", marginTop: 10}}>{`${deck.cards.length - allCards.length} questions remaining`}</Text>
                        </View>
                        : null}
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableHighlight onPress={() => handleAnswer(true)} style={{margin: 20}}>
                            <View style={{alignItems: 'center'}}>
                                <FontAwesome
                                    name="check"
                                    size={32}
                                    color="green"
                                />
                                <Text>Correct</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => handleAnswer(false) } style={{margin: 20}}>
                            <View style={{alignItems: 'center'}}>
                                <FontAwesome
                                    name="times"
                                    size={32}
                                    color="red"
                                />
                                <Text>Incorrect</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                  </View>}
                  <View style={{flexDirection: 'row', width: 300, justifyContent: 'space-between', paddingTop: 60 }}>
                        <Button
                            title="Restart Quiz"
                            onPress={() => handleRestart()}
                        />
                        <Button
                            title="Back to Deck"
                            onPress={() => navigation.goBack()}
                        />
                    </View>
        </View>
    )
}

const mapStateToProps = ({ decks }, props) => {
    const { deckId } = props.route.params
    const deck = Object.keys(decks).filter((d) => {
        return decks[d].id === deckId
    })
    return {
        decks: !deck
            ? null
            : decks[deck]
    }
}

export default connect(mapStateToProps)(QuizPage)
