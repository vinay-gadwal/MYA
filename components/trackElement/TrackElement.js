
import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  Text,
  View,
  FlatList,
} from 'react-native';

import styles from './te_styles';

class TrackElement extends Component {
  constructor(props) {
    super(props);
  }
  
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image style={{height:80,width:80,marginTop:10,marginBottom:5,marginLeft:10,marginRight:10}} source={require('./../../static/img/albumart/running.jpeg')} />
        </View>
        <View style={styles.textContainer}>
          <Text>{this.props.track.trackname}</Text>
          <Text style={{fontSize:10,marginTop:5}}>Track type-WARMUP</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Image style={styles.ButtonStyle} source={require('./../../static/img/icons/greenplay.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Image style={styles.ButtonStyle} source={require('./../../static/img/icons/download.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Image style={styles.ButtonStyle} source={require('./../../static/img/icons/more.png')}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default TrackElement
