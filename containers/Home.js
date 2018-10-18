import React, { Component } from 'react';
import {
  Platform,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Alert,Image,
  Navigator,TouchableOpacity
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { createStackNavigator } from 'react-navigation';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { ENTRIES1 } from './../static/js/entries';
import { ENTRIES2 } from './../static/js/grid';
import SliderEntry from './../components/sliderEntry/SliderEntry';
import MyFlatList from './../components/flatList/FlatList';


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const IS_ANDROID = Platform.OS === 'android';
const slideWidth = Math.round(0.75*viewportWidth);
const itemHorizontalMargin = Math.round(0.02*viewportWidth);

const SLIDER_1_FIRST_ITEM = 1;
const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;

export default class HomeScreen extends Component {

  constructor (props) {
        super(props);
        myFunc=this.myFunc.bind(this);
        toggleDraw=this.toggleDraw.bind(this);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        };
    }
  componentDidMount() {
    SplashScreen.hide();
  }
  toggleDraw(){
    this.props.navigation.toggleDrawer();
    Alert.alert(GLOBAL.user_name)
  }
    static navigationOptions = {
      title:"Home",
      headerBackTitle:'Bodypump 101',
      tintColor: '#0087B7',
      headerLeft: (
        <TouchableOpacity onPress={()=>{this.toggleDraw()}}>
        <Image style={{
          height:25,
          width:25,
          marginTop:40,
          marginBottom:40,
          marginLeft:20,
          marginRight:10
        }} source={require('./../static/img/icons/ham_icon.png')}/>
        </TouchableOpacity>
        ),
      headerStyle: {
        backgroundColor: "white",
        height:60,
      } ,
    }
  myFunc() {
      this.props.navigation.navigate('Scroll');
    }
  _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <SliderEntry
              data={item}
              even={true}
              parallax={true}
              parallaxProps={parallaxProps}
              mainFunc={this.myFunc}
            />
        );
  }
 
 
  AlbumApi(){
   
    fetch(api.base_url + "/alfresco/s/api/dtree/getCRUDedObjects?timestamp=1537447935000", {
 method: 'GET',
 headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
  // body : 
  body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
       })
  })
  .then((response) => response.json())
  .then((response) => {
           this.setState({
                loading: false
            }, ()=>{
              if (response && response.data && response.data.ticket) {
                console.log(response);
                 AsyncStorage.setItem('user_ticket', response.data.ticket);
                  this.props.navigation.navigate('Home');
                  
              }else{
                this.setState({ spinner: false });
                setTimeout(() => {
                  Alert.alert("Please Enter Valid username And Password");
                }, 100);       
              
                      }
            }
          );                         
  })
  .catch((error) => {
    alert('There was an error OR Check Your Internet Connection');
  }).done();

}
  
  mainCarousel () {
        const { slider1ActiveSlide } = this.state;

        return (
            <View style={styles.exampleContainer}>
                {/* <Text style={styles.title}>{`Featured Albums`}</Text>
                <Text style={styles.subtitle}>Browse our selected albums</Text> */}
                <Carousel
                  ref={c => this._slider1Ref = c}
                  data={ENTRIES1}
                  renderItem={this._renderItemWithParallax}
                  windowSize={1}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  hasParallaxImages={true}
                  firstItem={SLIDER_1_FIRST_ITEM}
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.7}
                  // inactiveSlideShift={20}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  loop={true}
                  loopClonesPerSide={2}
                  autoplay={true}
                  autoplayDelay={500}
                  autoplayInterval={3000}
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />
                <Pagination
                  dotsLength={ENTRIES1.length}
                  activeDotIndex={slider1ActiveSlide}
                  containerStyle={styles.paginationContainer}
                  dotColor={'rgba(200, 0, 0, 0.92)'}
                  dotStyle={styles.paginationDot}
                  inactiveDotColor={colors.black}
                  inactiveDotOpacity={0.4}
                  inactiveDotScale={0.6}
                  carouselRef={this._slider1Ref}
                  tappableDots={!!this._slider1Ref}
                />
            </View>
        );
    }
    myfunc(){
      this.props.navigation.navigate('Scroll');
    }

  render() {
    const carouselMain = this.mainCarousel();

    return (
      <View style={styles.container}>
        <View style={styles.container1}>
          { carouselMain }
        </View>
        {/* <View style={styles.container3}>
          <Text style={styles.textFilter}>FILTER</Text>
        </View> */}
        <View style={styles.container2}>
          <MyFlatList fl={ENTRIES2} mainFunc={this.myfunc.bind(this)}/>

        </View>
      </View>
    );
  }
}



const colors = {
    black: '#1a1917',
    gray: '#888888',
    background1: '#B721FF',
    background2: '#21D4FD'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container1: {
    flex: 6,
  },
  container2: {
    flex:7,
    paddingTop:40,
  },
  container3: {
    flex: 2,
    paddingTop:20,
  },
  textFilter: {
    fontSize: 12,
    margin: 10,
  },
  exampleContainer: {
        paddingVertical: 0
  },
  title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
  },
  subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center'
  },
  slider: {
        marginTop: 15,
        overflow: 'visible' // for custom animations
  },
  sliderContentContainer: {
        paddingVertical: 10 // for custom animation
  },
  paginationContainer: {
        paddingVertical: 8
  },
  paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
  }
});
