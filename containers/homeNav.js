
import React, { Component } from 'react';
import {
  TouchableOpacity,
  Navigator,
  Image
} from 'react-native';

import { createDrawerNavigator , createStackNavigator } from 'react-navigation';

import Home from "./Home"
import AddBid from "./Start_Class"
import ShowBid from "./Login"

class Hidden extends Component {
  render() {
    return null;
  }
}

const DrawerMain = createDrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      drawerLabel: "Home",
    }
  },
  AddBid: {
    screen: AddBid,
    navigationOptions: {
      drawerLabel: "Bid on Ads",
    }
  },
  ShowBid: {
    screen: ShowBid,
    navigationOptions: {
      drawerLabel: "Show Bids on Ads",
    }
  },
  // SellMode: {
  //   screen: SellNav,
  //   navigationOptions: {
  //     drawerLabel: "Switch mode to Seller",
  //   }
  // },
});

class HomeNav extends Component {
  constructor(props){
    super(props);
  }
  toggleDraw = () => {
    this.props.navigation.dispatch(DrawerActions.toggleDrawer());
    console.log("heyy");
  }
  static navigationOptions = {
    headerLeft: null,
    headerStyle: {
      backgroundColor: "white",
    },
    title:"Home2",
    headerBackTitle:'Bodypump 101',
    tintColor: '#0087B7',
    headerLeft: (
      <TouchableOpacity onPress={this.toggleDraw}>
      <Image style={{
        height:25,
        width:25,
        marginTop:40,
        marginBottom:40,
        marginLeft:20,
        marginRight:10
      }} source={require('./../static/img/icons/ham_icon.png')}/>
      </TouchableOpacity>
      ),
  }
  render() {
    return <DrawerMain />;
  }
}

export default DrawerMain
