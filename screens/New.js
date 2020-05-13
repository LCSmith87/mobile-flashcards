import React, { useState } from 'react'
import { View, Button } from 'react-native'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { handleSaveDeck } from '../actions/decks'

const New = (props) => {
    const [name, setName] = useState("")
    const { navigation } = props

    const handleSubmit = () => {
        const inputName = !name ? "Untitled Deck" : name
        props.dispatch(handleSaveDeck(inputName))
            .then((deck) => {
                navigation.navigate('DeckPage', {
                    deckId: deck.id,
                    name: deck.name
                })
            })
    }

    return (
        <View style={{paddingTop: 40, paddingBottom: 40, flex: 1, backgroundColor: '#fff', justifyContent: 'space-between'}}>
            <View>
                <Label>
                    What would you like to call this deck?
                </Label>
                <Input
                    onChangeText={text => setName(text)}
                    value={name}
                    placeholder="Deck Name"
                />
            </View>
            <Button
                title="Save"
                onPress={handleSubmit}
            />
        </View>
    )
}

const Input = styled.TextInput`
    height: 40px;
    background-color: #fff;
    border: 1px solid #eee;
    padding-left: 5px;
    font-size: 16px;
    margin: 0 10px;
`

const Label = styled.Text`
    font-size: 20px;
    color: #333;
    margin-left: 10px;
`

export default connect()(New)

