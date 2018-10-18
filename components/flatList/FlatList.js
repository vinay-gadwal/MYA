
import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  Text,
  View,
  FlatList,
} from 'react-native';

import styles from './fl_styles';

class MyFlatList extends Component {
  constructor(props) {
    super(props);
 }
 

 renderItem = ({item}) =>{
   return(
     <TouchableOpacity onPress={this.props.mainFunc}>
       <View style={styles.Item}>
         <View style={styles.subItem1}>
           <Image source={{uri:item.srcimg}} style={styles.uploadAvatar}/>
         </View>
         <View style={styles.subItem2}>
           <Text style={styles.textSecond}>{GLOBAL.user_ticket}</Text>
          </View>
       </View>
      </TouchableOpacity>
   );
 }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.fl}
          renderItem={this.renderItem}
          keyExtractor={(item,index) => index.toString()}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          horizontal = {false}
          alwaysBounceHorizontal ={false}
        />
      </View>

    );
  }
}

export default MyFlatList
