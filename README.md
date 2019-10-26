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
- Delete Text button (TextButton component) deletes the deck and navigates to the [DeckList](#decklist) component

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
- Text that contains either the question or the answer
- Correct and incorrect buttons
- If all questions answered then navigate to [Score](#score) component

### Score

- Shows score (correct answers / total questions)
- Restart quiz button that navigates to [Quiz](#quiz)
- Back to Deck button that navigates to [DeckDetails](#deckdetails)

## Navigators

### Tab Navigator

- DeckList, AddDeck

### Stack Navigators

- DeckList -> DeckDetails -> AddCard
- DeckList -> DeckDetails -> Quiz -> Score
- AddDeck -> DeckList

## AsyncStorage

## Redux
