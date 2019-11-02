import { FontAwesome, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation-tabs';
import { lightBlue, white } from '../../utils/colors';
import AddCard from '../card/AddCard';
import AddDeck from '../deck/AddDeck';
import DeckDetails from '../deck/DeckDetails';
import DeckList from '../deck/DeckList';
import Quiz from '../quiz/Quiz';
import Score from '../quiz/Score';

const createPlatformNavigation = () => {
  return Platform.OS === 'ios'
    ? createBottomTabNavigator
    : createMaterialTopTabNavigator;
};

const TabNavigator = createPlatformNavigation()(
  {
    DeckList: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'Deck List',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
        )
      }
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: 'Add Deck',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name='plus-square' size={30} color={tintColor} />
        )
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? lightBlue : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : lightBlue,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
);

const DashboardStackNavigator = createStackNavigator(
  {
    DeckList: {
      screen: DeckList
    },
    DeckDetails: {
      screen: DeckDetails,
      navigationOptions: {
        headerTitle: 'Deck Details'
      }
    },
    AddCard: {
      screen: AddCard,
      navigationOptions: {
        headerTitle: 'Add Card'
      }
    },
    Quiz: {
      screen: Quiz,
      navigationOptions: {
        headerTitle: 'Quiz'
      }
    },
    Score: {
      screen: Score,
      navigationOptions: {
        headerTitle: 'Score'
      }
    },
    AddDeck: {
      screen: AddDeck
    },
    TabNavigator: {
      screen: TabNavigator
    }
  },
  {
    initialRouteName: 'TabNavigator'
  }
);

const Navigator = createAppContainer(DashboardStackNavigator);

export default createAppContainer(Navigator);
