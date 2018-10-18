import React, { Component } from 'react';
import { View,AppRegistry,Button, ScrollView,ImageBackground,StatusBar, Image, Text,TouchableOpacity,StyleSheet } from 'react-native';
import Slider from 'react-native-slider'
import TrackPlayer, { ProgressComponent } from 'react-native-track-player';
console.disableYellowBox = true;
const pause = require('./../static/img/icons/play.png');
const play = require('./../static/img/icons/pause.png');

 class ProgressBar extends TrackPlayer.ProgressComponent {
  render() {
    return (
      <View style={styles.progress}>
        <View style={{ flex: this.getProgress(), backgroundColor: 'red' }} />
        <View style={{ flex: 1 - this.getProgress(), backgroundColor: 'red' }} />
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

export default class Scroll extends TrackPlayer.ProgressComponent {
  constructor(props){
    super(props);
    this.seekMusic=this.seekMusic.bind(this);
    this.skipToNext=this.skipToNext.bind(this);
    this.skipToPrevious=this.skipToPrevious.bind(this);
    this.state = { middlebutton:false,duration: 0,value:0.2, paused: true,
                    totalLength: 1,
                    currentPosition: 0,
                    selectedTrack: 0,
                    repeatOn: false,
                    shuffleOn: false,State:false,
              };

            TrackPlayer.setupPlayer().then(() => {
                var track = [{
                    id: '1',
                    url: require('./../static/songs/song2.mp3'),
                    //url: 'https://drive.google.com/uc?export=download&id=1VM9_umeyzJn0v1pRzR1BSm9y3IhZ3c0E',
                    title: 'title',
                    artist:'art',
                  },
                  {
                    id: '2',
                    url: require('./../static/songs/song3.mp3'),
                    //url: 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3',
                    title: 'title',
                    artist:'art',
                  }]
                 TrackPlayer.add(track).then(()=>
                   {
                    TrackPlayer.paused();
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

  static navigationOptions = {
    headerStyle: {
      backgroundColor: "rgb(164,0,0)",
    } ,
    headerRight: (
      <Image style={{
        height:25,
        width:25,
        marginTop:40,
        marginBottom:40,
        marginLeft:20,
        marginRight:10
      }} source={require('./../static/img/icons/more_white.png')}/>
      ),
headerBackImage: <Image style={{    height:20,
          width:30,
          marginTop:40,
          marginBottom:40,
          marginLeft:15,
          marginRight:10
        }} source={require('./../static/img/icons/BackWhite.png')}
   />
  }

    counting(seconds)
    {
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
                ].join(":").replace(/\b(\d)\b/g,"0$1")
    }
    // componentWillMount()  {
    //   this.formatTime();
    //   this.renderImage();
    // }
    formatTime(seconds)
    {
      if(seconds > 0){
        var rem = (this.state.duration) - (this.state.position);
        return [  parseInt(rem / 60 % 60),
                  parseInt(rem % 60)
                  ].join(":").replace(/\b(\d)\b/g, "0$1")
      }
    }

    renderImage(){
      var imgSource = this.state.middlebutton? play : pause;
      return (
        <View>
        <Image  style={{width:90, height: 90,marginTop:7,marginBottom:10,marginLeft:15,marginRight:15}}
          source={ imgSource }
        />
        </View>
      );
    }
    togglePlayback()
    {
      if(this.state.middlebutton == true)
      {
        TrackPlayer.pause();
        }
      else if(this.state.middlebutton == false)
      {
        TrackPlayer.play();
        }
    }
    onBack() {
      if (this.state.duration > 0) {

        this.setState({ duration: this.state.duration + 15 });
      }
    }

  async seekMusic(cValue){
    try {
      await TrackPlayer.seekTo(cValue);
    } catch (_) {
      TrackPlayer.reset();
    }
  }
  async skipToNext(){
    try {
      await TrackPlayer.skipToNext()
    } catch (_) {
      TrackPlayer.reset();
    }
  }

  async skipToPrevious(){
    try {
      await TrackPlayer.skipToPrevious()
    } catch (_) {}
  }

  render() {
    TrackPlayer.getDuration().then((dur)=>{this.setState({duration: dur})});
      return (
        <ImageBackground source={require('./../static/img/bg/musicplayerbg.png')} style={styles.backgroundImage} >
        <View style={styles.container}>
          <StatusBar hidden={false} />
            <View style={styles.albumartContainer}>
              <Image
                 style={{width: "60%", height: "80%",marginLeft:"10%",marginRight:"10%",marginBottom:"1%"}}
                source={{uri: 'https://awllpaper.com/wp-content/uploads/2018/03/music-wallpaper-mobile-best-mobile-music-wallpapers-7.jpg'}}
                />
            </View>
            <View style={styles.sliderContainer}>
              <Slider
                style={{marginLeft:35,marginRight:35, height:80}}
                thumbStyle={styles.thumb}
                trackStyle={styles.track}
                minimumValue          = {0}
                maximumValue          = {Math.floor(parseInt(this.state.duration?this.state.duration:1))}
                thumbTintColor        = "white"
                minimumTrackTintColor = "red"
                maximumTrackTintColor = "#F6F1F0"
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
            </View>

        <View style={styles.timeContainer}>
              <Text style={{color: 'white',backgroundColor:'transparent',width:40,marginRight:10,marginLeft:25,fontSize:14,justifyContent:'flex-end'}}>
                { this.state.isSeeking ? this.formatTime(this.seek) :this.counting(this.state.position) }
              </Text>
              <Text style={{color: 'white',backgroundColor:'transparent',width:40,marginRight:30,marginLeft:35,fontSize:14}}>
                { this.state.isSeeking ? this.formatTime(this.seek) : this.formatTime(this.state.duration) }
              </Text>
        </View>
        <View style={{justifyContent: 'space-between',alignItems: 'center',flexDirection:'row',marginTop:"%"}}>
           <TouchableOpacity onPress={this.FunctionToOpenSixthActivity}
              style={styles.button}
            >
            <Text style={styles.buttonText}>Auto Delay</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.FunctionToOpenSixthActivity}
              style={styles.button1}
            >
            <Text style={styles.buttonText}>Auto Pause</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.controlContainer}>

            <View style={[styles.control1,{alignItems:'flex-end'}]}>
              <TouchableOpacity onPress={()=>{this.seekMusic(this.state.position>=15?this.state.position-15:0);}}>
                <Image style={{width: 50, height: 50,marginTop:30,marginRight:10}}
                  source={require('./../static/img/icons/previous15.png')}/>
              </TouchableOpacity>
            </View>

            <View style={styles.control2}>
              <TouchableOpacity onPress={()=>{this.skipToPrevious();}}>
                <Image style={{width: 65, height: 65,marginTop:3,marginLeft:15,marginRight:30,marginBottom:8}}
                  source={require('./../static/img/icons/previous.png')}/>
              </TouchableOpacity>
            </View>

            <View style={styles.control3}>
              <TouchableOpacity onPress={() => {this.togglePlayback();this.setState({ middlebutton: !this.state.middlebutton });}}>
                  {this.renderImage()}
              </TouchableOpacity>
            </View>

            <View style={styles.control2}>
              <TouchableOpacity onPress={()=>{this.skipToNext();}}>
                <Image style={{width: 65, height: 65,marginTop:1,marginLeft:30,marginRight:15,marginBottom:14}} source={require('./../static/img/icons/next.png')}/>
              </TouchableOpacity>
            </View>

            <View style={[styles.control1,{alignItems:'flex-start'}]}>
              <TouchableOpacity onPress={()=>{this.seekMusic(this.state.position+15);}}>
                <Image style={{width: 50, height: 50,marginTop:25,marginLeft:8,marginBottom:12}} source={require('./../static/img/icons/next15.png')}/>
              </TouchableOpacity>
            </View>
        </View>

    </View>
    </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    backgroundColor:"rgb(164,0,0)",
  },
      container:{
        flex: 1,
        justifyContent: 'center'
      },
      albumartContainer:{
        flex: 7,
        justifyContent:'flex-end',
        alignItems:'center',
      },
      sliderContainer:{
        
        // alignItems:'center',
        justifyContent:'center',
      },
      timeContainer:{
        flex: 1,
        justifyContent:'space-between',
        alignItems:'flex-start',
        flexDirection:'row',
        marginTop:"5%",
      },
      subcontrolContainer:{
        flex:1,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexDirection:'row',
        marginTop:20,
      },
      controlContainer:{
        flexDirection: 'row'
      },
      control1:{
        flex:7,
      },
      control2:{
        flex:4,
        justifyContent: 'center',
        alignItems: 'center',
      },
      control3:{
        flex:7,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:10,
      },
      progress: {
        height: 1,width: '100%',marginTop: 5,flexDirection: 'row',
      },
      controlButtonContainer: {
        flex: 1,
      },
      controlButtonText: {
        fontSize: 18,textAlign: 'center',
      },
      slider:{
      backgroundColor:"black",alignItems: 'stretch',justifyContent: 'center',
      },
      button: {
        height: "35%",
        width: "40%",
        backgroundColor: "rgb(164,0,0)",
                           
        justifyContent: "center",
        marginLeft:"7%",
       
        borderRadius:40,
        borderWidth: 1,
      },
      button1: {
        height: "35%",
        width: "40%",
        backgroundColor: "rgb(155,155,155)",
        justifyContent: "center",
       marginRight:"7%",
        borderRadius:40,
        borderWidth: 1,
      },
      buttonText: {
        fontSize: 16,
        alignSelf: "center",
        textAlign: "center",
        color: "white",
        fontWeight: "700",
      },
      track: {
        height: 8,
      },
      thumb: {
        width: 70,
        height: 70,
        backgroundColor: 'white',
        borderColor: "transparent",
        borderWidth: 10,
        borderRadius: 80,
      },
})
