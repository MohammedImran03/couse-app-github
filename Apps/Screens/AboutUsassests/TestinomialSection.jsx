import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const TestimonialsSection = () => {
  return (
    <View style={styles.testimonialsContainer}>
      {/* Testimonial 1 */}
      <View style={styles.testimonialItemContainer}>
        <View style={styles.testimonialContentContainer}>
            <View style={styles.quoteimageview}>
          <Image source={require('../../App_assests/quote.png')} style={styles.quoteImage} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.testimonialText}>
              As conscious traveling Paup ers we must always be oncerned
              about our dear Mother Earth. If you think about it, you
              travel across her face and She is the host to your
              journey.
            </Text>
          </View>
          <Text style={styles.testimonialAuthor}>Fanny Spencer</Text>
          <Text style={styles.testimonialRole}>Chief Executive, Amazon</Text>
        </View>
        <Image source={require('../../App_assests/t1.jpg')} style={styles.testimonialImage} />
      </View>

      {/* Testimonial 2 */}
      {/* <View style={styles.testimonialItemContainer}>
        <View style={styles.testimonialContentContainer}>
          <Image source={require('../../App_assests/quote.png')} style={styles.quoteImage} />
          <View style={styles.textContainer}>
            <Text style={styles.testimonialText}>
              As conscious traveling Paup ers we must always be oncerned
              about our dear Mother Earth. If you think about it, you
              travel across her face
              and She is the host to your journey.
            </Text>
          </View>
          <Text style={styles.testimonialAuthor}>Fanny Spencer</Text>
          <Text style={styles.testimonialRole}>Chief Executive, Amazon</Text>
        </View>
        <Image source={require('../../App_assests/t1.jpg')} style={styles.testimonialImage} />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  testimonialsContainer: {
   marginVertical:5,
  },
  testimonialItemContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
  },
  testimonialContentContainer: {
    flex: 1,
  },
  quoteimageview:{
  flex:1,
//   backgroundColor:'green',
  alignItems:'flex-start',
//   width:80,
//   height:100,
// padding:10,
paddingHorizontal:10,
  },
  quoteImage: {
    width: '27%',
    height: 60,
  },
  textContainer: {
    paddingHorizontal:12,
    marginTop: 10,
  },
  testimonialText: {
    textAlign: 'justify',
    color:'gray',
  },
  testimonialAuthor: {
    paddingHorizontal:12,
    // marginTop: 10,
    marginTop: 10,
    fontSize:18,
    fontWeight: 'bold',
  },
  testimonialRole: {
    paddingHorizontal:12,
    // marginTop: 10,
    // marginTop: 10,
    color: 'gray',
  },
  testimonialImage: {
    marginVertical:10,
    paddingHorizontal:12,
    width: 325,
    height: 350,
    // marginLeft: 20,
  },
});

export default TestimonialsSection;
