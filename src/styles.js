import { StyleSheet } from "react-native";
import {theme} from './theme'
export const viewStyles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor:theme.backgroundColor,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
}); 
export const loginboxStyles = StyleSheet.create({
  text:{
    margin:10,
  fontWeight: 'bold',
  fontSize: 20,
  textAlign: 'center'
  },
  button: {fontWeight: 'bold',
  fontStyle: 'italic',
  textAlign: 'center', 
  textDecorationLine: 'underline',
  fontSize: 20,},
  inputbox:{

    borderWidth: 1,width: 200,height:40,  margin:10,padding: 10, fontSize: 20
  }
});

export const textStyles = StyleSheet.create({
  title: {
    fontSize:40,
    fontWeight:'600',
    color: theme.main,
    alignItems:'flex-start',
    marginTop:30,
    marginLeft:0,
  },
});
