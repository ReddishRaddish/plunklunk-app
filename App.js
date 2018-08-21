import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import home from './Screens/home';
import NUX1 from './Screens/NUX1'

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator/>
    );
  }
} 

const AppStackNavigator = createStackNavigator({
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
