import React, { Component } from 'react';
import { StyleSheet, View, Text, Image
 } from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

export default class Popup extends Component{
  render(){
  return(
  <View>
    <Menu onSelect={value => alert(`Selected number: ${value}`)}>
      <MenuTrigger >
      <Image style={styles.ButtonStyle} source={require('./../icon/more.png')}/>
      </MenuTrigger>
      <MenuOptions style={{left:80,backgroundColor:'white'}}>
        <MenuOption value={1} text='One' />
        <MenuOption value={2}>
          <Text style={{color: 'red'}}>Two</Text>
        </MenuOption>
        <MenuOption value={3} disabled={true} text='Three' />
      </MenuOptions>
    </Menu>
  </View>
)}
};

const styles = StyleSheet.create({
            ButtonStyle:{
              height:28,
              width:27,
              marginTop:40,
              marginBottom:40,
                marginRight:20
            }});
