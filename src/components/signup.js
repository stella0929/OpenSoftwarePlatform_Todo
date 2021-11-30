import React,{Component} from 'react';
import {StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native';

import { viewStyles, textStyles, loginboxStyles } from '../styles';

export default class SignupScreen extends Component { 
  render() {
    return (
      <View style={viewStyles.container}>
        
      <Text style={textStyles.title}>SIGN UP</Text>
      <View style={{flexDirection:'row'}}>
       <Text style={loginboxStyles.text}>Eter name   </Text>
       <TextInput style= {loginboxStyles.inputbox}></TextInput></View>
      <View style={{flexDirection:'row'}}>
       <Text style={loginboxStyles.text}>Enter id        </Text>
       <TextInput style= {loginboxStyles.inputbox}></TextInput></View>
     <View style={{flexDirection:'row'}}>
       <Text style={loginboxStyles.text}>Enter pw      </Text>
       <TextInput style= {loginboxStyles.inputbox} secureTextEntry={true} ></TextInput>
     </View>
     <View style={{flexDirection:'row'}}>
       <Text style={loginboxStyles.text}>Re-enter pw</Text>
       <TextInput style= {loginboxStyles.inputbox} secureTextEntry={true} ></TextInput></View>
     <TouchableOpacity>
     <Text style={loginboxStyles.button}>signup</Text>
     </TouchableOpacity>
 
   </View>
    );
    }
  }
  