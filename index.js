import { AppRegistry } from 'react-native';
import {name as appName} from './app.json'
import LoginActivity from './main/Navigation'
//import App from './main/App'
AppRegistry.registerComponent(appName ,() => LoginActivity);

