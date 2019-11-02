import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { lightBlue, white } from '../../utils/colors';

const NavigateButton = ({
  navigation,
  children,
  navigateScreen,
  navigateParams
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(navigateScreen, navigateParams);
      }}
      style={Platform.OS === 'ios' ? styles.iosBtn : styles.androidBtn}
    >
      <Text style={styles.btnText}>{children}</Text>
    </TouchableOpacity>
  );
};

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

export default NavigateButton;
