Mobile Flashcards project for Udacity's [React Developer Nanodegree program](https://www.udacity.com/course/react-nanodegree--nd019).

## Instructions

`git clone https://github.com/LCSmith87/mobile-flashcards && cd mobile-flashcards`

`npm install && npm start`

Tested in both iOS & Android

## About

Mobile Flashcards is a simple mobile app for iOS and Android that lets the users create flashcard decks, questions, and answers and quizzes them on it.

Udacity requires code to follow the following guidelines


### Udacity Style Guides

[HTML Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/index.html)

[CSS Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/css.html)

[JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)

[Git Style Guide](https://udacity.github.io/git-styleguide/)

### Project Rubric

#### Application Setup

- [x] Requires only `npm install` and `npm start` to get installed and launched
- [x] An updated README that describes the project and has instructions for installing and launching

#### Application Functionality

- [x] The primary view, seen when the app loads, is a list of created decks which includes the name of each deck and the number of cards.
- [x] Pressing on a deck in the list should generate an animation, and the app should route to an individual deck view.
- [x] The individual deck view includes (at a minimum): The deck title, Number of cards in the deck, Option to start a quiz for that deck, Option to add a new question to the deck
- [x] Pressing the 'Start a Quiz' or 'Add Card' button properly routes to the correct views for those activities.
- [x] The New Question view includes a form with fields for a question and answer, and a submit button. Submitting the form correctly adds the question to the deck.
- [x] The Quiz view starts with a question from the selected deck, displayed along with a button to show the answer. Pressing the 'Show Answer' button displays the answer.
- [x] Buttons are included to allow the student to mark their guess as 'Correct' or 'Incorrect'
- [x] The view displays the number of questions remaining.
- [x] When the last question is answered, a score is displayed. This can be displayed as a percentage of correct answers or just the number of questions answered correctly.
- [x] When the score is displayed, buttons are displayed to either start the quiz over or go back to the Individual Deck view.
- [x] Both the 'Restart Quiz' and 'Back to Deck' buttons route correctly to their respective views.
- [x] The New Deck view includes a form for creating a new deck - which should just be an input for the title and a 'Create Deck' button.
- [x] Pressing the button correctly creates the deck and routes the user to the Individual Deck view for the new deck.
- [] Logic for notification has been implemented. Notifications are generated at a specific time if the user hasn't completed at least one quiz for that day.
- [x] The app works correctly in either Android OR iOS devices (or emulator).
- [x] Project README identifies which platform(s) have been tested.

#### Additional Features

- [x] Uses AsyncStorage api to store persistent data
- [x] Uses Redux to manage app state

TODO: add additional features


## Technology

Built with ReactJS using [react-create-app](https://github.com/facebook/create-react-app)

- React.JS
- React Native
- Redux
- React Navigation
