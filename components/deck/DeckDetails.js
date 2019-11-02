import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class DeckDetails extends Component {
  render() {
    const { deck } = this.props;
    return (
      <View>
        <Text> {deck.title} </Text>
      </View>
    );
  }
}

const mapStateToProps = (state, { navigation }) => {
  const { key } = navigation.state.params;

  return {
    deck: state[key]
  };
};

export default connect(mapStateToProps)(DeckDetails);
