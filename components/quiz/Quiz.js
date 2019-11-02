import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { clearLocalNotification, setLocalNotification } from '../../utils/api';
import { green, red, white } from '../../utils/colors';
import * as Constants from '../../utils/constants';
import Card from '../card/Card';

class Quiz extends Component {
  state = {
    questionNumber: 0,
    numCorrect: 0,
    showAnswer: false
  };

  submitCorrectAnswer = () => {
    const { deck } = this.props;
    const { questionNumber, numCorrect } = this.state;

    const newQuestionNumber = questionNumber + 1;
    const numCorrectAnswers = numCorrect + 1;

    if (newQuestionNumber >= deck.questions.length) {
      this.setState({
        numCorrect: numCorrectAnswers,
        showAnswer: false
      });

      this.toScore(numCorrectAnswers);
    } else {
      this.setState({
        questionNumber: newQuestionNumber,
        numCorrect: numCorrectAnswers,
        showAnswer: false
      });
    }
  };

  submitIncorrectAnswer = () => {
    const { deck } = this.props;
    const { questionNumber, numCorrect } = this.state;

    const newQuestionNumber = questionNumber + 1;

    if (newQuestionNumber >= deck.questions.length) {
      this.setState({
        showAnswer: false
      });
      this.toScore(numCorrect);
    } else {
      this.setState(() => ({
        questionNumber: newQuestionNumber,
        showAnswer: false
      }));
    }
  };

  toScore = numCorrect => {
    const { deck } = this.props;

    this.setState({
      questionNumber: 0,
      numCorrect: 0
    });

    clearLocalNotification().then(setLocalNotification);

    this.props.navigation.navigate('Score', { deck, numCorrect });
  };

  render() {
    const { questionNumber, showAnswer } = this.state;
    const { question, answer } = this.props.deck.questions[questionNumber];

    return (
      <View>
        <View style={styles.item}>
          <Card
            question={question}
            answer={answer}
            questionNumber={questionNumber + 1}
            onPressShowAnswer={() => {
              this.setState({ showAnswer: true });
            }}
            onPressShowQuestion={() => {
              this.setState({ showAnswer: false });
            }}
            showAnswer={showAnswer}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={this.submitCorrectAnswer}
            style={[styles.btn, { backgroundColor: green }]}
          >
            <Text style={styles.btnText}>{Constants.CORRECT}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.submitIncorrectAnswer}
            style={[styles.btn, { backgroundColor: red }]}
          >
            <Text style={styles.btnText}>{Constants.INCORRECT}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

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
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  btn: {
    padding: 10,
    borderRadius: Platform.OS === 'ios' ? 7 : 2,
    height: 45,
    margin: 5
  },
  btnText: {
    color: white,
    fontSize: 16,
    textAlign: 'center'
  }
});

const mapStateToProps = (state, { navigation }) => {
  const { key } = navigation.state.params;

  return {
    deck: state[key]
  };
};

export default connect(mapStateToProps)(Quiz);
