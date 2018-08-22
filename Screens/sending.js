import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
        <Image source={require("/Users/ricardadallmann/Downloads/plunklunk-app/pics/RequestSending.jpg")} style={styles.container}/> )
    
        
        
        
    
        
       <Text style={styles.text}> sending your request ... </Text> 

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
    marginTop: 50,
    paddingTop: 140,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //height: '100%',
    
    
  },
    
    text: {
        color: '#D1C4E1',
        fontSize: 25,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        position: 'absolute',
        bottom: -180
    },
});