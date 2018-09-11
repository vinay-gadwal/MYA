import { AppRegistry } from 'react-native';
import {name as appName} from './app.json'
//import App from './main/TrackPlayer'
//import LoginActivity from './main/Navigation'
import Album from './main/Album'
AppRegistry.registerComponent(appName ,() => Album);

