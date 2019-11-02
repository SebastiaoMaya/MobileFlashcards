import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { lightBlue } from '../../utils/colors';
import * as Constants from '../../utils/constants';
import TextButton from '../buttons/TextButton';

const Card = ({
  question,
  answer,
  questionNumber,
  onPressShowAnswer,
  onPressShowQuestion,
  showAnswer
}) => {
  if (showAnswer) {
    return (
      <View>
        <Text style={{ paddingBottom: 10, color: lightBlue }}>
          {Constants.QUESTION_NUMBER + questionNumber}
        </Text>
        <Text>{answer}</Text>
        <TextButton onPress={onPressShowQuestion} style={styles.textBtn}>
          {Constants.SHOW_QUESTION}
        </TextButton>
      </View>
    );
  } else {
    return (
      <View>
        <Text style={{ paddingBottom: 10, color: lightBlue }}>
          {Constants.QUESTION_NUMBER + questionNumber}
        </Text>
        <Text>{question}</Text>
        <TextButton onPress={onPressShowAnswer} style={styles.textBtn}>
          {Constants.SHOW_ANSWER}
        </TextButton>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  textBtn: {
    padding: 10
  }
});

export default Card;
