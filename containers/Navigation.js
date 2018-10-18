import React,{Component} from 'react'
import { StyleSheet, TextInput, View, Alert,Icon,Image, Button, Text} from 'react-native';
import { createStackNavigator , createDrawerNavigator} from 'react-navigation';
import SignIn from './Login'
import SignUp from './Register'
import ForgetPassword from './ForgetPassword';
import App from './App'
import Scroll from './Click_On_Album'
import Home from './Home'
import HomeNav from './homeNav'
import StartClass from './Start_Class'
import CalendarsScreen from './calander'
class LoginActivity extends Component {

  constructor(props) {
    super(props);
  }

  UserLoginFunction = () => {
    this.props.navigation.navigate('ForgetPassword');
  }

  render() {
    return (

      <View style={styles.MainContainer}>
        <TextInput
          placeholder="Enter User Email"
          onChangeText={email => this.setState({email})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
      </View>
    );
  }
}

const MainProject = createStackNavigator({
  App: { screen: App },
  ForgetPassword: { screen: ForgetPassword },
  Scroll: { screen : Scroll},
  Home : {screen: Home},
  StartClass:{screen : StartClass}
  },
  {
    initialRouteName: 'App',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'black',
        height:20,
      },
    },
    header: {
      visible: false,
    },
  });

export default MainNav = createDrawerNavigator({
  MainScreen: {
    name: 'MainScreenStack',
    screen: MainProject,
  },
  Calender:{
    screen:CalendarsScreen
  }
});

const styles = StyleSheet.create({

MainContainer :{
justifyContent: 'center',
flex:1,
},

TextInputStyleClass: {

textAlign: 'center',
marginBottom: 7,
height: 40,
borderWidth: 1,
 borderColor: 'black',
  borderRadius: 5 ,
},

 TextComponentStyle: {
   fontSize: 20,
  color: "#000",
  textAlign: 'center',
  marginBottom: 15
 }
});
