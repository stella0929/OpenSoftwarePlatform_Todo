import React, {Component} from 'react';
import { Text, View,TouchableOpacity } from 'react-native';
//import { ProgressBar, Colors } from 'react-native-paper';
import * as Progress from 'react-native-progress';
import { viewStyles, textStyles, loginboxStyles } from '../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class levelScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      level: 0,
      progress: 0
    }
    AsyncStorage.getItem('level', (err, result) => {
      this.setState({level: JSON.parse(result)})
    });
    AsyncStorage.getItem('progress', (err, result) => {
      this.setState({progress:JSON.parse(result)})
    });
    console.log("levelscreen 생성자");
  }


  render(){

  return (    
    <View style={viewStyles.container}>
      <Text>내 레벨: {this.state.level}</Text>
       <Progress.Bar progress={this.state.progress/100/*다음레벨될때까지의 퍼센트지 localstorage 저장 필요*/} width={200}  /> 
    </View>
  );
}
  
}


  