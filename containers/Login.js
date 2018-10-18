
import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  AsyncStorage,TouchableOpacity,Button,Image,Alert
} from "react-native";
import { createStackNavigator } from "react-navigation";
import SplashScreen from 'react-native-splash-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'

const api = require('./API');

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "ebabu_6",
      password: "ebabu123",
      loading: false,
      user_name :"",
      user_ticket:""
    };
  }
  componentDidMount() {
    SplashScreen.hide();
  }

  FunctionToOpenSecondActivity = () =>
  {
     this.props.navigation.navigate('ForgetPassword');

  }

  FunctionToOpenSixthActivity = () =>
  {
     this.props.navigation.navigate('Home');

  }

  handleClick(){
   
    if(this.state.username == "" || this.state.password == "")
    {
      Alert.alert("Enter Valid Email And Password")
    }
  else{
    this.setState({
      loading: true
    });

    fetch(api.base_url + "/alfresco/service/api/login", {
     method: 'POST',
     headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
      // body :
      body: JSON.stringify({
            username: this.state.username,
            password: this.state.password,
           })
      })
      .then((response) => response.json())

      .then((response) => {
               this.setState({
                    loading: false
                }, ()=>{
                  if (response && response.data && response.data.ticket) {
                    console.log(response);
                     AsyncStorage.setItem('user_ticket', response.data.ticket);
                     AsyncStorage.setItem('user_name', this.state.username);
                      this.props.navigation.navigate('Home');

                  }else{
                    this.setState({ spinner: false });
                    setTimeout(() => {
                      Alert.alert("Please Enter Valid Email And Password");
                    }, 100);
                  }
                }
              );

      })
      .catch((error) => {
        alert('There was an error creating your account.');
      }).done();
    }
}


AlbumApi(){
   
  fetch("https://mya.fitness/alfresco/s/api/dtree/getMyaCRUDedObjects?timestamp=1538570283", {
method: 'GET',
headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
// body : 
body: JSON.stringify({
          timestamp:GLOBAL.user_name
     })
})
.then((response) => response.json())
.then((response) => {
         this.setState({
              loading: false
          }, ()=>{
            if (response && response.data && response.data.ticket) {
              console.log(response);
               AsyncStorage.setItem('user_ticket', response.data.ticket);
                this.props.navigation.navigate('Home');
                
            }else{
              this.setState({ spinner: false });
              setTimeout(() => {
                Alert.alert("Please Enter Valid username And Password");
              }, 100);       
            
                    }
          }
        );                         
})
.catch((error) => {
 
}).done();

}


remove(){ 
  
  AsyncStorage.removeItem('user_name')
  

}
async getUserName() {
  try {
    const user_name = await AsyncStorage.getItem('user_name');
     const user_ticket = await AsyncStorage.getItem('user_ticket');
    this.setState({user_name: user_name});
    this.setState({user_ticket: user_ticket});
    GLOBAL.user_name=this.state.user_name;
    GLOBAL.user_ticket=this.state.user_ticket;
  }catch (error) {
    console.log("Error retrieving data" + error);
  }
}
  render() {
    return (
      <View style={styles.container}>
          <KeyboardAwareScrollView keyboardDismissMode="interactive"
                                 keyboardShouldPersistTaps={true} >
        <Text style={styles.margin}>Email</Text>
        <TextInput
          value={this.state.username}
          // onChangeText={username => this.setState({ username })}
          onChangeText={(text) => this.setState({username:text})}
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
          // onChangeText={password => this.setState({ password })}
          onChangeText={(text) => this.setState({password:text})}
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="black"
          ref={input => (this.passwordCInput = input)}
          onSubmitEditing={() => this.handleClick()}
          returnKeyType="done"
          secureTextEntry
        />
       
        <TouchableOpacity  onPress={this.FunctionToOpenSecondActivity}>
        <Text style={{color:"white",fontSize:12,marginBottom:5,marginTop:0,marginLeft:"48%"}}>FORGOT PASSWORD?</Text>
        </TouchableOpacity>
        <TouchableOpacity
        // onPress={this.FunctionToOpenSixthActivity}
              style={styles.button}
              onPress={() =>{ this.handleClick();this.getUserName();this.AlbumApi()}}>
        <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={{color:'white',marginTop:25,marginHorizontal:"40%"}}>OR</Text>
       
        <View style={{flexDirection:"row",marginTop:10}}>
        <Text style={{color:"grey",fontSize:12,marginHorizontal:"10%"}}>Not Registered? Please </Text>

        <Text  style={{color:"red",fontSize:12}}>Signup</Text>
        </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "black",
    padding: "15%",
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
