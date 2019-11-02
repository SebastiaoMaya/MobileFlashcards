import Constants from 'expo-constants';
import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Navigator from './components/navigators/Navigator';
import middleware from './middleware';
import reducer from './reducers';
import { setLocalNotification } from './utils/api';
import { lightBlue } from './utils/colors';

const MobileFlashCardsStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
};

export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <View style={{ flex: 1 }}>
          <MobileFlashCardsStatusBar
            backgroundColor={lightBlue}
            barStyle='light-content'
          />
          <Navigator />
        </View>
      </Provider>
    );
  }
}
