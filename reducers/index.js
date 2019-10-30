import {
  ADD_CARD_TO_DECK,
  ADD_DECK,
  DELETE_DECK,
  RECEIVE_DECKS
} from '../actions';

const entries = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.entries
      };
    case ADD_DECK:
      return {
        ...state,
        ...action.entry
      };
    case DELETE_DECK:
      return Object.keys(state)
        .filter(key => key !== action.key)
        .reduce((res, key) => ((res[key] = state[key]), res), {});
    case ADD_CARD_TO_DECK:
      return {
        ...state,
        [action.key]: {
          ...state[action.key],
          questions: state[action.key].questions.concat([action.card])
        }
      };
    default:
      return state;
  }
};

export default entries;
