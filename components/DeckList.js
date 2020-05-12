import React from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import Deck from './Deck'
import { useNavigation } from '@react-navigation/native'

const DeckList = (props) => {
    const { decks } = props
    const navigation = useNavigation()
    return (
        <DeckView>
            {decks
                ? Object.keys(decks).map((deck) => {
                    return <DeckOfCards key={decks[deck].id} onPress={() => navigation.navigate('DeckPage', {
                                deckId: decks[deck].id,
                                name: decks[deck].name
                            })}>
                                <Deck
                                    id={decks[deck].id}
                                    name={decks[deck].name}
                                    cards={decks[deck].cards}
                                />
                            </DeckOfCards>
                })
                : <Text style={{textAlign: 'center', fontSize: 24, color: "#777"}}>Create a new deck to get started</Text>}
        </DeckView>
    )
}

const DeckView = styled.ScrollView`
position: relative;
margin: auto;
width: 50%;

`

const DeckOfCards = styled.TouchableHighlight`
    border: 1px solid #eee;

    padding: 20px;
    margin: 10px;
`

function mapStateToProps ({decks}) {
    return {
        decks: Object.keys(decks).length > 0
            ? decks
            : null
    }
}

export default connect(mapStateToProps)(DeckList)
