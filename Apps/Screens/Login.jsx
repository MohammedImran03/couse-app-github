import React, { useState,useEffect } from 'react';
import { View, Text, TextInput,ScrollView, TouchableOpacity, ToastAndroid,Image, StyleSheet, Modal ,Alert} from 'react-native';
import { FontAwesome,Ionicons,MaterialIcons,Feather,FontAwesome6} from '@expo/vector-icons';
import SignUp from './SignUp';
import { useDispatch } from 'react-redux';
import { setUserData } from '../Redux/action';

import {userLogin} from '../apis/user.api';
const Login = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [loader, setLoader] = useState(false);
    const [tickmark, setTickmark] = useState(false);
    const dispatch = useDispatch();
    const handleBlogPress = () => {
        // setSelectedBlogId(blogId);
        setModalVisible(true);
      };

      const handleInputChange = (fieldName, value) => {
        setLoginData({ ...loginData, [fieldName]: value });
      };
    
      const handleLoginPress = async() => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!loginData.email||!loginData.password){
          Alert.alert('Invalid Login Details', 'Please enter a valid User Credentials');
          return;
        }
        if (!emailRegex.test(loginData.email)) {
          Alert.alert('Invalid Email', 'Please enter a valid email address');
          return;
        }

        try {
          setLoader(true);
          const isAuth = await userLogin(loginData);
          //  console.log(isAuth);
          if (isAuth.success === false) {
            setLoader(false);
            Alert.alert('Log In Failed', isAuth.message);
            return;
          }
          if(isAuth.success === true){
            ToastAndroid.show('Logged In Successfully', ToastAndroid.SHORT);
            setLoader(false);
            setTickmark(true);
             dispatch(setUserData(isAuth.data));
setTimeout(()=>{
  setTickmark(false);
},2000)
          } 

        } catch (error) {
          setLoader(false);
          // console.log(error)
            if(error.response){
              Alert.alert('Log In Failed', error.response.data.message);
              return;
            }else{
              Alert.alert('Log In Failed', error.message);
              return;
            }
          }
        };
    

  return (
    <View style={styles.limiter}>
      <View style={styles.container}>
        <View style={styles.wrap}>
          <View style={styles.loginPic}>
            <Image source={require('../App_assests/login-img.png')} style={styles.loginImage} />
          </View>

          <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Member Login</Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(text) => handleInputChange('email', text)}
              />
              <Ionicons name="mail-sharp" size={24} color="black" style={styles.positionabsolute} />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                onChangeText={(text) => handleInputChange('password', text)}
              />
              <MaterialIcons name="password" size={24} color="black" style={styles.positionabsolute}/>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
               {loader? <Feather name="loader" size={20} color="white" /> :tickmark?<FontAwesome6 name="circle-check" size={20} color="white" style={{backgroundColor:'green'}} />: <Text style={styles.loginButtonText}>Log In</Text>}
              </TouchableOpacity>
            </View>

            <View style={styles.forgotContainer}>
              <Text style={styles.forgotText}>Forgot</Text>
              <Text style={styles.forgotLink}>Username / Password?</Text>
            </View>

            <View style={styles.createAccountContainer}>
                <TouchableOpacity onPress={handleBlogPress} style={{flexDirection:'row',alignItems:'center',justifyContent:'center', padding:10,}}>
              <Text style={styles.createAccountText}>SignUp / Create Account</Text>
              <Text style={styles.createAccountLink}>
                <Text style={styles.arrowIcon}><FontAwesome name="sign-in" size={25} color="blueviolet" /></Text>
              </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        //   setSelectedBlogId(null);
        }}
      >
        <ScrollView>
   
          <View>
            <SignUp onClose={() => setModalVisible(false)}/>
          </View>

        </ScrollView>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  limiter: {
    flex: 1,
    backgroundColor:'rgb(220,220,220)'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal:10
  },
  wrap: {
  
    // width: '80%',
  },
  loginPic: {
    justifyContent: 'center',
   paddingVertical:10,
    // backgroundColor:'red'
    elevation:1
    // alignItems: 'flex-end',
    
  },
  loginImage: {
    width: '100%', // Adjust the width based on your design
    height: 240, // Adjust the height based on your design
  },
  formContainer: {
   marginTop:5
  },
  formTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  inputContainer: {
    marginVertical:10,
    // marginBottom: 20,
    position:'relative',
    // backgroundColor:'red'
  },
  positionabsolute:{
   position:'absolute',
   top:'25%',
   left:'5%',
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgb(105,105,105)',
    borderRadius: 25,
    paddingVertical:10,
    paddingLeft:50
  },
  buttonContainer: {
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: 'blueviolet',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  forgotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  forgotText: {
    marginRight: 5,
  },
  forgotLink: {
    color: 'blue',
  },
  createAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    // backgroundColor:'gray',
    alignItems:'center',
  },
  createAccountText: {
    fontSize:18,
    fontWeight:'bold',
  },
  createAccountLink: {
    color: 'blue',
    marginLeft: 5,
  },
  arrowIcon: {
    // fontSize: 20,
  },
});

export default Login;
