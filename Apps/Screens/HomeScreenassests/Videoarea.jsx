import React, { useState, useRef, useEffect } from 'react';
import { View, Text,  Image, ImageBackground, ScrollView, StyleSheet,TouchableOpacity,Link} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import playbtn from '../../App_assests/play-btn.png';

const VideoSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef(null);
  const handlePress = (url) => {
    Linking.openURL(url);
  };
  const data = [
    { title: 'Learn guitar Course from our Legendary Tutor',
    link:'https://www.youtube.com/watch?v=VufDd-QL1c0',
      image :require('../../App_assests/guitar.jpg'),
      desc:'Designed for beginners and intermediate players alike, our course is led by a seasoned and revered guitar virtuoso who brings decades of experience to the table.'
  },
  { title: 'Learn Keybord Course from our Legendary Tutor',
  link:'https://www.youtube.com/watch?v=VufDd-QL1c0',
      image :require('../../App_assests/K1.jpg'),
      desc:'Unleash your musical potential as you embark on a transformative journey guided by a distinguished keyboard virtuoso, bringing a wealth of experience and artistry to your learning experience'
  },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <View style={styles.imagebox}>
       <Image source={item.image} style={styles.carouselImage} />
       <TouchableOpacity style={styles.playbtn}  onPress={() => handlePress(item.link)}>
       <Image source={require('../../App_assests/play-btn.png')}  />
       </TouchableOpacity>
       </View>
      <Text style={styles.carouselTitle}>{item.title}</Text>
      <Text style={styles.carouselDescription}>{item.desc}</Text>
    </View>
  );
  
  const totalSlides = data.length;

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      let nextSlide;

      if (activeSlide < totalSlides - 1) {
        nextSlide = activeSlide + 1;
      } else {
        nextSlide = 0;
      }
      carouselRef.current.snapToItem(nextSlide);
      setActiveSlide(nextSlide);
    }, 3000);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [activeSlide]);

  return (
    <View style={styles.container1}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          Watch Our Trainers in Live Action.
        </Text>
        <Text style={styles.subtitleText}>
          In the history of modern astronomy, there is probably no one greater leap forward than the
          building and launch of the space telescope known as the Hubble.
        </Text>
      </View>

      <View style={styles.container2}>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={300}
        onSnapToItem={(index) => setActiveSlide(index)}
        autoplay
        autoplayInterval={3000} // Adjust the interval as needed (e.g., every 3 seconds)
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    backgroundColor: 'rgb(130, 139, 178)',
    paddingBottom: 20,
  },
  titleContainer: {
    padding: 20,
  },
  titleText: {
    color: '#fff',
    fontSize: 30,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  subtitleText: {
    color: '#fff',
  },
  container2: {
    // backgroundColor:'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselItem: {
    width:'100%',
    backgroundColor: 'gray',
    borderRadius: 5,
    padding: 10,
    // marginLeft: 25,
    // marginRight: 25,
    alignItems: 'center',
  },
  imagebox:{
position:'relative',
// width:'100%',
// height:'100%'
  },
  playbtn:{
  position:'absolute',
  top:'30%',
  left:'38%',
  animation: 'ping 1s infinite',
  animationDuration: '1s',
  animationTimingFunction: 'ease-out',
  animationIterationCount: 'infinite',
},
'@keyframes ping': {
  '0%': {
    transform: [{ scale: 1 }],
    opacity: 1,
  },
  '50%': {
    transform: [{ scale: 1.2 }],
    opacity: 0.7,
  },
  '100%': {
    transform: [{ scale: 1 }],
    opacity: 1,
  },
},
  carouselImage: {
    marginHorizontal:5,
    width: 300,
    height: 200,
    marginBottom: 10,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  carouselTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'white',
  },
  carouselDescription: {
    fontSize: 14,
    textAlign:'left',
    // flex:1,
    // alignItems:'flex-start',
    // justifyContent:'center',
    color:'white',

  },
  paginationContainer: {
    marginTop: -20,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    // marginHorizontal: 8,
    backgroundColor: 'black',
    // marginLeft:0
  },
});

export default VideoSection;

