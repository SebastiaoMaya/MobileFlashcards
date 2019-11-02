import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { lightBlue, white } from '../../utils/colors';
import * as Constants from '../../utils/constants';
import SubmitButton from '../submitbutton/SubmitButton';

class AddCard extends Component {
  state = {
    questionInput: '',
    answerInput: ''
  };

  handleAnswerChange = input => {
    this.setState({
      answerInput: input
    });
  };

  handleQuestionChange = input => {
    this.setState({
      questionInput: input
    });
  };

  submit = () => {
    // const key = timeToString();
    // const entry = this.state;
    // const { dispatch } = this.props;
    // //Update Redux
    // dispatch(
    //   addEntry({
    //     [key]: entry
    //   })
    // );
    // this.setState(() => ({
    //   run: 0,
    //   bike: 0,
    //   swim: 0,
    //   sleep: 0,
    //   eat: 0
    // }));
    // this.toHome();
    // //Save to DB
    // submitEntry({ key, entry });
    // clearLocalNotification().then(setLocalNotification);
  };

  render() {
    const { questionInput, answerInput } = this.state;
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <Text>{Constants.ADD_A_CARD}</Text>
        <View style={styles.container}>
          <TextInput
            placeholder='Question'
            value={questionInput}
            onChangeText={this.handleQuestionChange}
            style={styles.textInput}
          />
          <TextInput
            placeholder='Answer'
            value={answerInput}
            onChangeText={this.handleAnswerChange}
            style={styles.textInput}
          />
          <SubmitButton onPress={this.submit}>
            {Constants.ADD_CARD}
          </SubmitButton>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  },

  textInput: {
    width: '90%',
    height: 42,
    borderColor: lightBlue,
    borderWidth: 1,
    backgroundColor: white,
    textAlign: 'center',
    margin: 5
  }
});

export default connect()(AddCard);
