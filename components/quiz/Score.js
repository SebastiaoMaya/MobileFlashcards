import React from 'react';
import { Text, View } from 'react-native';

const Score = ({ navigation }) => {
  const { deck, numCorrect } = navigation.state.params;

  return (
    <View>
      <Text>
        {' '}
        correct {numCorrect} out of {deck.questions.length}
      </Text>
    </View>
  );
};

export default Score;
