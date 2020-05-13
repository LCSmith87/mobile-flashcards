import React, { useState, useEffect } from 'react'
import { Text, View, Button, Alert } from 'react-native'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { handleRemoveDeck } from '../actions/decks'


const DeckPage = (props) => {
    const navigation = useNavigation()
    const { decks, dispatch } = props
    const [redirect, setRedirect] = useState(null)

    useEffect(() => {
        if (redirect) {
            dispatch(handleRemoveDeck(decks.id))
        }
    },[redirect])

    const handleDelete = () => {
        Alert.alert(
            'Delete Deck',
            'Are you sure you would like to delete this deck?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel'

                },
                {
                    text: 'Delete',
                    onPress: () => {
                        setRedirect(true)
                    }
                }
            ],
            { cancelable: false }
        )
    }
    if(redirect) {
        navigation.navigate('Home')
        return null
    }
    return(
        <View style={{flex: 1, alignItems: 'center', paddingTop: 40}}>
            <View style={{height: 200, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 28}}>
                    {props.decks.name}
                </Text>
                <Text style={{fontSize: 18, color: "#777"}}>
                    {`${props.decks.cards.length} cards`}
                </Text>
            </View>
            <View>
                <View style={{marginBottom: 10}}>
                    <Button
                        title="Add Card"
                        onPress={() => navigation.navigate('QuestionPage', {
                            deckId: decks.id,
                            name: decks.name
                        })}
                    />
                </View>
                <View>
                    <Button
                        title="Start Quiz"
                        onPress={() => navigation.navigate('QuizPage', {
                            name: decks.name,
                            deckId: decks.id,
                        })}
                    />
                </View>
            </View>
            <View style={{height: 100, justifyContent: 'flex-end'}}>
                <Button
                    title="Delete Deck"
                    onPress={handleDelete}
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

export default connect(mapStateToProps)(DeckPage)
