import { getInitialData } from '../utils/api';
import { receiveDecks } from './index';

export const handleInitialData = () => {
  return dispatch => {
    return getInitialData().then(decks => {
      dispatch(receiveDecks(decks));
    });
  };
};
