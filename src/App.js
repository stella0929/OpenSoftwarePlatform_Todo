import React from 'react';
import loginScreen from './components/login';
import SignupScreen from './components/signup';
import {createAppContainer} from 'react-navigation'; 
import {createStackNavigator} from 'react-navigation-stack';
const App = createStackNavigator(

    {
   
        login: {screen:loginScreen},
        signup:  {screen:SignupScreen}

    },

    {initialRouteName: 'login', headerMode: 'none'}

);


export default createAppContainer(App);
