
import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  KeyboardAvoidingView,
  AsyncStorage,Button,TouchableOpacity,ImageBackground
} from "react-native";

import { StackNavigator } from "react-navigation";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      password_confirmation: ""
    };
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: "black",
      elevation: null
    }
  };
  FunctionToOpenFourthActivity = () =>
  {
     this.props.navigation.navigate('Fourth');
     
  }

  async onRegisterPress() {
    const { email, password, name } = this.state;
    console.log(email);
    console.log(name);
    console.log(password);
    await AsyncStorage.setItem("email", email);
    await AsyncStorage.setItem("name", name);
    await AsyncStorage.setItem("password", password);
    this.props.navigation.navigate("Boiler");
  }

  render() {
    return (
      <ImageBackground source={require('./image/spl2x.png')} style={styles.backgroundImage} >

      <View behavior="padding" style={styles.container}>
        {/* <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("./banana.png")} />
          <Text style={styles.subtext}>Sign Up:</Text>
        </View> */}
        <KeyboardAvoidingView>
          <Text style={styles.margin}>Name</Text>
          <TextInput
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="black"
            returnKeyType="next"
            onSubmitEditing={() => this.emailInput.focus()}
          />
          <Text style={styles.margin}>Email</Text>
          <TextInput
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            style={styles.input}
            placeholderTextColor="black"
            returnKeyType="next"
            ref={input => (this.emailInput = input)}
            onSubmitEditing={() => this.passwordCInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email"
          />
          <Text style={styles.margin}>Password</Text>
          <TextInput
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="black"
            ref={input => (this.passwordCInput = input)}
            onSubmitEditing={() => this.passwordInput.focus()}
            returnKeyType="next"
            secureTextEntry
          />
          <Text style={styles.margin}>Confirm Password</Text>
          <TextInput
            value={this.state.password}
            onChangeText={password_confirmation => this.setState({ password_confirmation })}
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
            placeholderTextColor="black"
            returnKeyType="go"
            secureTextEntry
            ref={input => (this.passwordInput = input)}
          />
        </KeyboardAvoidingView>
        <TouchableHighlight
          onPress={this.FunctionToOpenThirdActivity}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableHighlight>
        {/* <View style={{flexDirection:"row",marginTop:10}}>
        <Text style={{color:"grey",fontSize:12}}>Registered? Please </Text>
        <TouchableOpacity  onPress={this.FunctionToOpenFourthActivity}>
        <Text style={{color:"red",fontSize:12}}>Login</Text>
        </TouchableOpacity>
        </View> */}
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
   backgroundColor: "black",
    padding: 20,
    paddingTop: 50
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 200,
    height: 150
  },
  input: {
    height: 50,
    width: 250,
    marginBottom: 15,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "black",
    paddingHorizontal: 10,

  },
  button: {
    height: 50,
    width: 250,
    backgroundColor: "rgb(164,0,0)",
    //alignSelf: "stretch",
    marginTop: 15,
    justifyContent: "center",
    paddingVertical: 10,
    marginBottom: 15
  },
  buttonText: {
    fontSize: 18,
    alignSelf: "center",
    textAlign: "center",
    color: "white",
    fontWeight: "700"
  },
  subtext: {
    color: "#ffffff",
    width: 160,
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 20
  },
  margin:{
    marginBottom:5,
    color:"white"
  }, backgroundImage: {
    flex: 1,
   // backgroundColor:"rgb(164,0,0)"
    },
});

AppRegistry.registerComponent("Register", () => Register);