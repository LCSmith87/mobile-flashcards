import React, { useState } from 'react'
import { Text, View, Button, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import QuestionCard from '../components/QuestionCard'
import { FontAwesome } from '@expo/vector-icons'



const QuizPage = (props) => {
    const deck = props.decks
    const [allCards, setAllCards] = useState([])
    const [answeredCards, setAnsweredCards] = useState([])
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [currentCard, setCurrentCard] = useState(null)
    const [showAnswer, setShowAnswer] = useState(false)

    const returnCard = (currentCard) => {
        // Show a random card
    }

    const cards = () => {
        // Set the card values
    }
    const handleAnswer = (answer) => {
        // Set the answers to right or wrong
    }
    return(
        <View style={{flex: 1, alignItems: 'center', paddingTop: 40}}>
            <Text style={{ fontSize: 30}}>Quiz</Text>
            <Text style={{ fontSize: 20, color: "#777"}}>{deck.name}</Text>
            {!deck.cards.length
                ? <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: 200, paddingBottom: 80}}>
                    <Text style={{textAlign: 'center', fontSize: 20, color: "#777"}}>
                        Sorry, you cannot take a quiz because there are no cards in the deck
                    </Text>
                </View>
                : <View>
                    {currentCard
                        ? <QuestionCard
                            question={deck.cards[currentCard].question}
                            answer={deck.cards[currentCard].answer}
                            showAnswer={showAnswer}
                          />
                        : null}
                    <Button
                        title="Show Answer"
                    />
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableHighlight style={{margin: 20}}>
                            <View style={{alignItems: 'center'}}>
                                <FontAwesome
                                    name="check"
                                    size={32}
                                    color="green"
                                />
                                <Text>Correct</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={{margin: 20}}>
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
                    <Button
                        title="Restart Quiz"
                    />
                    <Button
                        title="Back to Deck"
                    />
                  </View>}
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
