import React from 'react'
import { Text, View} from 'react-native'

const Deck = (props) => {
    return (
            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 18}}>{props.name}</Text>
                <Text style={{color: "#777"}}>
                    {props.cards
                        ? `${props.cards.length} cards`
                        : '0 cards' }
                </Text>
            </View>
    )
}

export default Deck

