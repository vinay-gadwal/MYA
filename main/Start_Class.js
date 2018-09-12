


import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  AsyncStorage,TouchableOpacity,Button,Image
} from "react-native";


export default class StartClass extends Component {
  constructor() {
    super();
    this.state = {
      email: "", 
      password: "",
    };
  }

  static createStackNavigator = {
    headerTitle: 'First screen',
    backgroundColor:"black"
  };
  

  render() {
    return (
      <View>
          <Text>Start Class Page</Text>
          </View>
    );
  }
}

