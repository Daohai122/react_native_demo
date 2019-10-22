/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class App extends Component{
  constructor(prop){
    super(prop);
    this.callApi();
  }
  callApi(){
    debugger;
    fetch('http://192.168.1.41:21021/mis-api/users/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'son',
        phone: '0943611060',
        email:'hai',
        userName: 'hai',
        password: 'hai',
        roleName: "admin"
      }),
    }).then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error)
    });
  }
  render(){
    return(

      <View><Text>content</Text></View>

    )
  }
}




export default App;
