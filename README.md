# MobileFlashcards

This project lets the user play the "mobile flashcards" on the mobile phone: create new tests and test his/her knowledge

## How to install the project

- clone the repository
- cd to the main directory
- npm install
- npm start

## Components

### DeckList

- Lists all the decks
- Each deck is a button that navigates to the [DeckDetails](#deckdetails) component

### DeckDetails

- Shows the title of the deck and the number of cards in it
- Add Card button navigates to the [AddCard](#addcard) component
- Start Quiz button navigates to [Quiz](#quiz) component
- Delete Text button ([TextButton](#textbutton) component) deletes the deck and navigates to the [DeckList](#decklist) component

### AddCard

- Question text input
- Answer text input
- Submit button saves card on DB and redux and navigates to previous screen ([DeckDetails](#deckdetails))

### AddDeck

- Label: What is the title of your new deck?
- Title text input
- Create Deck button saves deck on DB and redux and navigates to [DeckDetails](#deckdetails)

### Quiz

- Question number
- [Card](#card) component
- Correct and incorrect buttons
- If all questions answered then navigate to [Score](#score) component

### Card

- displays the question or answer text
- [TextButton](#textbutton) to cycle between question or answer

### Score

- Shows score (correct answers / total questions)
- Restart quiz button that navigates to [Quiz](#quiz)
- Back to Deck button that navigates to [DeckDetails](#deckdetails)

### TextButton

- creates a text button with the onPress and text passed to it

## Navigators

### Tab Navigator

- DeckList, AddDeck

### Stack Navigators

- DeckList -> DeckDetails -> AddCard
- DeckList -> DeckDetails -> Quiz -> Score
- AddDeck -> DeckList

## AsyncStorage

### Decks AsyncStorage Structure

- key: 'MobileFlashCards:decks'

<pre>
{
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}
</pre>

### Notifications AsyncStorage Structure

- key: 'MobileFlashCards:notifications'
- stores true or null

## Redux

### Actions

- ADD_DECK - adds deck to the store
- ADD_CARD_TO_DECK - adds card to the deck
- DELETE_DECK - deletes deck from the store
- RECEIVE_DECKS

### Reducers

- only one reducer to manage the decks
