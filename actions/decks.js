import { handleInitialLoad, saveDeck, addQuestion, remove } from '../utils/api'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'
export const REMOVE_DECK = 'REMOVE_DECK'

export function receiveDecks (decks) {
    return {
        type: RECEIVE_DECKS,
        decks,
    }
}

export function addDeck (deck) {
    return {
        type: ADD_DECK,
        deck,
    }
}

export function addNewQuestion (deckId, question) {
    return {
        type: ADD_QUESTION,
        deckId,
        question
    }
}

export function removeDeck (deckId) {
    return {
        type: REMOVE_DECK,
        deckId
    }
}

export function initial() {
    return (dispatch) => {
        return(
            handleInitialLoad()
            .then((decks) => {
                dispatch(receiveDecks(decks))
            })
        )
    }
}

export function handleSaveDeck(deck) {
    return (dispatch) => {
        return(
            saveDeck(deck)
                .then((d) => {
                    dispatch(addDeck(d))
                })
        )
    }
}

export function handleAddQuestion(deckId, question) {
    return (dispatch) => {
        return(
            addQuestion(deckId, question)
                .then(() => {
                    dispatch(addNewQuestion(deckId, question))
                })
        )
    }

}

export function handleRemoveDeck(deckId) {
    return (dispatch) => {
        return(
            dispatch(removeDeck(deckId))
        )
    }
}