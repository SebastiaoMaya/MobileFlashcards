import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Constants from '../../utils/constants';
import TextButton from '../textbutton/TextButton';

export default class Card extends Component {
  state = {
    showAnswer: false
  };

  render() {
    const { showAnswer } = this.state;
    const { question, answer } = this.props;

    if (showAnswer) {
      return (
        <View>
          <Text>{answer}</Text>
          <TextButton
            onPress={() => {
              this.setState({ showAnswer: false });
            }}
            style={styles.textBtn}
          >
            {Constants.SHOW_QUESTION}
          </TextButton>
        </View>
      );
    } else {
      return (
        <View>
          <Text>{question}</Text>
          <TextButton
            onPress={() => {
              this.setState({ showAnswer: true });
            }}
            style={styles.textBtn}
          >
            {Constants.SHOW_ANSWER}
          </TextButton>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  textBtn: {
    padding: 10
  }
});
