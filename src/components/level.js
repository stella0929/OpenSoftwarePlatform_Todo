import React, {Component} from 'react';
import { Text, TextInput, View,TouchableOpacity } from 'react-native';
import { viewStyles, textStyles, loginboxStyles } from '../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class levelScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      level: 0
    }
    AsyncStorage.getItem('level', (err, result) => {
      this.setState({level:result})
    });
  }
  back(){
    this.props.navigation.navigate('main');
  }
  render(){

  return (
    
    <View style={viewStyles.container}>
       <Text style={textStyles.title}>내 레벨: {this.state.level}</Text>
       <Text >레벨 시스템</Text>
       <Text>bronze (achieve)</Text>
       <Text>silver {this.state.level >  5 ? '(achieve)' : '(lock)'}</Text> 
       <Text >gold {this.state.level >  10 ? '(achieve)' : '(lock)'}</Text> 
       <Text>platinum {this.state.level >  15 ? '(achieve)' : '(lock)'}</Text> 

       <Text >레벨 올리기</Text>
       <Text > - 새 목표 만들기</Text>
       <Text > - 활동 내용 인증하기</Text>
       <TouchableOpacity onPress={()=> this.back()}>
      <Text style={loginboxStyles.button}>back</Text>
      </TouchableOpacity>
    </View>
  );
}
  
}


  