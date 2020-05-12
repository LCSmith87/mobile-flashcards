import React, { useState } from 'react'
import { Text, View, Button } from 'react-native'
import styled from 'styled-components'
import { handleAddQuestion } from '../actions/decks'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native'


const QuestionPage = (props) => {
    const { deckId, name } = props.route.params
    const { dispatch } = props
    const navigation = useNavigation()

    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")
    const handleSubmit = () => {
        let error = false;
        if(question === undefined || question.length < 1 ) {
            error = true
        }
        if(answer === undefined || answer.length < 1 ) {
            error = true
        }
        if(!error) {
            const wholeQuestion = {
                question,
                answer
            }
            dispatch(handleAddQuestion(deckId, wholeQuestion))
            navigation.goBack()
        } else {
            alert("You must submit both a question and an answer")
        }
    }

    return(
        <View style={{flex: 1, alignItems: 'center', paddingTop: 40}}>
            <Text style={{fontSize: 28}}>{name}</Text>
            <Text style={{fontSize: 20, color: '#777'}}>Add a Question</Text>
                <View style={{paddingTop: 40, paddingBottom: 40, flex: 1, width: 300}}>
                <View style={{marginBottom: 40}}>
                    <Label>
                        What is your question?
                    </Label>
                    <Input
                        onChangeText={text => setQuestion(text)}
                        value={question}
                        placeholder="Question"
                    />
                </View>
                <View style={{marginBottom: 40}}>
                    <Label>
                        What is the answer?
                    </Label>
                    <Input
                        onChangeText={text => setAnswer(text)}
                        value={answer}
                        placeholder="Answer"
                    />
                </View>
                <Button
                    title="Save"
                    onPress={handleSubmit}
                />
            </View>
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
    width: 100%;
`

const Label = styled.Text`
    font-size: 20px;
    color: #333;
    margin-left: 10px;
`

export default connect()(QuestionPage)
