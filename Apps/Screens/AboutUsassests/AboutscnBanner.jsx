import { View, Text, ImageBackground, StyleSheet,} from 'react-native';
import React from 'react'
import image from '../../App_assests/home-banner-bg.png';

export default function Banner({text}) {
  return (
    <ImageBackground
      source={image} // Replace 'your_image_url_here' with the actual image URL or require path
      style={styles.homeBannerArea}
    >
      <View style={styles.overlay}>
        <Text style={styles.bannerText}>
          {text}
        </Text>
      </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
    homeBannerArea: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom:30
    },
    overlay: { 
      paddingBottom: 80,
      width: '100%', 
      alignItems: 'center',
      // height:'100%',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bannerText: {
      marginTop:30,
      marginBottom:20,
      color: 'white',
      fontSize: 20,
      marginHorizontal:4,
      fontWeight: 'bold',
      // textAlign: 'center',
    
    },
});