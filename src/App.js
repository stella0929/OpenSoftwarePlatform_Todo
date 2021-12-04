import React from 'react';
import loginScreen from './components/login';
import SignupScreen from './components/signup';
import mainScreen from './components/main';
import {createAppContainer} from 'react-navigation'; 
import {createStackNavigator} from 'react-navigation-stack';


const App = createStackNavigator(

    {
        main: {screen:mainScreen},
        login: {screen:loginScreen},
        signup:  {screen:SignupScreen}

    },
   
    {initialRouteName: 'main', headerMode: 'none'}
    
);




export default createAppContainer(App);
