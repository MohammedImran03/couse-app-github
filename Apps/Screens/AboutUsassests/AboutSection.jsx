import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AboutSection = () => {
  return (
    <View style={styles.aboutContainer}>
      <View style={styles.aboutLeft}>
        <Image source={require('../../App_assests/about-img.png')} style={styles.aboutImage} />
      </View>
      <View style={styles.aboutRight}>
        <Text style={styles.aboutTitle}>
          Over all 2500 Courses from 20 Platforms.
        </Text>
        <View>
          <Text style={styles.aboutText}>
            There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope.
            It’s exciting to think about setting up your own viewing station. In the life of any aspiring astronomer
            that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing
            station.
          </Text>
          <Text style={styles.aboutText}>
            It’s exciting to think about setting up your own viewing station. In the life of any aspiring astronomer
            that it is time to buy that first telescope exciting is time to buy that first.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 25,
  },
  aboutLeft: {
    // paddingHorizontal:5,
    // backgroundColor: 'gray',
    width: '100%',
    height: 380,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden', 
  },
  aboutImage: {
    width: '100%',
    height: '100%',
  },
  aboutRight: {
    flex: 1,
    marginVertical:15,
    marginHorizontal:15,
  },
  aboutTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aboutText: {
    // flex:1,
    textAlign:'justify',
    // marginBottom: 10,
  },
});

export default AboutSection;
