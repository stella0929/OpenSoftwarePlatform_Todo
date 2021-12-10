import React, {Component, useEffect} from 'react';
import { Text, TextInput, View,TouchableOpacity } from 'react-native';
import { viewStyles, textStyles, loginboxStyles } from '../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Levelbar from './levelbar';


export default class mainScreen extends Component {
  constructor(props){
    super(props);
    AsyncStorage.getItem('authenticated', (err, result) => {
      console.log("constructor진입");
      console.log(result);
      
      if(!JSON.parse(result)){
        this.props.navigation.navigate('login');
      }
    });

  }

  logout(){
    AsyncStorage.setItem('authenticated',JSON.stringify(0), () => {
    }); 
    alert('로그아웃되었습니다');
    AsyncStorage.getItem('authenticated', (err, result) => {
      console.log(result);
    });
    this.props.navigation.navigate('login');
  }
  level(){
    
    this.props.navigation.navigate('level');
  }
  render(){
  return (
    
    <View style={viewStyles.container}>
       <Text style={textStyles.title}>MAIN</Text>
       <Levelbar />
      <TouchableOpacity onPress={()=> this.logout()}>
      <Text style={loginboxStyles.button}>logout</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> this.level()}>
      <Text style={loginboxStyles.button}>level</Text>
      </TouchableOpacity>
    </View>
  );}
  
}


  