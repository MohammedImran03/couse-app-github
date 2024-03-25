import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Feather} from '@expo/vector-icons';

export default function CourseEnrollment() {
  const [CourseEnrollmentsdata, setCourseEnrollmentsdata] = useState([]); 
  const [totalAmount, setTotalAmount] = useState(0);
const [loader,setLoader]=useState(false);
  useEffect(() => {
    getdata();
  }, []);
      
  const getdata = async () => {
    try {
      setLoader(true);
      let courselist = await axios.get("https://course-app-server.onrender.com/tunetutor/courses/Courseenrollments");
      // console.log(courselist.data.result);
      setCourseEnrollmentsdata(courselist.data.result);
      setLoader(false);
      // Calculate total amount
      const total = courselist.data.result.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
      setTotalAmount(total);
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };

  return (
    <ScrollView>
             {loader ? <View style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><Text>Loading Documents<Feather name="loader" size={20} color="black" /></Text></View>:
      <View style={styles.container}>
        <Text style={styles.title}>Course Enrollment</Text>
        <View style={styles.totalAmountContainer}>
          <Text style={styles.totalAmountText}>Total Amount : Rs.{totalAmount}</Text>
        </View>
   
    {CourseEnrollmentsdata.map((enrollment, index) => (
          <View style={[styles.card, index % 2 === 0 ? styles.evenCard : styles.oddCard]}
           key={index}>
            <Text style={{fontSize:14,fontWeight:'bold',marginVertical:2,}}>User ID: {enrollment._id}</Text>
            <Text style={{fontSize:14,fontWeight:'bold',marginVertical:2,}}>Payment ID: {enrollment.payment_id}</Text>
            <Text style={{fontSize:14,fontWeight:'bold',marginVertical:2,}}>Amount: {enrollment.amount}</Text>
            <Text style={{fontSize:14,fontWeight:'bold',marginVertical:2,}}>Product ID: {enrollment.product_id}</Text>
          </View>
        ))}

   
      </View>
}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  // padding: 10,
  paddingVertical:20,
  paddingHorizontal:7,
  backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
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
  evenCard: {
    backgroundColor: 'rgb(220,220,220)', // Light gray
  },
  oddCard: {
    backgroundColor: '#ffffff', // White
  },
  totalAmountContainer: {
    // position: 'absolute',
    // top: 0,
    // right: 0,
    // padding: 10,
    marginVertical:5,
  },
  totalAmountText: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'red',
  },
});
