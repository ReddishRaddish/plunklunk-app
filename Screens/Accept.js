import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { AppRegistry, TextInput} from 'react-native';


const yesUnselected = require("../pics/yesButton.png");
const noUnselected = require("../pics/noButton.png");


export default class App extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = { uriYes: require("../pics/yesbutton.png"),
                      uriNo: require("../pics/nobutton.png"),
                     text: ''};
    }
    changeYes() {
        console.log('state changed!');
        if(this.state.uriYes == require("../pics/yesbutton.png"))
            this.setState({
                uriYes: require("../pics/blueYesButton.png")
            });    
 {/*in the future add when clicked go to another page*/}
        
    }
    
   changeNo() {
       
       console.log('state changed!');
       if(this.state.uriNo == require("../pics/noButton.png"))
            this.setState ({
                uriNo: require("../pics/redNoButton.png")
            });
       
   }
    
    render() {
    return (

        <View style={styles.textcontainer}>
        <Text style={styles.text}>Accept? </Text>
        </View>
        
        
    <View style={styles.container}>
  
        <TouchableOpacity onPress={() => this.changeNo()} style={styles.button}>
            <Image source={this.state.uriNo}/> 
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => this.changeYes()} style={styles.button}>
            <Image source={this.state.uriYes}/> 
        </TouchableOpacity>
        
    </View>
        

    </View>
    );
  }
  
}
const styles = StyleSheet.create({
    container: { 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    image: {
        flexDirection: 'row',
        justifyContent: 'center',   
    },
    text: {
        color: '#666666',
        flex: 0,
        alignItems: 'center',
        fontSize: 30,
        flexDirection: 'row',
    },
    button: {
        padding: 10,
    }
});
