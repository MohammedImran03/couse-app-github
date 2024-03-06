import { View, Text, ImageBackground, StyleSheet,} from 'react-native';
import React from 'react'
import { Feather,SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';


export default function Features() {
  return (
    <View style={styles.featureArea}>
    <View style={styles.container}>
      <View style={styles.featureInner}>
        <View style={styles.featureItem}>
          <View style={styles.featureItemContent}>
            <View style={styles.column1}>
            <Text style={styles.icon}><Feather name="book-open" size={24} color="black" /></Text>
            {/* <View style={styles.ml20}> */}
              <Text style={styles.heading}>New Classes</Text>
              </View>
              <Text style={styles.Textcolumn}>
                Designed to spark curiosity, inspire creativity, and fuel your passion for learning.
              </Text>
            {/* </View> */}
          </View>
        </View>
        <View style={styles.featureItem}>
          <View style={styles.featureItemContent}>
          <View style={styles.column1}>
            <Text style={styles.icon}><SimpleLineIcons name="trophy" size={24} color="black" /></Text>
            {/* <View style={styles.ml20}> */}
              <Text style={styles.heading}>Top Courses</Text>
              </View>
              <Text style={styles.Textcolumn}>
                We've carefully crafted classes that cater to various interests and learning styles.
              </Text>
            {/* </View> */}
          </View>
        </View>
        <View style={[styles.featureItem, styles.borderRight0]}>
          <View style={styles.featureItemContent}>
          <View style={styles.column1}>
            <Text style={styles.icon}><MaterialCommunityIcons name="monitor-dashboard" size={24} color="black" /></Text>
            {/* <View style={styles.ml20}> */}
              <Text style={styles.heading}>Full Assessment</Text>
              </View>
              <Text style={styles.Textcolumn}>
                Experienced Instructors who are dedicated to providing engaging learning experience.
              </Text>
            {/* </View> */}
          </View>
        </View>
      </View>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    featureArea: {
      marginTop:20,
      paddingHorizontal:15,
    flexDirection:'column',
    flex: 1,
    // justifyContent:'center',
    // alignItems:'center',
    },
    container: {
      flex: 1,
      flexDirection:'column',
      // paddingHorizontal: 20,
      // paddingVertical: 10,
    },
    featureInner: {
      // flexDirection: 'row',
      // justifyContent: 'space-between',
    },
    featureItem: {
      flex: 1,
      // marginHorizontal: 10,
      marginBottom: 15,
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 10,
      elevation: 3, 
    },
    column1:{
  flex:1,
  flexDirection:'row',
  // alignItems:'flex-start',
    },
    featureItemContent: {
      // flexDirection: 'row',
      // alignItems: 'center',
    },
    icon: {
      fontSize: 24,
      marginRight: 10,
      alignItems: 'flex-start',
    },
    Textcolumn: {
  paddingLeft:38,
  color:'gray'
    },
    heading: {
      flex:1,
      marginLeft:5,
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      alignItems: 'flex-start',
    },
    borderRight0: {
      borderRightWidth: 0,
    },
  });