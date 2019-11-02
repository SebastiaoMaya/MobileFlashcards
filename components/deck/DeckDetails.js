import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { deleteDeck } from '../../actions';
import { removeDeck } from '../../utils/api';
import { lightBlue, white } from '../../utils/colors';
import * as Constants from '../../utils/constants';
import NavigateButton from '../buttons/NavigateButton';
import TextButton from '../buttons/TextButton';
import DeckInfo from './DeckInfo';

class DeckDetails extends Component {
  toDeckList = () => {
    this.props.navigation.navigate('DeckList');
  };

  deleteDeck = () => {
    const { deck, dispatch } = this.props;

    dispatch(deleteDeck(deck.title));
    removeDeck(deck.title);

    this.toDeckList();
  };

  shouldComponentUpdate(nextProps, nextState) {
    return typeof nextProps.deck !== 'undefined';
  }

  render() {
    const { deck } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <DeckInfo {...deck} />
        <View style={{ flex: 1, alignItems: 'center', paddingTop: 50 }}>
          <NavigateButton
            navigation={this.props.navigation}
            navigateScreen={'AddCard'}
            navigateParams={{
              key: deck.title
            }}
          >
            {Constants.ADD_CARD}
          </NavigateButton>
          <NavigateButton
            navigation={this.props.navigation}
            navigateScreen={'Quiz'}
            navigateParams={{
              key: deck.title
            }}
            disabled={deck.questions.length === 0}
          >
            {Constants.START_QUIZ}
          </NavigateButton>
          <TextButton onPress={this.deleteDeck} style={{ padding: 10 }}>
            {Constants.DELETE}
          </TextButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iosBtn: {
    backgroundColor: lightBlue,
    padding: 10,
    borderRadius: 7,
    height: 45,
    margin: 5
  },
  androidBtn: {
    backgroundColor: lightBlue,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
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

export default connect(mapStateToProps)(DeckDetails);
