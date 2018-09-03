
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,Image,Button,Alert
} from 'react-native';
import Slider from 'react-native-slider'
import TrackPlayer, { ProgressComponent } from 'react-native-track-player';
//import PlayerStore from './PlayerStore';
console.disableYellowBox = true;
// class ProgressBar extends ProgressComponent {
//   render() {
//     return (
//       <View style={styles.progress}>
//         <View style={{ flex: this.getProgress(), backgroundColor: 'red' }} />
//         <View style={{ flex: 1 - this.getProgress(), backgroundColor: 'grey' }} />
//       </View>
//     );
//   }
// }

function ControlButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.controlButtonContainer} onPress={onPress}>
      <Text style={styles.controlButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default class App extends TrackPlayer.ProgressComponent {
  constructor(props){
    super(props);
    this.state = {middlebutton:"pause",duration: 0,value:0.2};
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

  togglePlayback()
  {
        if(this.state.middlebutton == "pause")
        {
        TrackPlayer.pause();
        this.setState({middlebutton:"play"});
        console.log(this.state.middlebutton)
        }
        else if(this.state.middlebutton == "play")
        {
        TrackPlayer.play();
          this.setState({middlebutton:"pauśe"});
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
formatTime(seconds) {
  return seconds > 3600 
  ?
    [
      parseInt(seconds / 60 / 60),
      parseInt(seconds / 60 % 60),
      parseInt(seconds % 60)
    ].join(":").replace(/\b(\d)\b/g, "0$1")
  :
    [
      parseInt(seconds / 60 % 60),
      parseInt(seconds % 60)
    ].join(":").replace(/\b(\d)\b/g, "0$1")
}
  render() {
    TrackPlayer.getDuration().then(duration=>this.setState({duration}))
    return (
      <View style={styles.container}>
       <Image
          style={{width: 200, height: 300}}
          source={{uri: 'https://awllpaper.com/wp-content/uploads/2018/03/music-wallpaper-mobile-best-mobile-music-wallpapers-7.jpg'}}
        />
      <Text>Track-Player</Text>
      <Text style={{color: 'black',backgroundColor:'transparent',width:40,textAlign:'center',fontSize:12}}>
            { this.state.isSeeking ? this.formatTime(this.seek) : this.formatTime(this.state.position) }
          </Text>
      <Slider 
     // style={styles.slider}
           minimumValue          = {0}
            maximumValue          = {this.state.duration}
            //thumbTintColor        = "black"
         //  minimumTrackTintColor = "red"
          //  maximumTrackTintColor = "rgba(255,255,255,.8)"
            step                  = {1}
            onValueChange ={ val=>{
              TrackPlayer.pause();
              this.seek = val;
              this.setState({isSeeking:true})
            }}
            onSlidingComplete={ val=>{
              this.setState({isSeeking: false },()=> {
                TrackPlayer.seekTo(this.seek);
                this.position = this.seek;
                TrackPlayer.play();
              })
            }}
            value={this.state.isSeeking ? this.seek : this.state.position}
          />
        <View style={styles.controls}>
            <View style={{marginBottom:20,marginEnd:20}}>
            </View>
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
   // alignItems: 'center',
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
  slider:{
   backgroundColor:"black",
    
    alignItems: 'stretch',
    justifyContent: 'center',
  }
});