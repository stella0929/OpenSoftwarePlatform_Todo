import React, {Component} from 'react';
import { Text, TextInput, View,TouchableOpacity } from 'react-native';
import { viewStyles, textStyles, loginboxStyles } from '../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class loginScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      userId:'',
      userPassword: '',
    }
  }
  
  handleLoginButton = () => {
    const data = {
      userId: this.state.userId,
      userPassword: this.state.userPassword
    };
    fetch("http://172.16.11.201:3001/login", {
      method: "post", //통신방법
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
       
        if (json.success){
          alert('로그인 성공');
          AsyncStorage.setItem('authenticated','1', () => {
          });
          AsyncStorage.setItem('id',data.userId, () => {
          }); 
          this.props.navigation.navigate('main');
        }
        else{
          alert('아이디나 비밀번호가 다릅니다.');
        }

      });
  }
  goSignupScreen(){
    this.props.navigation.navigate('signup');
  }
  render(){
  return (
    <View style={viewStyles.container}>
        
       <Text style={textStyles.title}>LOGIN</Text>
       <View style={{flexDirection:'row'}}>
        <Text style={loginboxStyles.text}>id:  </Text>
        <TextInput style= {loginboxStyles.inputbox} onChangeText={(userId)=>this.setState({userId})}></TextInput></View>
      <View style={{flexDirection:'row'}}>
        <Text style={loginboxStyles.text}>pw:</Text>
        <TextInput style= {loginboxStyles.inputbox} secureTextEntry={true} onChangeText={(userPassword)=>this.setState({userPassword})}></TextInput>
      </View>
      <TouchableOpacity onPress={()=> this.handleLoginButton()}>
      <Text style={loginboxStyles.button}>login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> this.goSignupScreen()}>
      <Text style={loginboxStyles.button}>signup</Text>
      </TouchableOpacity>
    </View>
  );}

}


  