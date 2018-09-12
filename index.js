import { AppRegistry } from 'react-native';
import {name as appName} from './app.json'
import LoginActivity from './main/Navigation'

AppRegistry.registerComponent(appName ,() => LoginActivity);

