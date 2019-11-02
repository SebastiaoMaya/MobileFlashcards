import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { gray } from '../../utils/colors';
import * as Constants from '../../utils/constants';

const DeckInfo = ({ title, questions }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}> {title} </Text>
      <Text style={styles.subtitle}>
        {Constants.NUMBER_OF_CARDS + questions.length}
      </Text>
    </View>
  );
};

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
    color: gray
  }
});

export default DeckInfo;
