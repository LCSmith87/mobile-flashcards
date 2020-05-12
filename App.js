import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import Home from './screens/Home'
import New from './screens/New'
import DeckPage from './screens/DeckPage'
import QuestionPage from './screens/QuestionPage'
import { handleRemoveDeck } from './actions/decks'

const Stack = createStackNavigator()


export default function App() {
  return (
    <Provider store={createStore(reducer, middleware)}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={{ flex: 1, paddingTop: 20, backgroundColor: "#fff" }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                title: '',
              }}
            />
            <Stack.Screen
              name="New"
              component={New}
              options={{
                title: 'Create a New Deck',
              }}
            />
            <Stack.Screen
              name="DeckPage"
              component={DeckPage}
              options={({ route }) => ({ title: route.params.name })}
            />
            <Stack.Screen
              name="QuestionPage"
              component={QuestionPage}
              options={{
                title: 'Add a Question'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}