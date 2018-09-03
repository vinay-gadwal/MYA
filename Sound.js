import React,{Component} from 'react' 
import {
    StyleSheet,
    View,Button,Alert
} from 'react-native'
var Sound = require('react-native-sound');
export default class Example extends Component{
    constructor(){
        super();
        
    }
    render() {
        // Import the react-native-sound module
// Load the sound file 'whoosh.mp3' from the app bundle
// See notes below about preloading sounds within initialization code below.
var whoosh = new Sound(require('./SampleAudio_0.4mb.mp3'), (error) => {
    if (error) {
        console.log('failed to load the sound', error);
    } else {
      whoosh.play(); // have to put the call to play() in the onload callback
      whoosh.setCurrentTime(15.5);
    }
});
// Play the sound with an onEnd callback
whoosh.play((success) => {
  if (success) {
    console.log('successfully finished playing');
  } else {
    console.log('playback failed due to audio decoding errors');
  }
});

// Reduce the volume by half
whoosh.setVolume(0.5);

// Position the sound to the full right in a stereo field
whoosh.setPan(1);

// Loop indefinitely until stop() is called
whoosh.setNumberOfLoops(-1);

// Get properties of the player instance
console.log('volume: ' + whoosh.getVolume());
console.log('pan: ' + whoosh.getPan());
console.log('loops: ' + whoosh.getNumberOfLoops());

// Enable playback in silence mode (iOS only)
// Sound.enableInSilenceMode(true);

// Seek to a specific point in seconds
whoosh.setCurrentTime(2.5);

// Get the current playback point in seconds
whoosh.getCurrentTime((seconds) => console.log('at ' + seconds));

// Pause the sound
whoosh.pause();

// Stop the sound and rewind to the beginning
whoosh.stop();

// Release the audio player resource
whoosh.release();
        return (
            <View style={styles.container}>
                <Button onPress={this.play} title="play">
                    
                </Button>
            </View>
        );
    }


}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'transparent',
    }
});