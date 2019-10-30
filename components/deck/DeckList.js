import { AppLoading } from 'expo';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { receiveDecks } from '../../actions';
import { fetchDecks } from '../../utils/api';

class DeckList extends Component {
  state = {
    ready: false
  };

  componentDidMount() {
    const { dispatch } = this.props;

    fetchDecks()
      .then(decks => dispatch(receiveDecks(decks)))
      .then(() =>
        this.setState(() => ({
          ready: true
        }))
      );
  }
  render() {
    const { ready } = this.state;

    if (!ready) {
      return <AppLoading />;
    }

    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default connect()(DeckList);
