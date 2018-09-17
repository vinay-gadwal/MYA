
import React from 'react'
import { Image, StyleSheet,Text } from 'react-native'
import { TabNavigator } from 'react-navigation'
console.disableYellowBox = true;
import ForgetPassword from './ForgetPassword';
//mport { colors, fonts } from '../theme'
import SignIn from './Login'
import SignUp from './Register'

const styles = StyleSheet.create({
  icon: {
    width: 65,
    height: 40,
    marginTop: 65

  }
})

const routes = {
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./img/red-line-png-0.png')}
          style={[styles.icon, { tintColor }]}
        />
      ),
      title: 'Login', 

      
    }
  },
  SignUp: {
    screen: SignUp,
    
    navigationOptions: {
      title: 'Signup',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./img/red-line-png-0.png')}
          style={[styles.icon, { tintColor }]}
        />
      )
    }
  },
}

const routeConfig = {
  tabBarPosition: 'top',
  header: null,
  tabBarOptions: {
    activeTintColor: "red",
    inactiveTintColor: "black",
    indicatorStyle: { backgroundColor: "grey" },
    labelStyle: {
      fontSize: 20,
      color:"white",
      marginBottom:12,
      marginTop:0,
      fontWeight:'bold'
    },
    tabbarIconPosition:'bottom',
    style: {
      
      backgroundColor: 'black',
      borderTopWidth: 0,
     paddingTop:10,
    },
    
  }
}

export default TabNavigator(routes, routeConfig)