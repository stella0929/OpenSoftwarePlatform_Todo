import React,{Component,useState} from 'react';
import {StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native';

import { viewStyles, textStyles, loginboxStyles } from '../styles';

export default class SignupScreen extends Component { 
  constructor(props){
    super(props);
    this.state = {
      userName:'',
      userId:'',
      userPassword: '',
      userPasswordchk: ''
   
    }
  }

  handleSubmitButton = () => {
    const {userName, userId,userPassword,userPasswordchk} = this.state;
    if (!userName) {
      alert('이름을 입력해주세요');
      return;
    }
    if (!userId) {
      alert('id를 입력해주세요');
      return;
    }
    if (!userPassword) {
      alert('비밀번호를 입력해주세요');
      return;
    }
    if (userPasswordchk != userPassword) {
      alert('비밀번호가 일치하지 않습니다');
      return;
    }
    const data = {
      userName: userName,
      userId:userId,
      userPassword:userPassword
    };
    fetch("http://172.16.11.201:3001/signup", {
      method: "post", //통신방법
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
       
        if (json.success){
          alert('회원가입 완료');
          this.props.navigation.navigate('login');
        }
        else{
          alert('아이디 중복입니다');
        }

      });
  }

  render() {
    return (
      <View style={viewStyles.container}>
        
      <Text style={textStyles.title}>SIGN UP</Text>
      <View style={{flexDirection:'row'}}>
       <Text style={loginboxStyles.text}>Eter name   </Text>
       <TextInput style= {loginboxStyles.inputbox} onChangeText={(userName)=>this.setState({userName})} ></TextInput></View>
      <View style={{flexDirection:'row'}}>
       <Text style={loginboxStyles.text} >Enter id        </Text>
       <TextInput style= {loginboxStyles.inputbox} onChangeText={(userId)=>this.setState({userId})}></TextInput></View>
     <View style={{flexDirection:'row'}}>
       <Text style={loginboxStyles.text} >Enter pw      </Text>
       <TextInput style= {loginboxStyles.inputbox} secureTextEntry={true} onChangeText={(userPassword)=>this.setState({userPassword})} ></TextInput>
     </View>
     <View style={{flexDirection:'row'}}>
       <Text style={loginboxStyles.text}>R/e-enter pw</Text>
       <TextInput style= {loginboxStyles.inputbox} secureTextEntry={true} onChangeText={(userPasswordchk)=>this.setState({userPasswordchk})}></TextInput></View>
     <TouchableOpacity>
     <Text style={loginboxStyles.button} onPress={this.handleSubmitButton} >submit</Text>
     </TouchableOpacity>
 
   </View>
    );
    }
  }
  