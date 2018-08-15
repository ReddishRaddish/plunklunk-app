import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Button} from 'native-base';


export default class createAccount extends React.Component {
  render() {
      return(
        <View style={{paddingTop: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <Button style={styles.button}
            full
            rounded>         
            <Text style={{color: 'blue'}}> Sign Up</Text>
          </Button>
        </View>
      )
  }    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight:10
  },
    
  button:{
    marginTop: 10,
    width: Dimensions.get('window').width *0.95,
    paddingLeft: 15,
    alignItems: 'center',
    justifyContent: 'center'
  }
}); 

