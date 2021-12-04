import React, {Component} from 'react';
import { Text, TextInput, View,TouchableOpacity } from 'react-native';
import { viewStyles, textStyles, loginboxStyles } from '../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class mainScreen extends Component {
  constructor(props){
    super(props);
    AsyncStorage.getItem('authenticated', (err, result) => {
      if(!result){
        this.props.navigation.navigate('login');
      }
    });
  }
  render(){
  return (
    <View style={viewStyles.container}>
       <Text style={textStyles.title}>MAIN</Text>
    </View>
  );}
  
}


  