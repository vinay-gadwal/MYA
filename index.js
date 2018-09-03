import { AppRegistry } from 'react-native';
//import Example from './Sound';
import {name as appName} from './app.json'
import App from './TrackPlayer'
import SeekBar from './SeekBar';

AppRegistry.registerComponent(appName ,() => App);

//TrackPlayer.registerEventHandler(TrackPlayer);
