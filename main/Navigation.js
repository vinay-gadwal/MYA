import { StyleSheet, TextInput, View, Alert,Icon,Image, Button, Text} from 'react-native';
import React,{Component} from 'react'
import { StackNavigator } from 'react-navigation';
import SignIn from './Login'
import SignUp from './Register'
import ForgetPassword from './ForgetPassword';
import TabNavigator from './App'

class LoginActivity extends Component {
  
  static navigationOptions =
 {
    title: 'AdManager',  
 };
constructor(props) {
 
    super(props)
  }
 
UserLoginFunction = () =>{
     
        this.props.navigation.navigate('Second');
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
 
export default MainProject = StackNavigator(
{
   First: { screen: TabNavigator },
   Second: { screen: ForgetPassword },
   Third: { screen: SignIn },
   Fourth: { screen: SignUp },             
},{
    initialRouteName: 'First',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'black',
        marginBottom:0,
        marginEnd:0
      },
      headerTintColor: 'red',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      marginBottom:0,
      padding:0,
    },
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