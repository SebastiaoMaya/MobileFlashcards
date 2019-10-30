export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const DELETE_DECK = 'DELETE_DECK';
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK';

export const receiveDecks = decks => ({
  type: RECEIVE_DECKS,
  decks
});

export const addDeck = deck => ({
  type: ADD_DECK,
  deck
});

export const addCardToDeck = (key, card) => ({
  type: ADD_CARD_TO_DECK,
  key,
  card
});

export const deleteDeck = key => ({
  type: DELETE_DECK,
  key
});
