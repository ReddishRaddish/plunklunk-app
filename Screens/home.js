import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { AppRegistry, TextInput} from 'react-native';


const padOn = require("./pics/padSelected.png");
const padOff = require("./pics/padGrey.png");


export default class App extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = { uriPad: require("./pics/padGrey.png"),
                      uriTamp: require("./pics/tamponGrey.png"),
                     text: ''};
    }
    changeLogo() {
        console.log('state changed!');
        if(this.state.uriPad == require("./pics/padGrey.png"))
            this.setState({
                uriPad: require("./pics/padSelected.png")
            }); 
        if(this.state.uriPad == require("./pics/padSelected.png"))
            this.setState({
                uriPad: require("./pics/padGrey.png")
            });     
        
        
    }
    
   changeLogotamp() {
       
       console.log('state changed!');
       if(this.state.uriTamp == require("./pics/tamponGrey.png"))
            this.setState ({
                uriTamp: require("./pics/tamponSelected.png")
            }); 
       if(this.state.uriTamp == require("./pics/tamponSelected.png"))
            this.setState ({
                uriTamp: require("./pics/tamponGrey.png")
            });
       
   }
    
    render() {
    return (
      <View style={styles.outer}>
        
        <Image source={require("./pics/top.png")} style={styles.outterImage}/>
        
        <View style={styles.textcontainer}>
        <Text style={styles.text}>What do you need? </Text>
        <Text style={styles.textsmaller}>(select all that apply) </Text>
        </View>
        
        
    <View style={styles.container}>
  
        <TouchableOpacity onPress={() => this.changeLogotamp()} style={styles.button}>
            <Image source={this.state.uriTamp}/> 
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => this.changeLogo()} style={styles.button}>
            <Image source={this.state.uriPad}/> 
        </TouchableOpacity>
        
    </View>
        
        
    <Text style={styles.text}>Where am I? </Text>
        
    
    <TextInput
        style={styles.textbox}
        placeholder="Be as specific as you want..."
        onChangeText={(text) => this.setState({text})}
    />
    
        <Image source={require("./pics/bottom.png")} style={styles.outterImage}/>
        
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
    textcontainer: { 
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    textbox: {
        padding: 10,
        fontSize: 20,
        color: '#bfbfbf',
        height: 50,
        width: 310,
        borderWidth: 4,
        borderColor: '#bfbfbf'
    },
    outer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%'
    },
    image: {
        flexDirection: 'row',
        justifyContent: 'center',   
    },
    outterImage: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%'
    },
    text: {
        color: '#666666',
        flex: 0,
        alignItems: 'center',
        fontSize: 30,
        flexDirection: 'row',
    },
    textsmaller: {
        color: '#666666',
        flex: 0,
        alignItems: 'center',
        fontSize: 20,
        flexDirection: 'row',
    },
    button: {
        padding: 10,
    }
});
