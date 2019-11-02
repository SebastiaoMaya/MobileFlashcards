import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { white } from '../../utils/colors';
import * as Constants from '../../utils/constants';
import NavigateButton from '../buttons/NavigateButton';

const Score = ({ navigation }) => {
  const { deck, numCorrect } = navigation.state.params;

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.item}>
        <Text>
          {Constants.CORRECT_ANSWERS +
            numCorrect +
            Constants.OUT_OF +
            deck.questions.length}
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', paddingTop: 20 }}>
        <NavigateButton
          navigation={navigation}
          navigateScreen={'Quiz'}
          navigateParams={{
            key: deck.title
          }}
        >
          {Constants.RESTART}
        </NavigateButton>
        <NavigateButton
          navigation={navigation}
          navigateScreen={'DeckDetails'}
          navigateParams={{
            key: deck.title
          }}
        >
          {Constants.BACK_TO_DECK}
        </NavigateButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: white,
    borderRadius: Platform.OS === 'ios' ? 16 : 8,
    padding: 20,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    }
  }
});

export default Score;
