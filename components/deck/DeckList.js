import { AppLoading } from 'expo';
import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { receiveDecks } from '../../actions';
import { fetchDecks } from '../../utils/api';
import DeckInfo from './DeckInfo';

class DeckList extends Component {
  state = {
    ready: false
  };

  renderItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.props.navigation.navigate('DeckDetails', { key: item.title });
        }}
      >
        <DeckInfo key={item.title} {...item} />
      </TouchableWithoutFeedback>
    );
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

    const { decks } = this.props;
    const deckArray = Object.keys(decks).map(function(key) {
      return { key: key, ...decks[key] };
    });
    return (
      <View style={styles.container}>
        <FlatList data={deckArray} renderItem={this.renderItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

const mapStateToProps = decks => ({
  decks
});

export default connect(mapStateToProps)(DeckList);
