import React,{Component} from 'react' 
import {
    StyleSheet,
    View,Button,Alert
} from 'react-native'


import Audio from '@remobile/react-native-audio'
export default class Example extends Component{
    constructor(){
        super();
        this.state={
            url:"https://drive.google.com/uc?export=download&id=1VM9_umeyzJn0v1pRzR1BSm9y3IhZ3c0E"
        }
    }
    play() {
        if (this.player) {
            this.player.stop();
            this.player.release();
            this.player = null;
        } else {
            this.player = new Audio("https://drive.google.com/uc?export=download&id=1VM9_umeyzJn0v1pRzR1BSm9y3IhZ3c0E", (error) => {
                if (!error) {
                    this.player.play(()=>{
                        this.player.release();
                        this.player = null;
                    });
                } else{
                    Alert.alert("error");
                }
            });
        }
    }
    render() {
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