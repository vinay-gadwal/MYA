
import { Platform, AppRegistry} from 'react-native';
//import App from './realm';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';
import App from './containers/Navigation';

AppRegistry.registerComponent(Platform.OS === 'ios' ? appName :"MyIApp", () => App);
TrackPlayer.registerEventHandler(require('./player-handler.js'));
