import React from 'react';
import loginScreen from './components/login';
import SignupScreen from './components/signup';
import mainScreen from './components/main';
import level from './components/level'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'; 
import {createStackNavigator} from 'react-navigation-stack';


const App = createSwitchNavigator(

    {
        main: {screen:mainScreen},
        login: {screen:loginScreen},
        signup:  {screen:SignupScreen},
        level: {screen:level}

    },
   
    {initialRouteName: 'main', headerMode: 'none'}
    
);




export default createAppContainer(App);
