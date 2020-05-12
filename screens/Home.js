import React, { useRef, useEffect } from 'react';
import { Animated, View, Text, Button } from 'react-native'
import styled from 'styled-components/native'
import DeckList from '../components/DeckList'
import { connect } from 'react-redux'
import { initial } from '../actions/decks'


const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 1500,
        }
      ).start();
    }, [])

    return (
      <Animated.View                 // Special animatable View
        style={[{
          opacity: fadeAnim,         // Bind opacity to animated value
        }], props.style}
      >
        {props.children}
      </Animated.View>
    );
  }


class Home extends React.Component {

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(initial())
    }
    render() {
        const { navigation } = this.props
        return (
            <FadeInView style={{flex: 1}} >
                <View style={{ paddingTop: 40, backgroundColor: "#fff"}}>
                    <HeaderText>Hello...</HeaderText>
                    <SubHeaderText>What would you like to study today?</SubHeaderText>
                </View>
                <View style={{flex: 1, paddingTop: 40, backgroundColor: "#fff", justifyContent: 'space-around', paddingBottom: 40}}>
                    <DeckList />
                    <Button
                        title="Create A New Deck"
                        onPress={() => navigation.navigate('New')}
                    />
                </View>
            </FadeInView>
        )
    }
}

const HeaderText = styled.Text`
  text-align: center;
  font-size: 40px;
`

const SubHeaderText = styled.Text`
  text-align: center;
  color: #777;
  width: 50%;
  margin: 5px auto;
  font-size: 20px;
`


export default connect()(Home)
