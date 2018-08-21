import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Button} from 'native-base';



export default class createAccount extends React.Component {
  render() {
      return(
          <View>
            <View style={{paddingTop: 100, alignItems: 'center'}}>
                <Text style={{color: 'gray', fontSize: 48}}> PINK LINK </Text>
                <Text style = {{color: 'gray', fontSize: 24, paddingLeft: 30, paddingRight:30, paddingTop:30, paddingBottom:45, textAlign:'center'}}> Get menstrual products during emergencies from people near you </Text>
                <Text style = {{color: '#b3b3b3', fontSize: 18, paddingLeft: 30, paddingRight:30, textAlign:'center'}}> We don't post anything to Facebook. </Text>
            </View>
            <View style={{paddingTop: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <Button style={styles.button}>
                <Text style={{color:'white', fontSize: 30, fontWeight: 'bold'}}>    f   </Text>
                <Text style={{color: 'white', fontSize: 22}}> Sign up with Facebook    </Text>

              </Button>
            </View>
            <View style={{paddingTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color:'#595959'}}>By signing up, you agree to our</Text>
                <Button style={{backgroundColor: '#00000000'}}>
                    <Text style={{color: '#3399ff'}}> Terms of Service. </Text>
                </Button>
            </View>
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
    alignItems: 'center',
    justifyContent: 'center'
  }
}); 

