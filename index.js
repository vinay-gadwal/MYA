import { AppRegistry } from 'react-native';
//import Example from './Sound';
import {name as appName} from './app.json'
import Track from './TrackPlayer'
//import TrackPlayer from 'react-native-track-player';

AppRegistry.registerComponent(appName ,() => Track);

//TrackPlayer.registerEventHandler(TrackPlayer);
