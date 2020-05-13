import React from 'react'
import { Text, View } from 'react-native'

const QuestionCard = (props) => {
    return (
        <View>
            <View style={{backgroundColor: "#fff", padding: 40, border: "1px solid #eee", borderRadius: 5, alignItems: 'center'}}>
                <Text style={{fontSize: 20}}>{props.question}</Text>
            </View>
            {props.showAnswer
                ? <View style={{padding: 40, alignItems: 'center'}}>
                    <Text style={{fontSize: 20}}>{props.answer}</Text>
                  </View>
                : <View style={{padding: 40, alignItems: 'center'}}>
                    <Text style={{fontSize: 20}}>Answer hidden...</Text>
                  </View>}
        </View>
    )
}

export default QuestionCard
