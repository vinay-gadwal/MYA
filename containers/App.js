
import React from 'react'
import { Image, StyleSheet,Text } from 'react-native'
import { TabNavigator } from 'react-navigation'
console.disableYellowBox = true;
import ForgetPassword from './ForgetPassword';
import SignIn from './Login'
import SignUp from './Register'

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  }
})

const routes = {
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: 'Login',
      // tabBarIcon: ({ tintColor }) => (
      //   <Image
      //     source={require('./img/red-line-png-0.png')}
      //     style={[styles.icon, { tintColor }]}
      //   />
      // )

    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: 'Signup',
      // tabBarIcon: ({ tintColor }) => (
      //   <Image
      //     source={require('./img/red-line-png-0.png')}
      //     style={[styles.icon, { tintColor }]}
      //   />
      // )
    }
  },
}
//
const routeConfig = {
  tabBarPosition: 'top',
  backgroundColor:'black',
  tabBarOptions: {
    //showLabel: true,
    activeTintColor: "red",
    inactiveTintColor: "black",
    indicatorStyle: { backgroundColor: "grey" },
    labelStyle: {
      //fontFamily: fonts.base,
      fontSize: 18,
      color:"white"
    },
    style: {
      backgroundColor: 'black',
      borderTopWidth: 0,
     // paddingBottom: ,
     paddingTop:10,
    },
    header: {
      visible: true,
    },
  }
}

export default TabNavigator(routes, routeConfig)
