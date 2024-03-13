import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import {FontAwesome  } from '@expo/vector-icons';


export default function Coursedetails({ blogId, onClose, CourseData}) {

    const coursepost = CourseData.find((blog) => blog._id === blogId);

    if (!coursepost) {
   
        return <Text>Blog not found</Text>;
      }

  return (
    <View style={{backgroundColor:'rgb(192,192,192)',padding:10,}}>
        <View style={{marginVertical:5, marginHorizontal:2,flex:1,alignItems:'flex-start'}}>
    <TouchableOpacity onPress={onClose} style={{backgroundColor:'rgb(0,191,255)',borderRadius:5,padding:4,  flexDirection:'row',alignItems:'flex-start',paddingHorizontal:5,marginBottom:5}}>
      <Text><FontAwesome name="long-arrow-left" size={25} color="blueviolet" /></Text>
      <Text style={{fontSize:20,fontWeight:'bold', marginLeft:5}}>Courses</Text>
    </TouchableOpacity>
  </View>
  <View>
  <Text style={{fontSize:24,fontWeight:'bold',color:'blueviolet',}}>{coursepost.c_title}</Text>
<View>
  <View style={styles.Descriptions}>
    <Text style={styles.option}>Trainer : </Text>
    <Text style={styles.option}>{coursepost.t_name}</Text>
  </View>
  <View style={styles.Descriptions}>
    <Text style={styles.option}>Instrument : </Text>
    <Text style={styles.option}>{coursepost.instrument}</Text>
  </View>
  <View style={styles.Descriptions}>
    <Text style={styles.option1}>Eligibility : </Text>
    <Text style={styles.option2}>{coursepost.eligibility}</Text>
  </View>
</View>
  </View>
     
    </View>
  )
}

const styles=StyleSheet.create({
  Descriptions:{ flexWrap: 'wrap',paddingHorizontal:10, flexDirection:'row',justifyContent:'space-between' , backgroundColor:"rgb(230,230,250)",borderRadius:5,padding:4,alignItems:'flex-start',marginVertical:3},
option:{
  fontSize:18,
  fontWeight:'bold',
},
option1:{
  fontSize:18,
  fontWeight:'bold',
},
option2:{
  fontSize:18,
  fontWeight:'bold',
}

});