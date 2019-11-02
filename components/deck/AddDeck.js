import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { addDeck } from '../../actions';
import { submitDeck } from '../../utils/api';
import { lightBlue, white } from '../../utils/colors';
import * as Constants from '../../utils/constants';
import NavigateButton from '../buttons/NavigateButton';
import SubmitButton from '../buttons/SubmitButton';

class AddDeck extends Component {
  state = {
    deckName: ''
  };

  handleDeckNameChange = input => {
    this.setState({
      deckName: input
    });
  };

  toDeck = () => {
    const { deckName } = this.state;
    this.setState({ deckName: '' });

    this.props.navigation.navigate('DeckDetails', { key: deckName });
  };

  submit = () => {
    const { dispatch } = this.props;
    const { deckName } = this.state;

    const deck = {
      title: deckName,
      questions: []
    };

    dispatch(addDeck(deck));
    submitDeck({
      key: deckName,
      deck: deck
    });

    this.toDeck();
  };

  render() {
    const { deckName } = this.state;
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <Text>{Constants.ADD_A_DECK}</Text>
        <View style={styles.container}>
          <TextInput
            placeholder='Deck name'
            value={deckName}
            onChangeText={this.handleDeckNameChange}
            style={styles.textInput}
          />
          <SubmitButton onPress={this.submit} disabled={deckName === ''}>
            {Constants.CREATE_DECK}
          </SubmitButton>
          <NavigateButton
            navigation={this.props.navigation}
            navigateScreen={'DeckList'}
          >
            {Constants.BACK_TO_DECK_LIST}
          </NavigateButton>
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

export default connect()(AddDeck);
