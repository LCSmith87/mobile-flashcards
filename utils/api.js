import { AsyncStorage } from 'react-native'

export const handleInitialLoad = async () => {
    const allKeys = await AsyncStorage.getAllKeys()
    const keys = allKeys.filter((key) => {
        return key !== "MobileFlashcards:notifications"
    })
    const stores = await AsyncStorage.multiGet(keys, (stores) => {
        return stores
    })
    const decks = {}
    stores.forEach((store) => {
        const values = JSON.parse(store[1])
        const deck = {
            id: values.id,
            name: values.name,
            cards: values.cards
        }
        decks[values.id] = deck
    })
    return decks
}

export const saveDeck = async (name) => {
    const id = generateUID()
    const deck = {
        id,
        name,
        cards: [],
    }
    AsyncStorage.setItem(id, JSON.stringify(deck))
    return deck
}


export const addQuestion = async (deckId, question) => {

    const store = await AsyncStorage.getItem(deckId)

    const deck = JSON.parse(store)
    deck.cards.push(question)

    AsyncStorage.setItem(deck.id, JSON.stringify(deck))

    return deck
}


export const remove = async (deckId) => {
    return AsyncStorage.removeItem(deckId)
}

function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }