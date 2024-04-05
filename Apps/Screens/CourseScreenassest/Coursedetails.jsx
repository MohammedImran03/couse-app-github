import { View, Text,StyleSheet,Image,Alert, TouchableOpacity, Linking} from 'react-native'
import React from 'react'
import {FontAwesome  } from '@expo/vector-icons';
import { connect } from 'react-redux';




const Coursedetails=({ blogId, onClose, CourseData,userData})=>{




  const coursepost = CourseData.find((blog) => blog._id === blogId);
    if (!coursepost) {
        return <Text>Course not found</Text>;
      }


 


      const handleOpenLink = async () => {
        if (userData && userData._id) {
          try {
            const enrollmentData = {
              user_id: userData._id,
              // payment_id: client_secret,
              amount: coursepost.c_fee,
              product_id: coursepost._id,
            };
      
            const queryString = Object.keys(enrollmentData)
              .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(enrollmentData[key])}`)
              .join('&');
      
            const url = `https://tunetutor-client-payment.netlify.app/home/?${queryString}`;
               console.log(url);
            await Linking.openURL(url);
          } catch (error) {
            console.error('Error opening link:', error);
            Alert.alert('Error:', 'Failed to open the link.');
          }
        } else {
          Alert.alert('Unauthorized Access:', 'Please Log In / Sign Up to Enroll the Course');
        }
      };

  
      


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
    <TouchableOpacity title="Open Link" onPress={handleOpenLink} style={{backgroundColor:'blueviolet',borderRadius:5,padding:4, flexDirection:'row',paddingHorizontal:5,marginBottom:5}}>
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