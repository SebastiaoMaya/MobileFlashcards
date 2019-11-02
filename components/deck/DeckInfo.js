import React, { Component } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import { gray, lightBlue } from '../../utils/colors';
import * as Constants from '../../utils/constants';

export default class DeckInfo extends Component {
  state = {
    bounceValue: new Animated.Value(1)
  };

  onPress = () => {
    const { bounceValue } = this.state;
    const { title, navigation } = this.props;

    Animated.sequence([
      Animated.timing(bounceValue, { duration: 10, toValue: 1.02 }),
      Animated.spring(bounceValue, { toValue: 1, friction: 4 })
    ]).start(() => navigation.navigate('DeckDetails', { key: title }));
  };

  render() {
    const { title, questions, actAsBtn } = this.props;
    const { bounceValue } = this.state;

    return (
      <TouchableWithoutFeedback onPress={actAsBtn && this.onPress}>
        <Animated.View
          style={[
            styles.item,
            { transform: [{ scale: bounceValue }] },
            actAsBtn && styles.deckBtn
          ]}
        >
          <Text style={styles.title}> {title} </Text>
          <Text style={styles.subtitle}>
            {Constants.NUMBER_OF_CARDS + questions.length}
          </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 8
  },
  title: {
    fontSize: 32
  },
  subtitle: {
    fontSize: 13,
    color: gray,
    paddingLeft: 10
  },
  deckBtn: {
    borderBottomWidth: 1,
    borderColor: lightBlue,
    marginHorizontal: 16
  }
});
