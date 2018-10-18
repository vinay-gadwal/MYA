import React, { Component } from 'react';
import { View,AppRegistry,Button, ScrollView, Image, Text,TouchableOpacity,StyleSheet,StatusBar } from 'react-native';
import StartClass from './Start_Class';
import Slider from 'react-native-slider';
import TrackPlayer, { ProgressComponent } from 'react-native-track-player';
import TrackElement from './../components/trackElement/TrackElement'
import ModalDropdown from 'react-native-modal-dropdown';
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
console.disableYellowBox = true;
const pause = require('./../static/img/icons/greyplay.png');
const play = require('./../static/img/icons/greypause.png');
const greenplay = require('./../static/img/icons/greenplay.png')
class DropdownItem extends Component {

  render() {

    return (

      <Image style={styles.ButtonStyle} source={require('./../static/img/icons/download.png')} />

    );
  }
}

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
    this.state = { middlebutton:false,duration: 1,value:0.2, paused: true,
                    totalLength: 1,
                    currentPosition: 0,
                    selectedTrack: 0,
                    repeatOn: false,
                    shuffleOn: false,status:false,
              };

              TrackPlayer.setupPlayer().then(() => {
                var track = [{
                    id: '1',
                    url: require('./../static/songs/song2.mp3'),
                    // url: 'https://drive.google.com/uc?export=download&id=1VM9_umeyzJn0v1pRzR1BSm9y3IhZ3c0E',
                    title: 'title',
                    artist:'art',
                  },
                  {
                    id: '2',
                    url: require('./../static/songs/song3.mp3'),
                    // url: 'https://archive.org/download/TheChainsmokersDontLetMeDownIlleniumRemix/The%20Chainsmokers%20-%20Dont%20Let%20Me%20Down%20%28Illenium%20Remix%29.mp3',
                    title: 'title',
                    artist:'art',
                  }]
                TrackPlayer.add(track).then(() => {
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
      backgroundColor: "white",
    } ,
     headerRight: (
                <TouchableOpacity onPress={this.FunctionToOpenSixthActivity}
                style={{ height: 30,
                  width: 110,
                  backgroundColor: "white",
                  justifyContent: "center",
                  borderColor:'rgb(164,0,0)',
                  marginLeft:40,marginBottom:5, marginTop:1,marginRight:10,
                  paddingTop:8,
                  paddingBottom:8,
                  borderRadius:40,
                  borderWidth: 1,}}
              >
              <Text style={{fontSize: 12,
                  alignSelf: "center",
                  textAlign: "center",
                  color: "rgb(164,0,0)",
                  fontWeight: "700",}}>15 Min</Text>
              </TouchableOpacity>
                                    ),
              headerBackImage:  <Image style={{    height:30,
                width:30,
                marginTop:40,
                marginBottom:40,
                marginLeft:15,
                marginRight:10}} source={require('./../static/img/icons/back.png')}
          />,

  }

  renderImage(){
            var imgSource = this.state.middlebutton? play : pause;
            return (
              <View>
              <Image style={{height:30,marginTop:"1%",
                            width:30,
                            marginBottom:"25%"}}
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
  renderPlayIcon(){
    var imgSource = this.state.status? greenplay : null;
    return (
      <View>
      <Image 
                 style={{height:"30%",
                                width:"80%",
                                marginTop:40,
                                marginBottom:40,
                                marginLeft:"10%"}}
                    source={ imgSource }
                  />
      </View>
    );
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

  FunctionToOpenSeventhActivity = () =>
    {
       this.props.navigation.navigate('StartClass');
    }
  _dropdown_show() {
     this._dropdown && this._dropdown.show();
    }

  render() {
      TrackPlayer.getDuration().then((dur)=>{this.setState({duration: dur})});
      return (
          <View style={styles.container}>
            <StatusBar hidden={false} />
            <View style={styles.titleContainer}>
              <Image style={styles.ContailerAlbum} source={require('./../static/img/albumart/running.jpeg')}/>
              <Text style={{marginTop:80,marginBottom:20,marginLeft:20,marginRight:20}}>BODY WARMUP</Text>
            </View>

          <View style={styles.scrollContainer}>
            <ScrollView>
            <TouchableOpacity  onPress={ () => {
                                       this.setState({ status: !this.state.status });
                                                }}>
            <View style={{flexDirection:'row',backgroundColor:'white',marginBottom:1,marginTop:1}}>
                <Image style={{height:80,width:80,marginTop:10,marginBottom:5,marginLeft:10,marginRight:10}} source={require('./../static/img/albumart/running.jpeg')} />
                <View style={{flexDirection:'column',marginTop:"10%",marginRight:"5%",marginLeft:"5%"}}>
                  <Text>Still The One </Text>
                  <Text style={{fontSize:10,marginTop:5}}>Track type-WARMUP</Text>
                </View>
                <View>
                {this.renderPlayIcon()}
                </View>
                <TouchableOpacity>
                  <Image style={{height:"30%",
                                width:"80%",
                                marginTop:40,
                                marginBottom:40,
                                marginLeft:"10%"}} source={require('./../static/img/icons/download.png')} />
                </TouchableOpacity>

                <ModalDropdown
                  ref={el => this._dropdown = el}
                  style={styles.dropdown}
                  dropdownStyle={{height:150}}
                  dropdownTextStyle={{width:200,height:50,padding:5}}
                  options={[<DropdownItem/>, 'option 2']}>
                  <TouchableOpacity onPress={this._dropdown_show.bind(this)}>
                    <Image style={{height:"30%",
                                width:"80%",
                                marginTop:40,
                                marginBottom:40,
                                marginLeft:"10%"}} source={require('./../static/img/icons/more.png')}/>
                  </TouchableOpacity>
                </ModalDropdown>

              </View>
              </TouchableOpacity>

                {/* <TrackElement track={{trackname:"My Track 2"}}/>
                <TrackElement track={{trackname:"My Track 3"}}/>
                <TrackElement track={{trackname:"My Track 4"}}/>
                <TrackElement track={{trackname:"My Track 5"}}/> */}
            </ScrollView>
          </View>

          <View style={styles.sliderContainer}>
              <Slider
                style={{ flexDirection: 'column',backgroundColor: 'white',height:15,marginBottom:5,marginTop:5}}
                thumbStyle={styles.thumb}
                trackStyle={styles.track}
                minimumValue          = {0}
                maximumValue          = {Math.floor(parseInt(this.state.duration?this.state.duration:1))}
                thumbTintColor        = "rgb(164,0,0)"
                minimumTrackTintColor = "rgb(164,0,0)"
                maximumTrackTintColor = '#DEDBDB'
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
            <TouchableOpacity onPress={this.FunctionToOpenSeventhActivity}>
                <Image
                //style={styles.ButtonStyle1}
                style={{height:28,marginTop:"2%",marginBottom:"5%",
                  width:27,
               
                }}
                    source={require('./../static/img/icons/uparrow.png')}
                />
            </TouchableOpacity>
              <Text style={{marginTop:5,fontSize:16,fontWeight:'bold'}}>Still The One</Text>
            <TouchableOpacity onPress={() => {this.togglePlayback();this.setState({ middlebutton: !this.state.middlebutton });}}>
              {this.renderImage()}
            </TouchableOpacity>
          </View>
        </View>

          <View style={styles.footerContainer}>
            <TouchableOpacity onPress={this.FunctionToOpenSixthActivity} style={styles.button1}>
              <Text style={styles.buttonText}>Start Class</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.FunctionToOpenSixthActivity} style={styles.button2}>
              <Text style={styles.buttonText}>Start Workout</Text>
            </TouchableOpacity>
          </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
  },
  ContailerAlbum:{
    marginRight:10,
    marginLeft:10,
    width:'50%',
    height:'80%',
    marginTop:10
  },
  titleContainer:{
    flex:7,
    flexDirection:'row',
    backgroundColor:"rgb(246,246,248)",
  },
  scrollContainer:{
    flex:14,
    flexDirection:'row',
    height:280,
    paddingTop:1,
    paddingBottom:1
  },
  sliderContainer:{
    flex:4,
    zIndex:0,
  },
  footerContainer:{
    flex:3,
    flexDirection:'row',
    justifyContent:'center',
  },
  dropdown: {
    marginBottom: 4,
  },
  ButtonStyle:{
    height:"20%",
    width:"100%",
    marginTop:40,
    marginBottom:40,
    marginRight:20
  },
  controls: {
    flexDirection: 'row',
    backgroundColor:"white",
    marginTop:14,
    padding:0,
    marginBottom:"20%",
marginLeft:"15%",
justifyContent:"space-between",
marginRight:"10%"
  },
  button1: {
    flex:2,
    height: 80,
    backgroundColor: "rgb(164,0,0)",
    justifyContent: "center",

  },
  button2: {
    flex:2,
    height: 80,
    backgroundColor: "#000",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    alignSelf: "center",
    textAlign: "center",
    color: "white",
    fontWeight: "700",
    marginBottom:10
  },
  ButtonStyle1:{
    height:28,
    width:27,
    marginTop:20,
    marginBottom:0,
  },
  ButtonStyle2:{
    height:28,
    width:27,
    marginTop:30,
    marginLeft:20,
  },
  track: {
    height: 8,
  },
  thumb: {
    width: 70,
    height: 70,
    backgroundColor: 'rgb(164,0,0)',
    borderColor: '#ffffff',
    borderWidth: 8,
    borderRadius: 30,
    zIndex: 1,
  }
});
