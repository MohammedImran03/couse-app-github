import React,{useEffect,useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView,Alert } from 'react-native';
import { AntDesign,Feather } from '@expo/vector-icons';
import Footer from '../Component/Footer';
import {createnewcourseenrollment} from '../apis/course.api';
// import {Feather} from '@expo/vector-icons';

const Contacts=()=>{

const [dummy,setDummy]=useState('');
  const [formValues, setFormValues] = useState({
    name: '',
    number: '',
    email: '',
    status: 0,
  });

  const handleInputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };


  const [loader, setLoader] = useState(false);

  const handleSubmit = async() => {
    if(!formValues.name || ! formValues.number || !formValues.email){
      Alert.alert('Invalid User Details', 'Please Provide Valid User Details');
      return;
    }
    // console.log(formValues);
    try {
      setLoader(true);
      const result = await createnewcourseenrollment(formValues);
      // console.log(result);
     if(result.success === true){
      setFormValues({name: '',
      number: '',
      email: '',
      status: 0});
      setDummy('');
      setLoader(false);
      Alert.alert('Enrollment Status :', `Counselling Data recorded Succesfully, our Team will Contat you Shortly` );
      return;
     }else{
      setLoader(false);
      Alert.alert('Enrollment Status :', result.response.data.message);
      return;
     }

    } catch (error) {
      setLoader(false);
      console.log(error);
      if(error.response){
        Alert.alert('Enrollment Status Failed', error.response.data.message);
        return;
      }
      else{
        Alert.alert('Enrollment Status Failed', `${error.message}, Please Try again later`);
        return;
      }
    }
  };


    return (
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.addressWrap}>
              <View style={styles.singleContactAddress}>
                <View style={styles.icon}>
                <AntDesign name="home" size={24} color="blueviolet" />
                </View>
                <View style={styles.contactDetails}>
                  <Text style={styles.title}>Chennai, Tamil Nadu</Text>
                  <Text>SIMATS Thandalam PIN-602105</Text>
                </View>
              </View>
    
              <View style={styles.singleContactAddress}>
                <View style={styles.icon}>
                <Feather name="phone" size={24} color="blueviolet" />
                </View>
                <View style={styles.contactDetails}>
                  <Text style={styles.title}>+ (91) 98760 54321</Text>
                  <Text>Mon to Fri 9am to 6 pm</Text>
                </View>
              </View>
    
              <View style={styles.singleContactAddress}>
                <View style={styles.icon}>
                <Feather name="mail" size={24} color="blueviolet" />
                </View>
                <View style={styles.contactDetails}>
                  <Text style={styles.title}>support@tunetutor.com</Text>
                  <Text>Send us your query anytime!</Text>
                </View>
              </View>
            </View>
    
            <View style={styles.formContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter your name"
                value={formValues.name}
                onChangeText={(value) => handleInputChange('name', value)}
              />
    
              <TextInput
                style={styles.input}
                placeholder="Enter email address"
                keyboardType="email-address"
                value={formValues.email}
                onChangeText={(value) => handleInputChange('email', value)}
              />
    
    <TextInput
                style={styles.input}
                placeholder="Phone Number"
                onFocus={() => {}}
                onBlur={() => {}}
                value={formValues.number}
                onChangeText={(value) => handleInputChange('number', value)}
              />
    
              <TextInput
                style={[styles.input, styles.messageInput]}
                placeholder="Enter Message"
                multiline
                value={dummy}
                onChangeText={(value) => setDummy(value)}
              />
    
              <TouchableOpacity style={styles.button}
                onPress={handleSubmit}>
                   {loader?<Text style={styles.buttonText}>Loading <Feather name="loader" size={20} color="white" /></Text> : <Text style={styles.buttonText}>Send Message</Text>}
                {/* <Text style={styles.buttonText}>Send Message</Text> */}
              </TouchableOpacity>
            </View>
          </View>
          <Footer/>
        </ScrollView>
      );
}

const styles = StyleSheet.create({
    container: {
      marginTop:15,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        padding: 20,
    },
    addressWrap: {
      flexDirection: 'column',
      marginBottom: 20,
    },
    singleContactAddress: {
        alignItems:'center',
      flexDirection: 'row',
      marginBottom: 15,
    },
    icon: {
      marginRight: 10,
    },
    contactDetails: {
      flexDirection: 'column',
    },
    title: {
        fontSize:18,
      fontWeight:'bold'
    },
    formContainer: {
      flex: 1,
      flexDirection: 'column',
      width: '100%',
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 20,
      paddingLeft: 10,
    },
    messageInput: {
      height: 100,
    },
    button: {
      backgroundColor: 'blueviolet',
      padding: 10,
      borderRadius: 5,
      alignSelf:'flex-end'
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
    },
  });
export default Contacts;