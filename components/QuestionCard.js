import React from 'react'
import { Text, View } from 'react-native'

const QuestionCard = (props) => {
    return (
        <View>
            <Text>{props.question}</Text>
            {props.showAnswer
                ? <Text>{props.answer}</Text>
                : <Text>Answer hidden...</Text>}
        </View>
    )
}

export default QuestionCard
