import React, { Component } from 'react';
import { View,AppRegistry,Button, ScrollView, Image, Text,TouchableOpacity,StyleSheet } from 'react-native';
import StartClass from './Start_Class'
import { createBottomTabNavigator } from 'react-navigation';
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

 class Scroll extends TrackPlayer.ProgressComponent {
  constructor(props){
    super(props);
    this.state = { middlebutton:true,duration: 0,value:0.2, paused: true,
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
                              url: require('./SampleAudio_0.4mb.mp3'),
                              // url: 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3',
                              title: 'title',
                              artist:'art',
                                      }
                          ]
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
  static navigationOptions = {
              headerStyle: {
                backgroundColor: "white",
              } ,
              headerBackTitle:'Still The One',
              headerRight: (
                                    <Image style={{    height:15,
                                      width:25,
                                      marginTop:40,
                                      marginBottom:40,
                                      marginLeft:30,
                                      marginRight:10
                                    }} source={require('./icon/cross.png')}
                                />
                                    ),
              headerBackImage: <Image style={{    height:20,
                                        width:30,
                                        marginTop:40,
                                        marginBottom:40,
                                        marginLeft:30,
                                        marginRight:10
                                      }} source={require('./icon/BackWhite.png')}
                                />,
            headerBackTitle: 'Still The One',
            headerBackTitleStyle:{
                        color:'white',
                        fontWeight: 'bold'
            },
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              marginBottom:0,
              padding:0,
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
       this.props.navigation.navigate('Seventh');
       
    }
  
  render() {
      return (
          <View style={{backgroundColor:"white"}}>
            <View style={{flexDirection:'row',backgroundColor:"rgb(246,246,248)"}}>
              <Image style={{height:140,width:180,marginTop:20,marginBottom:10,marginLeft:20,marginRight:20}} source={require('./image/running.jpeg')}/>
              <Text style={{marginTop:80,marginBottom:20,marginLeft:20,marginRight:20}}>BODY WARMUP</Text>
            </View>
           
              
            <View style={{flexDirection:'row',backgroundColor:'white',height:300}}>
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
                      {/* <TouchableOpacity >
                      <Image style={styles.ButtonStyle} source={require('./icon/greenplay.png')} />              
                      </TouchableOpacity>
                      <TouchableOpacity>
                      <Image style={styles.ButtonStyle} source={require('./icon/download.png')} />              
                      </TouchableOpacity> */}
                      <TouchableOpacity>
                      <Image style={{ height:28,width:27,marginTop:30,marginLeft:0,marginRight:400}} source={require('./icon/more.png')}/>              
                      </TouchableOpacity>
              </View>
              <View style={{flexDirection:'row',backgroundColor:'white',marginBottom:1}}>
                      <Image style={{height:80,width:80,marginTop:10,marginBottom:5,marginLeft:10,marginRight:10}} source={require('./image/running.jpeg')} />
                    <View style={{flexDirection:'column',marginTop:40,marginRight:40,marginLeft:10}}>
                      <Text>Still The One</Text>
                      <Text style={{fontSize:10,marginTop:5}}>Track type-WARMUP</Text>
                    </View>
                      {/* <TouchableOpacity >
                      <Image style={styles.ButtonStyle} source={require('./icon/greenplay.png')} />              
                      </TouchableOpacity>
                      <TouchableOpacity>
                      <Image style={styles.ButtonStyle} source={require('./icon/download.png')} />              
                      </TouchableOpacity> */}
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
                      {/* <TouchableOpacity >
                      <Image style={styles.ButtonStyle} source={require('./icon/greenplay.png')} />              
                      </TouchableOpacity>
                      <TouchableOpacity>
                      <Image style={styles.ButtonStyle} source={require('./icon/download.png')} />              
                      </TouchableOpacity> */}
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
                      {/* <TouchableOpacity >
                      <Image style={styles.ButtonStyle} source={require('./icon/greenplay.png')} />              
                      </TouchableOpacity>
                      <TouchableOpacity>
                      <Image style={styles.ButtonStyle} source={require('./icon/download.png')} />              
                      </TouchableOpacity> */}
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
                  marginBottom:2,marginLeft:30}}
                    source={require('./icon/dropdown.png')}
                />
            </TouchableOpacity>
              <Text style={{marginBotto:5,marginTop:5,marginLeft:35,fontSize:16,fontFamily:'Cochin',fontWeight:'bold'}}>Still The One</Text>
            <TouchableOpacity onPress={ () => {
                                              this.togglePlayback();this.setState({ middlebutton: !this.state.middlebutton });
                                               }}>
            {this.renderImage()}
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
            }, controls: {
              flexDirection: 'row',backgroundColor:"white",marginTop:12,padding:0,marginBottom:40
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

export default createBottomTabNavigator(
  {
    StartClass:{
        screen:StartClass,
    },
    StartWorkout:{
        screen:Scroll,
    },
},
{
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor :'white',
        activeBackgroundColor: "rgb(164,0,0)",
        labelStyle: {
          fontSize: 18,
         // marginTop:10,
          padding: 10,
        },
        style: {
          // borderTopWidth: 0,
          backgroundColor: "black",
          tabBarButtonColor: "#000",
          navBarTextFontSize: 34,
          forceTitlesDisplay: true,
          tabFontFamily: "Avenir-Medium"
        },
      }
},

);
