import React, { Component } from 'react';
import { View,AppRegistry, ScrollView, Image, Text,TouchableOpacity,StyleSheet } from 'react-native';
import SignIn from './Login'
import { createBottomTabNavigator } from 'react-navigation';
import Slider from 'react-native-slider'
import TrackPlayer, { ProgressComponent } from 'react-native-track-player';
console.disableYellowBox = true;
const pause = require('./icon/checkmark.png');
const play = require('./icon/greyplay.png');
import Music from './musicPlay'
class ProgressBar extends ProgressComponent {
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

 class Scroll extends Component {
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
        var track = {
            id: 'unique track id',
            url: 'https://archive.org/download/TheChainsmokersDontLetMeDownIlleniumRemix/The%20Chainsmokers%20-%20Dont%20Let%20Me%20Down%20%28Illenium%20Remix%29.mp3',
            title: 'title',
            artist:'art'
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
  renderImage(){
    var imgSource = this.state.middlebutton? play : pause;
    return (
      <View>
      <Image  style={{marginBottom:10,marginTop:25,height:28,
                width:27,
                marginTop:20,
                marginBottom:0,marginRight:20,marginLeft:160}}
                  //style={{width: 50, height: 50,marginLeft:50,marginRight:50}}
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
    // moreOption(){
    //   return (
    //     <View style={{ flex: 1 }}>
    //       <OptionsButton
    //         items={[
    //           { title: 'Title 1', id: 0, onPress: () => null },
    //           { title: 'Title 2', id: 1, onPress: () => null },
    //           { title: 'Title 3', id: 2, onPress: () => null },
    //           { title: 'Title 4', id: 3, onPress: () => null },
    //           { title: 'Title 5', id: 4, onPress: () => null },
    //           { title: 'Title 6', id: '5', onPress: () => null }
    //         ]}
    //         title="Menu"
    //         openTitle="Close"
    //         onPress={(i, z) => console.log(i, z)}
    //         optionsStyle={{ borderRadius: 8 }}
    //         buttonTextStyle={{ color: 'white' }}
    //         containerStyle={{ bottom: 15 }}
    //       />
    //     </View>
    //   )
    // }
    FunctionToOpenSecondActivity = () =>
    {
       this.props.navigation.navigate('Third');
       
    }
  render() {
      return (
          <View>
            <View style={{flexDirection:'row',backgroundColor:"rgb(246,246,248)"}}>
              <Image style={{height:140,width:180,marginTop:20,marginBottom:10,marginLeft:20,marginRight:20}} source={require('./image/running.jpeg')}/>
              <Text style={{marginTop:80,marginBottom:20,marginLeft:20,marginRight:20}}>BODY WARMUP</Text>
            </View>
           
              
            <View style={{flexDirection:'row',backgroundColor:'white',marginBottom:1,height:300}}>
            <ScrollView>
            <View style={{flexDirection:'row',backgroundColor:'white',marginBottom:1}}>
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
                      <Image style={styles.ButtonStyle} source={require('./icon/more.png')}/>              
                      </TouchableOpacity>
              </View>
              </ScrollView>
            </View>
           
            
            <View style={{flexDirection:'row',backgroundColor:'white',marginBottom:0}}>
               <Slider 
                     style={{thumbTintSize :40}}
                    minimumValue          = {0}
                    maximumValue          = {this.state.duration}
                    thumbTintColor        = "rgb(164,0,0)" 
                    minimumTrackTintColor = "black"
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
            <View style={styles.controls}> 
              
            <TouchableOpacity onPress={this.FunctionToOpenSecondActivity}>        
                <Image 
                //style={styles.ButtonStyle1}
                style={{marginBottom:10,marginTop:25,height:28,
                  width:27,
                  marginTop:20,
                  marginBottom:0,marginLeft:20}}
                    source={require('./icon/dropdown.png')}
                />
            </TouchableOpacity>
              <Text style={{marginBottom:10,marginTop:25,marginLeft:30}}>Still The One</Text>
            <TouchableOpacity onPress={ () => {
                                              this.togglePlayback();this.setState({ middlebutton: !this.state.middlebutton });
                                               }}>
            {this.renderImage()}
            </TouchableOpacity>               
            </View>
            </View>
            <View>
            </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  ButtonStyle:{
    height:28,
    width:27,
    marginTop:40,
    marginBottom:40,
    //marginLeft:20,
    marginRight:20
  }, controls: {
    marginVertical: 20,flexDirection: 'row',
  },
  ButtonStyle1:{
    height:28,
    width:27,
    marginTop:20,
    marginBottom:0,
    //marginLeft:30,
   // marginRight:20
  },
  ButtonStyle2:{
    height:28,
    width:27,
    marginTop:30,
   // marginBottom:0,
    marginLeft:20,
    //marginRight:600
  }
});

export default createBottomTabNavigator(
  {
    StartClass:{
        screen:SignIn,
        // navigationOptions: {
        //     tabBarIcon:()=>  
        //     <Icon
        //     name='home'
        //     type='font-awesome'
        //     color='#5bc0de'/>
        // },
    },
    StartWorkout:{
        screen:Scroll,
        // navigationOptions: {
        //     tabBarIcon:()=>   <Icon
        //     name='qrcode'
        //     type='font-awesome'
        //     color='#5bc0de'/>
        // },
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
}



);
