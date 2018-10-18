
import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  imgContainer:{
    flex:4,
  },
  textContainer:{
    flex:8,
    flexDirection:'column',
    alignItems:'flex-start',
    paddingLeft:25,
  },
  iconContainer:{
    flex:3,
  },
  textSecond:{
    fontSize:14,
  	color: '#fff',
  },
  ButtonStyle:{
    height:28,
    width:27,
    marginTop:40,
    marginBottom:40,
  },
});

export default styles
