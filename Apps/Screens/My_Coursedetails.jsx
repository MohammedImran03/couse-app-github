import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Modal, TouchableWithoutFeedback } from 'react-native';

export default function My_Coursedetails({product,onClose}) {

  return (
    <TouchableWithoutFeedback >
    <View style={styles.modalBackground}>
      <View style={styles.modalContent}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={{padding:5, paddingBottom:30,}}>
  <View style={{marginVertical:5, marginHorizontal:2,flex:1,alignItems:'flex-start'}}>
{/* <TouchableOpacity onPress={onClose} style={{backgroundColor:'rgb(0,191,255)',borderRadius:5,padding:4,  flexDirection:'row',alignItems:'flex-start',paddingHorizontal:5,marginBottom:5}}>
<Text><FontAwesome name="long-arrow-left" size={25} color="blueviolet" /></Text>
<Text style={{fontSize:20,fontWeight:'bold', marginLeft:5}}>Courses</Text>
</TouchableOpacity> */}
</View>
<View>
<Text style={{fontSize:18,fontWeight:'bold',color:'blueviolet'}}>{product.c_title}</Text>
<View>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<View style={styles.Descriptions}>
<Text style={styles.option}>Trainer : </Text>
<Text style={styles.option3}>{product.t_name}</Text>
</View>
{/* <Text>{product._id}</Text> */}
<View style={styles.Descriptions}>
<Text style={styles.option}>Instrument : </Text>
<Text style={styles.option3}>{product.instrument}</Text>
</View>
</View>
<View style={styles.Descriptions}>
<Text style={styles.option}>Last Update : </Text>
<Text style={styles.option3}>{product.last_update}</Text>
</View>
<View >
<Text style={styles.option5}>{product.c_outline}</Text>
<Image source={{ uri: product.image_link }} style={styles.image} />
<Text style={styles.option5}>{product.objective}.</Text>
</View>
<View>

</View>
<View style={styles.Descriptions1}>
<Text style={styles.option1}>Eligibility : </Text>
<Text style={styles.option2}>{product.eligibility}</Text>
</View>


</View>
</View>
</View>
        </ScrollView>
      </View>
    </View>
  </TouchableWithoutFeedback>
  )
}
const styles=StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        height:'100%',
      },
      modalContent: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical:20,
        // paddingHorizontal
        width: '90%',
        height: '90%',
        margin: 20,
      },
      scrollViewContent: {
        flexGrow: 1,
      },
      modalCard: {
        marginBottom: 20,
      },
      modalTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 7,
      },
      modalImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
      },
      modalDescription: {
        fontSize: 14,
        marginBottom: 5,
      },
      modalDetails: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      closeButton: {
        position: 'absolute',
        top: 10,
        left: 10,
      },
      closeButtonText: {
        fontSize: 16,
        color: 'blue',
      },
    Descriptions:{ flexWrap: 'wrap',paddingHorizontal:10, flexDirection:'row',justifyContent:'space-between' , backgroundColor:"rgb(230,230,250)",borderRadius:5,padding:4,alignItems:'flex-start',marginVertical:3},
  option:{
    fontSize:14,
    fontWeight:'bold',
    color:'rgb(102, 102, 102)'
  },
  Descriptions1:{ flexWrap: 'wrap',paddingHorizontal:10, flexDirection:'column', backgroundColor:"rgb(230,230,250)",borderRadius:5,padding:4,alignItems:'flex-start',marginVertical:3},
  option1:{
    fontSize:14,
    fontWeight:'bold',
    color:'rgb(102, 102, 102)'
  },
  option2:{
    fontSize:14,
    fontWeight:'bold',
  textAlign:'justify',
  color:'rgb(102, 102, 102)',
flex:1,
flexDirection:'column'
  },
  option5:{
    fontSize:14,
    fontWeight:'bold',
  textAlign:'left',
  color:'rgb(102, 102, 102)'
  },
  option3:{
    fontSize:14,
    fontWeight:'bold',
    color:'blueviolet',
    color:'rgb(102, 102, 102)'
  },
  option4:{
    fontSize:18,
    fontWeight:'bold',
    color:'green',
    // color:'rgb(102, 102, 102)'
  },
  option5:{
    fontSize:14,
    fontWeight:'bold',
  textAlign: 'justify',
//   flex:1,
//   justifyContent:'space-between',
  color:'rgb(102, 102, 102)'
  },
  image: {
    borderRadius:5,
    marginVertical:5,
    // alignItems:'center',
    width: "100%",
    height: 200,
    // borderTopLeftRadius: 10,
    // borderBottomLeftRadius: 10,
  },
  
  });