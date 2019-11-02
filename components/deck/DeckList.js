import { AppLoading } from 'expo';
import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
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
      <DeckInfo
        key={item.title}
        bounceValue={this.state.bounceValue}
        navigation={this.props.navigation}
        actAsBtn={true}
        {...item}
      />
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
