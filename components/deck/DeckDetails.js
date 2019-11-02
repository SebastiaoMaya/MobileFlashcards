import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { lightBlue, white } from '../../utils/colors';
import * as Constants from '../../utils/constants';
import TextButton from '../textbutton/TextButton';
import DeckInfo from './DeckInfo';

class DeckDetails extends Component {
  deleteDeck = () => {
    console.log('deleted');
  };

  render() {
    const { deck } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <DeckInfo {...deck} />
        <View style={{ flex: 1, alignItems: 'center', paddingTop: 50 }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('AddCard', {
                key: deck.title
              });
            }}
            style={Platform.OS === 'ios' ? styles.iosBtn : styles.androidBtn}
          >
            <Text style={styles.btnText}>{Constants.ADD_CARD}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Quiz', { key: deck.title });
            }}
            style={Platform.OS === 'ios' ? styles.iosBtn : styles.androidBtn}
          >
            <Text style={styles.btnText}>{Constants.START_QUIZ}</Text>
          </TouchableOpacity>
          <TextButton onPress={this.deleteDeck} style={{ padding: 10 }}>
            Delete
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
