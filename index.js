import { AppRegistry } from "react-native";
import App from "./main/Navigation";
import { name as appName } from "./app.json";  
//import project from './main/DrawerNavigation'
AppRegistry.registerComponent(appName, () => App);