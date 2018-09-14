import React, { Component } from 'react';
import { View,AppRegistry,Button, ScrollView, Image, Text,TouchableOpacity,StyleSheet } from 'react-native';
import StartClass from './Start_Class'
import Slider from 'react-native-slider'
import TrackPlayer, { ProgressComponent } from 'react-native-track-player';
console.disableYellowBox = true;
const pause = require('./icon/greyplay.png');
const play = require('./icon/greypause.png');

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
    this.state = { middlebutton:false,duration: 0,value:0.2, paused: true,
                    totalLength: 1,
                    currentPosition: 0,
                    selectedTrack: 0,
                    repeatOn: false,
                    shuffleOn: false,
              };
    
              TrackPlayer.setupPlayer().then(() => {
                var track = [{
                    id: 'unique track id',
                    url: require('./SampleAudio_0.4mb.mp3'),
                    // url: 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3',
                    title: 'title',
                    artist:'art',
                            },
                            {
                              id: 'unique track id',
                              url: require('./cheapThrill.mp3'),
                              // url: 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3',
                              title: 'title',
                              artist:'art',
                                      }
                          ]
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
                marginRight:10}} source={require('./icon/back.png')}
          />,
          
  }
  
  renderImage(){
            var imgSource = this.state.middlebutton? play : pause;
            return (
              <View>
              <Image 
                          style={{height:30,marginTop:15,
                            width:30,
                            marginTop:5,
                            marginBottom:2,marginLeft:130,marginRight:20}}
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
       this.props.navigation.navigate('Music');
       
    }
  
  render() {
      return (
          <View style={{backgroundColor:"white"}}>
            <View style={{flexDirection:'row',backgroundColor:"rgb(246,246,248)"}}>
              <Image style={{height:140,width:180,marginTop:20,marginBottom:10,marginLeft:20,marginRight:20}} source={require('./image/running.jpeg')}/>
              <Text style={{marginTop:80,marginBottom:20,marginLeft:20,marginRight:20}}>BODY WARMUP</Text>
            </View>
           
              
            <View style={{flexDirection:'row',backgroundColor:'white',height:280}}>
            <ScrollView>
            <View style={{flexDirection:'row',backgroundColor:'white',marginBottom:1,marginTop:1}}>
                      <Image style={{height:80,width:80,marginTop:10,marginBottom:5,marginLeft:10,marginRight:10}} source={require('./image/running.jpeg')} />
                    <View style={{flexDirection:'column',marginTop:40,marginRight:40,marginLeft:10}}>
                      <Text>Still The One</Text>
                      <Text style={{fontSize:10,marginTop:5}}>Track type-WARMUP</Text>
                    </View>
                      <TouchableOpacity >
                      <Image style={styles.ButtonStyle} source={require('./icon/greenplay.png')} />              
                      </TouchableOpacity>
                      <TouchableOpacity>
                      <Image style={styles.ButtonStyle} source={require('./icon/download.png')} />              
                      </TouchableOpacity>
                      <TouchableOpacity>
                      <Image style={styles.ButtonStyle} source={require('./icon/more.png')}/>              
                      </TouchableOpacity>
              </View>
             <View style={{flexDirection:'row',backgroundColor:'white',marginBottom:1,marginTop:1}}>
                      <Image style={{height:80,width:80,marginTop:10,marginBottom:5,marginLeft:10,marginRight:10}} source={require('./image/running.jpeg')} />
                    <View style={{flexDirection:'column',marginTop:40,marginRight:40,marginLeft:10}}>
                      <Text>Still The One</Text>
                      <Text style={{fontSize:10,marginTop:5}}>Track type-WARMUP</Text>
                    </View>
                      <TouchableOpacity >
                      <Image style={styles.ButtonStyle} source={require('./icon/cross.png')} />              
                      </TouchableOpacity>
                      <TouchableOpacity>
                      <Image style={styles.ButtonStyle} source={require('./icon/cross.png')} />              
                      </TouchableOpacity>
                      <TouchableOpacity>
                      <Image style={styles.ButtonStyle} source={require('./icon/more.png')}/>              
                      </TouchableOpacity>
              </View>
              <View style={{flexDirection:'row',backgroundColor:'white',marginBottom:1}}>
                      <Image style={{height:80,width:80,marginTop:10,marginBottom:5,marginLeft:10,marginRight:10}} source={require('./image/running.jpeg')} />
                    <View style={{flexDirection:'column',marginTop:40,marginRight:40,marginLeft:10}}>
                      <Text>Still The One</Text>
                      <Text style={{fontSize:10,marginTop:5}}>Track type-WARMUP</Text>
                    </View>
                      <TouchableOpacity >
                      <Image style={styles.ButtonStyle} source={require('./icon/cross.png')} />              
                      </TouchableOpacity>
                      <TouchableOpacity>
                      <Image style={styles.ButtonStyle} source={require('./icon/cross.png')} />              
                      </TouchableOpacity>
                      <TouchableOpacity>
                      <Image style={styles.ButtonStyle} source={require('./icon/more.png')}/>              
                      </TouchableOpacity>
              </View>
              <View style={{flexDirection:'row',backgroundColor:'white',marginBottom:1}}>
                      <Image style={{height:80,width:80,marginTop:10,marginBottom:5,marginLeft:10,marginRight:10}} source={require('./image/running.jpeg')} />
                    <View style={{flexDirection:'column',marginTop:40,marginRight:40,marginLeft:10}}>
                      <Text>Still The One</Text>
                      <Text style={{fontSize:10,marginTop:5}}>Track type-WARMUP</Text>
                    </View>
                      <TouchableOpacity >
                      <Image style={styles.ButtonStyle} source={require('./icon/cross.png')} />              
                      </TouchableOpacity>
                      <TouchableOpacity>
                      <Image style={styles.ButtonStyle} source={require('./icon/cross.png')} />              
                      </TouchableOpacity>
                      <TouchableOpacity>
                      <Image style={{ height:28,
                              width:27,
                              marginTop:40,
                              marginBottom:40,
                                marginRight:200,marginLeft:2}} source={require('./icon/more.png')}/>              
                      </TouchableOpacity>
              </View>
              <View style={{flexDirection:'row',backgroundColor:'white',marginBottom:2}}>
                      <Image style={{height:80,width:80,marginTop:10,marginBottom:5,marginLeft:10,marginRight:10}} source={require('./image/running.jpeg')} />
                    <View style={{flexDirection:'column',marginTop:40,marginRight:40,marginLeft:10}}>
                      <Text>Still The One</Text>
                      <Text style={{fontSize:10,marginTop:5}}>Track type-WARMUP</Text>
                    </View>
                      <TouchableOpacity >
                      <Image style={styles.ButtonStyle} source={require('./icon/cross.png')} />              
                      </TouchableOpacity>
                      <TouchableOpacity>
                      <Image style={styles.ButtonStyle} source={require('./icon/cross.png')} />              
                      </TouchableOpacity>
                      <TouchableOpacity>
                      <Image style={styles.ButtonStyle} source={require('./icon/more.png')}/>              
                      </TouchableOpacity>
              </View>
              </ScrollView>
            </View>
           

              <Slider 
                style={{ flexDirection: 'column',backgroundColor: 'white',height:15,marginBottom:5,marginTop:5}}
                thumbStyle={customStyles7.thumb}
                trackStyle={customStyles7.track}
                minimumValue          = {0}
                maximumValue          = {this.state.duration}
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
                style={{height:28,marginTop:15,
                  width:27,
                  marginTop:5,
                  marginLeft:30}}
                    source={require('./icon/dropdown.png')}
                />
            </TouchableOpacity>
              <Text style={{marginTop:5,marginLeft:35,fontSize:16,fontWeight:'bold'}}>Still The One</Text>
            <TouchableOpacity onPress={ () => {
                                              this.togglePlayback();this.setState({ middlebutton: !this.state.middlebutton });
                                               }}>
            {this.renderImage()}
            </TouchableOpacity>               
            </View>
            <View style={{flexDirection:'row',marginBottom:30,justifyContent:'space-between'}}>
            <TouchableOpacity onPress={this.FunctionToOpenSixthActivity}
              style={styles.button}
              //onPress={this.onLoginPress.bind(this)}
            >
            <Text style={styles.buttonText}>Start Class</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.FunctionToOpenSixthActivity}
              style={styles.button1}
              //onPress={this.onLoginPress.bind(this)}
            >
            <Text style={styles.buttonText}>Start Workout</Text>
            </TouchableOpacity>
              </View>
            <View>
            </View>
        </View>
    );
  }
}
const customStyles7 = StyleSheet.create({
  track: {
    height: 8,
    
  },
  
  thumb: {
    width: 65,
    height: 65,
    backgroundColor: 'rgb(164,0,0)',
    borderColor: '#ffffff',
    borderWidth: 8,
    borderRadius: 30,
  }
});
const styles = StyleSheet.create({
            ButtonStyle:{
              height:28,
              width:27,
              marginTop:40,
              marginBottom:40,
                marginRight:20
            }, 
            controls: {
              flexDirection: 'row',backgroundColor:"white",marginTop:14,padding:0,marginBottom:10
            },
            button: {
              height: 80,
              width: 190,
              backgroundColor: "rgb(164,0,0)",
              //alignSelf: "stretch",
              marginTop: 5,
              justifyContent: "center",
              paddingVertical: 10,
              marginBottom: 10
            },
            button1: {
              height: 80,
              width: 190,
              backgroundColor: "black",
              //alignSelf: "stretch",
              marginTop: 5,
              justifyContent: "center",
              paddingVertical: 15,
              marginBottom: 10
            },
            buttonText: {
              fontSize: 18,
              alignSelf: "center",
              textAlign: "center",
              color: "white",
              fontWeight: "700",
              marginBottom:20
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
            }
});

