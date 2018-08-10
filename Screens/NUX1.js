import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'native-base';


export default class createAccount extends React.Component {
  render() {
      return(
        <View style={{paddingTop: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <Button style={styles.button}
            full
            rounded>         
            <Text style={{color: 'white'}}> Sign Up</Text>
          </Button>
        </View>
      )
  }    
}

