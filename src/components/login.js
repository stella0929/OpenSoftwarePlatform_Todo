import React, {Component} from 'react';
import { Text, TextInput, View,TouchableOpacity } from 'react-native';
import { viewStyles, textStyles, loginboxStyles } from '../styles';


export default class loginScreen extends Component {
  render(){
  return (
    <View style={viewStyles.container}>
        
       <Text style={textStyles.title}>LOGIN</Text>
       <View style={{flexDirection:'row'}}>
        <Text style={loginboxStyles.text}>id:  </Text>
        <TextInput style= {loginboxStyles.inputbox}></TextInput></View>
      <View style={{flexDirection:'row'}}>
        <Text style={loginboxStyles.text}>pw:</Text>
        <TextInput style= {loginboxStyles.inputbox} secureTextEntry={true} ></TextInput>
      </View>
      <TouchableOpacity onPress={()=> this.goSignupScreen()}>
      <Text style={loginboxStyles.button}>signup</Text>
      </TouchableOpacity>
  
    </View>
  );}
  goSignupScreen(){
    this.props.navigation.navigate('signup');
  }
}


  