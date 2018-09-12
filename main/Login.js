
// import React, { Component } from "react";
// import {
//   AppRegistry,
//   KeyboardAvoidingView,
//   TouchableOpacity,
//   AsyncStorage,
//   Image,
//   TextInput,
//   StyleSheet, // CSS-like styles
//   Text, // Renders text
//   View // Container component
// } from "react-native";

// import { StackNavigator } from "react-navigation";
// //import Spinner from "react-native-loading-spinner-overlay";

// export default class Login extends Component {
//   constructor() {
//     super();
//     this.state = {
//       email: "",
//       password: ""
//     };
//   }
//   static navigationOptions = {
//     headerStyle: {
//       backgroundColor: "black",
//       elevation: null
//     },
//     header: null
//   };
//   async onLoginPress() {
//     const { email, password } = this.state;
//     console.log(email);
//     console.log(password);
//     await AsyncStorage.setItem("email", email);
//     await AsyncStorage.setItem("password", password);
//     this.props.navigation.navigate("Boiler");
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <View behavior="padding" style={styles.container}>
//           {/* <View style={styles.logoContainer}>
//             <Image style={styles.logo} source={require("./banana.png")} />
//             <Text style={styles.subtext}>Humdum</Text>
//           </View> */}
//           <KeyboardAvoidingView style={styles.keyboard}>
//             <TextInput
//               placeholder="Username"
//               placeholderTextColor="rgba(255,255,255,0.7)"
//               returnKeyType="next"
//               onSubmitEditing={() => this.passwordInput.focus()}
//               keyboardType="email-address"
//               autoCapitalize="none"
//               autoCorrect={false}
//               value={this.state.email}
//               onChangeText={email => this.setState({ email })}
//             />
//             <TextInput
//               placeholder="Password"
//               placeholderTextColor="rgba(255,255,255,0.7)"
//               returnKeyType="go"
//               secureTextEntry
//               ref={input => (this.passwordInput = input)}
//               value={this.state.password}
//               onChangeText={password => this.setState({ password })}
//             />

//             <TouchableOpacity
//               style={styles.buttonContainer}
//               onPress={this.onLoginPress.bind(this)}
//             >
//               <Text style={styles.buttonText}>LOGIN</Text>
//             </TouchableOpacity>
//           </KeyboardAvoidingView>
//         </View>
       
//         {/* <TouchableOpacity style={styles.button}>
//           <Text
//             style={styles.buttonText}
//             onPress={() => this.props.navigation.navigate("ForgetPassword")}
//             title="Forget Password"
//           >
//             Forget Password
//           </Text>
//         </TouchableOpacity> */}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "black"
//   },
//   logoContainer: {
//     alignItems: "center",
//     flexGrow: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   logo: {
//     width: 200,
//     height: 150
//   },
//   subtext: {
//     color: "#ffffff",
//     marginTop: 10,
//     width: 160,
//     textAlign: "center",
//     opacity: 0.8
//   },
//   keyboard:{
//     margin: 20,
//     padding: 20,
//     alignSelf: "stretch"
//   },
//   buttonContainer: {
//     backgroundColor: "rgba(255,255,255,0.2)",
//     paddingVertical: 15
//   },
//   buttonText: {
//     textAlign: "center",
//     color: "#FFF",
//     fontWeight: "700"
//   },
//   button: {
//     backgroundColor: "#27ae60",
//     paddingVertical: 15
//   }
// });

// AppRegistry.registerComponent("Login", () => Login);

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
import ForgetPassword from './ForgetPassword';
import { createStackNavigator } from "react-navigation";

const RootStack = createStackNavigator({
    ForgetPassword: {
      screen: ForgetPassword
    },
  });
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "", 
      password: "",
    };
  }

  static createStackNavigator = {
    headerTitle: 'First screen',
    backgroundColor:"black"
  };
  FunctionToOpenSecondActivity = () =>
  {
     this.props.navigation.navigate('Second');
     
  }

  FunctionToOpenSixthActivity = () =>
  {
     this.props.navigation.navigate('Home');
     
  }
  async onLoginPress() {
        const { email, password } = this.state;
        console.log(email);
        console.log(password);
        await AsyncStorage.setItem("email", email);
        await AsyncStorage.setItem("password", password);
       // this.props.navigation.navigate("Boiler");
      }

  render() {
    return (
      <View behavior="padding" style={styles.container}>
        <KeyboardAvoidingView>
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
        </KeyboardAvoidingView>
        <TouchableOpacity  onPress={this.FunctionToOpenSecondActivity}
              >
        <Text style={{color:"white",fontSize:12,marginBottom:5,marginTop:0}}>                                     FORGOT PASSWORD?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.FunctionToOpenSixthActivity}
              style={styles.button}
              //onPress={this.onLoginPress.bind(this)}
            >
        <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={{color:'white',marginTop:25}}>OR</Text>
        <View style={{justifyContent: 'space-between',alignItems: 'flex-end',flexDirection:'row',marginTop:30}}>
               <TouchableOpacity >
                <Image 
                      style={styles.Custom}
                          source={require('./icon/fb.png')}
                      />
                </TouchableOpacity>
                <TouchableOpacity>
                 <Image 
                style={styles.Custom}
                    source={require('./icon/google.png')}
                />
                </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row",marginTop:10}}>
        <Text style={{color:"grey",fontSize:12}}>Not Registered? Please </Text>
        
        <Text  style={{color:"red",fontSize:12}}>Signup</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1.2,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "black",
    padding: 20,
    paddingTop: 100
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
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#fff",
    paddingHorizontal: 10
  },
  button: {
    height: 50,
    width: 250,
    backgroundColor: "rgb(164,0,0)",
    //alignSelf: "stretch",
    marginTop: 10,
    justifyContent: "center",
    paddingVertical: 10,
    marginBottom: 10
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
    color:"white",
    //fontSize:12
  },
  Custom:{height:43,marginTop:5,
    width:86,
    marginTop:5,
    marginBottom:30,marginLeft:10

  }
});

AppRegistry.registerComponent("Login", () => Login);