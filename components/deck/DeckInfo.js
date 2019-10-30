import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { gray } from '../../utils/colors';

const DeckInfo = ({ title, questions }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}> {title} </Text>
      <Text style={styles.title}> {questions.length} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: gray,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  }
});

export default DeckInfo;
