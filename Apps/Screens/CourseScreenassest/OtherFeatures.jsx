import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather,FontAwesome,Ionicons,MaterialCommunityIcons,FontAwesome5 } from '@expo/vector-icons';
const featuresData = [
  {
    icon: <Feather name="key" size={24} color="blueviolet" />,
    title: 'Lifetime Access',
    description: 'Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore. Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.',
  },
  {
    icon: <FontAwesome name="files-o" size={24} color="blueviolet" />,
    title: 'Source File Included',
    description: 'Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore. Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.',
  },
  {
    icon: <Ionicons name="medal-outline" size={24} color="blueviolet" />,
    title: 'Student Membership',
    description: 'Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore. Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.',
  },
  {
    icon: <Ionicons name="briefcase-outline" size={24} color="blueviolet" />,
    title: '35000+ Courses',
    description: 'Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore. Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.',
  },
  {
    icon: <MaterialCommunityIcons name="shield-crown-outline" size={24} color="blueviolet" />,
    title: 'Expert Mentors',
    description: 'Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore. Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.',
  },
  {
    icon: <FontAwesome5 name="headphones-alt" size={24} color="blueviolet" />,
    title: 'Live Supports',
    description: 'Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore. Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.',
  },
];

const OtherFeatureSection = () => {
  return (
    <View style={styles.otherFeatureContainer}>
      <View style={styles.sectionTitle}>
        <Text style={styles.titleText}>
          Features That Can Avail By Everyone
        </Text>
        <Text style={styles.subtitleText}>
          If you are looking at blank cassettes on the web, you may be
          very confused at the difference in price. You may see some for
          as low as $.17 each.
        </Text>
      </View>
      <View style={styles.featureInner}>
        {featuresData.map((feature, index) => (
          <View key={index} style={styles.featureItem}>
            <Text style={styles.featureIcon}>{feature.icon}</Text>
            <Text style={styles.featureTitle}>{feature.title}</Text>
            <Text style={styles.featureDescription}>{feature.description}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  otherFeatureContainer: {
    paddingVertical:20,
    paddingHorizontal:10,
    marginVertical:10,
  },
  sectionTitle: {
    alignItems: 'flex-start',
  },
  titleText: {
    marginVertical:5,
    // color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  subtitleText: {
    flex:1,
    textAlign:'justify',
    color: 'gray',
    marginTop: 10,
    marginBottom:20,
  },
  featureInner: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  featureItem: {
    width: '48%', 
    backgroundColor:'rgb(211,211,211)',
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    borderColor: '#ddd',
  },
  featureIcon: {
    // fontSize: 24,
    textAlign: 'left',
    marginBottom:5,
  },
  featureTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginVertical:4
    // textAlign: 'center',
  },
  featureDescription: {
    marginTop: 5,
    textAlign: 'justify',
  },
});

export default OtherFeatureSection;
