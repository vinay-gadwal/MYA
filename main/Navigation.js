import React,{Component} from 'react'
import { StyleSheet, TextInput, View, Alert,Icon,Image, Button, Text} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SignIn from './Login'
import SignUp from './Register'
import ForgetPassword from './ForgetPassword';
import App from './App'
import Scroll from './Click_On_Album'
import Album from './Album'
import Music from './musicPlay'
import Home from './Home'
import MyFlatList from './components/flatList/FlatList'
import StartClass from './Start_Class'
class LoginActivity extends Component {
  
constructor(props) {
 
    super(props)
  }
 
UserLoginFunction = () =>{
     
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
 
export default MainProject = StackNavigator(
{
  App: { screen: App },
   ForgetPassword: { screen: ForgetPassword },
   Third: { screen: SignIn },
   SignUp: { screen: SignUp }, 
   Scroll: { screen : Scroll},
   Sixth:{screen: Album}  ,
   Music :{screen :Music},
   Home : {screen: Home},   
   StartClass:{screen : StartClass}
},{
    initialRouteName: 'App',
    navigationOptions: {
      
          headerStyle: {
            backgroundColor: 'black',
           flexBasis:0,
           flexGrow:0,
           flexShrink:0,
           flexWrap:0,
          },
      
        
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