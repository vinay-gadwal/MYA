import { StyleSheet, TextInput, View, Alert,Icon,Image, Button, Text} from 'react-native';
import React,{Component} from 'react'
import { StackNavigator } from 'react-navigation';
import SignIn from './Login'
import SignUp from './Register'
import ForgetPassword from './ForgetPassword';
import TabNavigator from './App'
import Scroll from './Click_On_Album'
import Album from './Album'
import Music from './musicPlay'
import Home from './Home'
import MyFlatList from './components/flatList/FlatList'
import StartClass from './Start_Class'
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
   Fifth: { screen : Scroll},
   Sixth:{screen: Album}  ,
   Seventh :{screen :Music},
   Home : {screen: Home},   
   StartClass:{screen : StartClass}
},{
    initialRouteName: 'First',
    navigationOptions: {
          headerStyle: {
            backgroundColor: '#eee',
            marginBottom:0,
            marginEnd:0,
          },
          headerBackImage: <Image style={{    height:30,
                                    width:30,
                                    marginTop:40,
                                    marginBottom:40,
                                    marginLeft:15,
                                    marginRight:10}} source={require('./icon/back.png')}
                             />,
         //headerRight: 
        //  (
        //                         <Button style={{color:'black',marginBottom:5}}
        //                           onPress={() => alert('This is a button!')}
        //                           title="Info"
                                  
        //                         />
        //                       ),
          headerBackTitle:false,
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