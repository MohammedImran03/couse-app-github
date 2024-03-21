import { View, Text,TouchableOpacity,StyleSheet,Image,Alert} from 'react-native'
import React from 'react'
import {FontAwesome  } from '@expo/vector-icons';
import { connect } from 'react-redux';
import {UserPayment} from '../../apis/payment.api';
import { useStripe } from '@stripe/stripe-react-native';
import {createnewCourse} from '../../apis/course.api';


const Coursedetails=({ blogId, onClose, CourseData,userData})=>{
  const coursepost = CourseData.find((blog) => blog._id === blogId);
    if (!coursepost) {
        return <Text>Blog not found</Text>;
      }


      const { initPaymentSheet, presentPaymentSheet } = useStripe();   
const Course_Enrollment=async()=>{
  if(userData && userData._id){

try {
  const value = {
    amount: parseInt(coursepost.c_fee),
  };
  const response = await UserPayment(value);
  const client_secret = response.data.paymentIntent;
  console.log(client_secret);
  
  // if (response.error) {
  //   Alert.alert('Payment Error : ', response.error);
  //   return;
  // }
  
  // // Initialize the Payment sheet
  // const initResponse = await initPaymentSheet({
  //   merchantDisplayName: 'Not Disclosed',
  //   paymentIntentClientSecret: client_secret,
  //   allowsDelayedPaymentMethods: true,
  //   defaultBillingDetails: {
  //     name: 'Jane Doe',
  //   } 
  // });
  // console.log("initresponse",initResponse)
  // console.log(initPaymentSheet)
  // if (initResponse.error) {
  //   console.log(initResponse.error);
  //   Alert.alert('Something went wrong');
  //   return;
  // }

  // // Present the Payment Sheet from Stripe
  // const paymentResponse = await presentPaymentSheet();
  // console.log(paymentResponse);
  // if (paymentResponse.error) {
  //   console.log(paymentResponse.error);
  //   Alert.alert(
  //     `Payment Error: ${paymentResponse.error.code}`,
  //     paymentResponse.error.message
  //   );
  //   return;
  // }
  // console.log(presentPaymentSheet);
  
  // If payment is done, create the order

  const enrollmentData = {
    user_id: userData._id,
    payment_id: client_secret,
    amount: coursepost.c_fee,
    product_id: coursepost._id,
  };    
  const result = await createnewCourse(enrollmentData);
 if(result.success === true){
  Alert.alert('Course Enrollment Success:', result.message);
  return;
 }else{
  Alert.alert('Course Enrollment Satus:', result.response.data.message || result.message);
  return;
 }


} catch (error) {
  if (error.response && error.response.data) {
    Alert.alert('Payment Error : ', error.response.data);
  } else {
    Alert.alert('Payment Error : ', error.message);
  }
  return;
}
}
else{
   Alert.alert('Only Authorized Members are allowed : ', 'Please Log In / Sign Up to Enroll the Course');
   return;
 }

   }



  return (
    <View style={{padding:5, paddingBottom:30,}}>
        <View style={{marginVertical:5, marginHorizontal:2,flex:1,alignItems:'flex-start'}}>
    <TouchableOpacity onPress={onClose} style={{backgroundColor:'rgb(0,191,255)',borderRadius:5,padding:4,  flexDirection:'row',alignItems:'flex-start',paddingHorizontal:5,marginBottom:5}}>
      <Text><FontAwesome name="long-arrow-left" size={25} color="blueviolet" /></Text>
      <Text style={{fontSize:20,fontWeight:'bold', marginLeft:5}}>Courses</Text>
    </TouchableOpacity>
  </View>
  <View>
  <Text style={{fontSize:24,fontWeight:'bold',color:'blueviolet',}}>{coursepost.c_title}</Text>
<View>
  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
  <View style={styles.Descriptions}>
    <Text style={styles.option}>Trainer : </Text>
    <Text style={styles.option3}>{coursepost.t_name}</Text>
  </View>
  {/* <Text>{coursepost._id}</Text> */}
  <View style={styles.Descriptions}>
    <Text style={styles.option}>Instrument : </Text>
    <Text style={styles.option3}>{coursepost.instrument}</Text>
  </View>
  </View>
 
  <View style={{flexWrap: 'wrap', padding:4,flexDirection:'row',justifyContent:'space-between' , backgroundColor:"rgb(230,230,250)",borderRadius:5,}}>
  <Text style={styles.option5}>{coursepost.c_outline}</Text>
  <Image source={{ uri: coursepost.image_link }} style={styles.image} />
  <Text style={styles.option5}>{coursepost.objective}.</Text>
  </View>
  <View>
  
  </View>
  <View style={styles.Descriptions1}>
    <Text style={styles.option1}>Eligibility : </Text>
    <Text style={styles.option2}>{coursepost.eligibility}</Text>
  </View>
  
  <View style={styles.Descriptions}>
    <Text style={styles.option}>Last Update : </Text>
    <Text style={styles.option3}>{coursepost.last_update}</Text>
  </View>
  <View style={styles.Descriptions}>
    <Text style={styles.option4}>Price : </Text>
    <Text style={styles.option4}><Text>Rs.</Text> {coursepost.c_fee}</Text>
  </View>
  <View style={{marginTop:10,flex:1,alignItems:'center'}}>
    <TouchableOpacity onPress={Course_Enrollment} style={{backgroundColor:'blueviolet',borderRadius:5,padding:4, flexDirection:'row',paddingHorizontal:5,marginBottom:5}}>
      {/* <Text><MaterialIcons name="arrow-back-ios-new" size={25} color="blueviolet" /></Text> */}
      <Text style={{fontSize:20,fontWeight:'bold', marginLeft:5,color:'white'}}>Enroll Course Rs.{coursepost.c_fee}</Text>
    </TouchableOpacity>
  </View>
</View>
  </View>
    </View>
  )
}

const styles=StyleSheet.create({
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
color:'rgb(102, 102, 102)'
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

const mapStateToProps = (state) => ({
  userData: state.userData,
});

export default connect(mapStateToProps)(Coursedetails);