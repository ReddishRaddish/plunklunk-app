import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import home from './Screens/home';
import NUX1 from './Screens/NUX1';
import sending from './Screens/sending';
import Accept from './Screens/Accept'

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator/>
    );
  }
} 

const AppStackNavigator = createStackNavigator({
  Accept: {screen:Accept},
  sending: {screen: sending},
  NUX1: {screen: NUX1},
  home: {screen: home},
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
