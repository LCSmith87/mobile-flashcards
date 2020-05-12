import { RECEIVE_DECKS, ADD_DECK, ADD_QUESTION, REMOVE_DECK }  from '../actions/decks'

export default function decks ( state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks,
            }
        case ADD_DECK:
            const { deck } = action
            return {
                ...state,
                [deck.id]: deck
            }
        case ADD_QUESTION:
            const { deckId, question } = action
            return {
                    ...state,
                    [deckId]: {
                        ...state[deckId],
                        cards: state[deckId].cards.concat(question)

                    }
                }
        case REMOVE_DECK:
            const { [action.deckId]: _, ...others } = state
            return others
        default:
            return state
    }
}