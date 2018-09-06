import { AppRegistry } from 'react-native';
import {name as appName} from './app.json'
//import App from './App'
//import LoginActivity from './main/Navigation'
import Album from './main/Album'
AppRegistry.registerComponent(appName ,() => Album);

