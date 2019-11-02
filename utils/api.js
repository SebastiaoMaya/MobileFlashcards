import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import { AsyncStorage } from 'react-native';
import * as Constants from '../utils/constants';
import { getHoursAndMinutesFromString } from '../utils/helpers';
export const DECKS_STORAGE_KEY = 'MobileFlashCards:decks';
export const NOTIFICATIONS_KEY = 'MobileFlashCards:notifications';

//Deck storage functions

function setDummyData() {
  const dummyData = {
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
          answer:
            'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  };

  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(dummyData));

  return dummyData;
}

export function fetchDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(parseFetchDecksResults);
}

function parseFetchDecksResults(results) {
  return results === null ? setDummyData() : JSON.parse(results);
}

export function submitDeck({ key, deck }) {
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [key]: deck
    })
  );
}

export function addCardToDeckStorage({ key, card }) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);

    if (data[key]) {
      data[key].questions = data[key].questions.concat([card]);
      AsyncStorage.mergeItem(
        DECKS_STORAGE_KEY,
        JSON.stringify({
          [key]: data[key]
        })
      );
    }
  });
}

export function removeDeck(key) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);

    data[key] = undefined;
    delete data[key];
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
  });
}

//Notifications storage functions

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATIONS_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync()
  );
}

function createNotification() {
  return {
    title: Constants.NOTIFICATION_TITLE,
    body: Constants.NOTIFICATION_BODY,
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATIONS_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === Constants.PERMISSION_GRANTED) {
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);

            let timeOfNotification = getHoursAndMinutesFromString(
              Constants.NOTIFICATION_TIME
            );
            tomorrow.setHours(timeOfNotification.hours);
            tomorrow.setMinutes(timeOfNotification.minutes);

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: 'day'
            });

            AsyncStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(true));
          }
        });
      }
    });
}
