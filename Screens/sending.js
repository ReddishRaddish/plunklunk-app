import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
        <Image source={require("../pics/RequestSending.jpg")}/> 
 
        <Text style={styles.text}> sending your request ... </Text> 

    </View>
    );
  }
}

const styles = StyleSheet.create({
    
  container: { 
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    //height: '100%',
    
    
  },
    
    text:{
        color: '#D1C4E1',
        fontSize: 25,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: -180
    },
});