import React, {Component, useEffect} from 'react';
import { Text, TextInput, View,TouchableOpacity,StatusBar } from 'react-native';
import { viewStyles, textStyles, loginboxStyles } from '../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
const colors = {
  themeColor: "#48D1CC",
  white: "#fff",
  background: "#f4f6fc",
  greyish: "#a4a4a4",
  tint: "#AFEEEE",
};
function complete(){
  console.log("in");
  AsyncStorage.getItem('progress', (err, result) => {
    const progress = JSON.parse(result) +10
    if (progress>=100){
      AsyncStorage.getItem('level', (err, level) => {
        const l = JSON.parse(level) +1
        AsyncStorage.setItem('level',JSON.stringify(l), () => {
        });
        AsyncStorage.setItem('progress',JSON.stringify(0), () => {
        });
      });
    }
    AsyncStorage.setItem('progress',JSON.stringify(progress), () => {
    });
    
  });

}
const Task = ({ task, icon, theme, stamp }) => {
  return (
    
    <View
      style={{
        backgroundColor: colors.white,
        flexDirection: "row",
        marginHorizontal: 16,
        marginVertical: 4,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 24,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View >
        
        <MaterialCommunityIcons
          name={icon}
          size={30}
          style={{ color: theme }}
        />
        <View>
          <Text style={{ fontSize: 16 }}>{task}</Text>
          <Text style={{ color: colors.greyish }}>{stamp}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <MaterialCommunityIcons
          name="pencil"
          size={30}
          style={{ color: "#808080" }}
        />
        <MaterialCommunityIcons
           
          name="trash-can"
          size={30}
          style={{ color: "#808080" }}
        />
               <MaterialCommunityIcons
               onPress={()=>complete()}
          style={{ flexDirection: "row" }}
           name="check"
           size={30}
           style={{ color: "#808080" }}
         />
      </View>
    </View>
  );
};

export default class mainScreen extends Component {
  constructor(props){
    super(props);
 
    AsyncStorage.getItem('id', (err, result) => {
      console.log("constructor진입");
      console.log(result);
     const {id}= this.state;
     this.setState({id: result});
    });

    this.state = {
      tasks : [
        {
          task: "알고리즘 풀기",
          icon: "book",
          theme: "#FFA500",
          stamp: "스터디",
        },
        {
          task: "아침 러닝 30분",
          icon: "weight-lifter",
          theme: "#CD5C5C",
          stamp: "운동",
        },
        {
          task: "유산소 30분",
          icon: "weight-lifter",
          theme: "#CD5C5C",
          stamp: "운동",
        },
        {
          task: "과일 주문하기",
          icon: "fruit-grapes",
          theme: "#8B008B",
          stamp: "식단",
        },
      ], text: "", id: ""
    }
    AsyncStorage.getItem('authenticated', (err, result) => {
      console.log("constructor진입");
      console.log(result);
      
      if(!JSON.parse(result)){
        this.props.navigation.navigate('login');
      }
    });

  }
  completeTask(){
    this.state.tasks.filter(state.tasks.task !==t.task)
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
  
  handleAddTask () {
    const { tasks } = this.state;
    const { text } = this.state;
    this.setState({
      tasks: tasks.concat({task: text,
      icon: "fruit-grapes",
      theme: "#8B008B",
      stamp: "스터디",})
    })
    
  };
  render(){
  return (
    
    <View
      style={{
        flex: 1,
        background: colors.themeColor,
      }}
    >
     
      <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
      
      <View Style={{ backgroundColor: colors.themeColor }}>
     
      
      
        <View>

          <Text style={{ color: colors.black, fontSize: 30 }}>
          {"안녕하세요 "}{this.state.id}{"님 "}

          </Text>
    
          <View
            style={{
              paddingHorizontal: 16,
              paddingVertical: 6,
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: colors.tint,
              borderRadius: 20,
              marginVertivcal: 20,
              alignItems: "center",
            }}
          >     

            <MaterialCommunityIcons
              name="magnify"
              size={30}
              style={{ color: colors.white }}
            />
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="microphone"
                size={30}
                style={{ color: colors.white }}
              />
              <MaterialCommunityIcons
                name="tune"
                size={30}
                style={{ color: colors.white }}
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          padding: 20,
          flexDirection: "row",
          backgroundColor: colors.background,
          justifyContent: "space-between",
          alignItems: "center",
          borderTopLeftRadius: 20,
        }}
      >
        <Text style={{ fontSize: 24 }}>할일</Text>
        <TextInput
              placeholder={"Write a task"}
              onChangeText={(text) => this.setState({text})}
            />
        <MaterialCommunityIcons
        onPress={() => this.handleAddTask()}
        
          name="plus"
          size={30}
          style={{
            color: colors.themeColor,
            backgroundColor: colors.white,
            borderRadius: 20,
            marginHorizontal: 8,
          }}
        />
      </View>

      <ScrollView     style={{ backgroundColor: colors.background }}>
        {this.state.tasks.map((task) => (
          <Task
            task={task.task}
            icon={task.icon}
            theme={task.theme}
            stamp={task.stamp}
          />
     
        ))}
      </ScrollView>
 
      <TouchableOpacity onPress={()=> this.logout()}>
      <Text style={loginboxStyles.button}>logout</Text>
      </TouchableOpacity>
     
      <TouchableOpacity onPress={()=> this.level()}>
      <Text style={loginboxStyles.button}>level</Text>
      </TouchableOpacity>
 
    </View>
  );
}

}


  