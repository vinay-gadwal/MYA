
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,Image,Button
} from 'react-native';

import TrackPlayer, { ProgressComponent } from 'react-native-track-player';
//import PlayerStore from './PlayerStore';
console.disableYellowBox = true;
class ProgressBar extends ProgressComponent {
  render() {
    return (
      <View style={styles.progress}>
        <View style={{ flex: this.getProgress(), backgroundColor: 'red' }} />
        <View style={{ flex: 1 - this.getProgress(), backgroundColor: 'grey' }} />
      </View>
    );
  }
}

function ControlButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.controlButtonContainer} onPress={onPress}>
      <Text style={styles.controlButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {middlebutton:"pause"};
   
    TrackPlayer.setupPlayer().then(() => {
        var track = {
            id: 'unique track id',
            url: require('./SampleAudio_0.4mb.mp3'),
            title: 'title',
            artist:'art',
           

        }
        TrackPlayer.add(track).then(()=>
        {
            TrackPlayer.play();
            TrackPlayer.setVolume(1);
        })
    });
    TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
      ]
    });
  }

  togglePlayback(){
      
    if(this.state.middlebutton == "pause")
     {
      TrackPlayer.pause();
      this.setState({middlebutton:"play"});
      console.log(this.state.middlebutton)
     }

   else if(this.state.middlebutton == "play"){
     TrackPlayer.play();
      this.setState({middlebutton:"pause"});
      console.log(this.state.middlebutton)
    }
  }

skipToNext = async () => {
  try {
    await TrackPlayer.skipToNext()
  } catch (_) {
    TrackPlayer.reset();
  }
}

skipToPrevious = async () => {
  try {
    await TrackPlayer.skipToPrevious()
  } catch (_) {}
}

  render() {
    return (
      <View style={styles.container}>
       <Image
          style={{width: 200, height: 300}}
          source={{uri: 'https://awllpaper.com/wp-content/uploads/2018/03/music-wallpaper-mobile-best-mobile-music-wallpapers-7.jpg'}}
        />
      <Text>Track-Player</Text>
        <ProgressBar />
        <View style={styles.controls}>
          <Button title={'<<'}  />
          <ControlButton title={this.state.middlebutton} onPress={() => this.togglePlayback()} />
         <Button title={'>>'} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
  },
  progress: {
    height: 1,
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
  },
  controls: {
    marginVertical: 20,
    flexDirection: 'row',
  },
  controlButtonContainer: {
    flex: 1,
  },
  controlButtonText: {
    fontSize: 18,
    textAlign: 'center',
  },
});