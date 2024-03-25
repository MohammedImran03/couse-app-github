import { View, Text, ScrollView, StyleSheet, TouchableOpacity,Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Feather } from '@expo/vector-icons';

export default function CourseCounselling() {

  const [CounsellingData, setCounsellingData] = useState([]); 
  const [loader,setLoader]=useState(false);
  useEffect(() => {
    getdata();
  }, []);
      
  const getdata = async () => {
    try {
      setLoader(true);
      let courselist = await axios.get("https://course-app-server.onrender.com/tunetutor/counselling/allcousellings");
      // console.log(courselist.data.result);
      setCounsellingData(courselist.data.result);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  };

const handleStatusUpdate=async(id)=>{
  try {
    let courseupdate = await axios.put("https://course-app-server.onrender.com/tunetutor/update-Counsell/"+id);
    // console.log(courseupdate.data.message);
   if(courseupdate.data.status=="success"){
    getdata();
    Alert.alert('Counselling Finished', courseupdate.data.message);
    return;
   }
    // setCounsellingData(courselist.data.result);
  } catch (error) {
    console.log(error);
  }
  // console.log(item);

}
  
  const renderStatusButton = (_id,status) => {
    if (status === 0) {
      return (
        <TouchableOpacity onPress={() => handleStatusUpdate(_id)} style={{ backgroundColor: 'rgb(0,0,205)', padding: 7, borderRadius: 5 }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Mark as Complete</Text>
        </TouchableOpacity>
      );
    } else if (status === 2) {
      return (
        <TouchableOpacity disabled={true} style={{ backgroundColor: '	rgb(32,178,170)', padding: 7, borderRadius: 5 }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Completed</Text>
        </TouchableOpacity>
      );
    }
  };


  return (
    <ScrollView>
       {loader ? <View style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><Text>Loading Documents<Feather name="loader" size={20} color="black" /></Text></View>:
      <View style={styles.container}>
        <Text style={styles.title}>Course Counselling List</Text>
        {CounsellingData.map(item => (
          <View style={styles.card} key={item._id}>
            <Text style={{fontSize:14,fontWeight:'bold',marginVertical:2,}}>Name: {item.name}</Text>
            <Text style={{fontSize:14,fontWeight:'bold',marginVertical:2,}}>Email: {item.email}</Text>
            <Text style={{fontSize:14,fontWeight:'bold',marginVertical:2,}}>Phone Number: {item.number}</Text>
            <View style={{marginVertical:2, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Status:</Text>
  {renderStatusButton(item._id,item.status)}
</View>

          </View>
        ))}
      </View>
}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    // padding: 10,
    paddingVertical:20,
    paddingHorizontal:7,
    backgroundColor: 'lightgray',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
