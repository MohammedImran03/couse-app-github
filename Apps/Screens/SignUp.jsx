import React,{useState,useEffect} from 'react';
import { View, Text,Image, TextInput, TouchableOpacity, ImageBackground, StyleSheet,Alert } from 'react-native';
import { Feather,MaterialIcons } from '@expo/vector-icons';
import CheckBox from '@react-native-community/checkbox';
import Google from '../App_assests/Google.png';
import Facebook from '../App_assests/Facebook.png';
import Twitter from '../App_assests/Twitter.png';
import { userRegistration } from '../apis/user.api';


const SignUp = ({onClose}) => {
  const [loginData, setLoginData] = useState({
    name: '',
    email: '',
    password: '',
    ph_no: '',
    address: '',
  });
  const handleInputChange = (fieldName, value) => {
    setLoginData({ ...loginData, [fieldName]: value });
  };

  const [loader, setLoader] = useState(false);

  const handleLoginPress =async() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!loginData.email||!loginData.password||!loginData.name||!loginData.ph_no||!loginData.address){
      Alert.alert('Invalid User Details', 'Please enter a valid details to create account');
      return;
    }
    if (loginData.password.length<8) {
      Alert.alert('Pasword Characters', 'Password characters should be greater than 8.');
      return;
    }
    if (!emailRegex.test(loginData.email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
      return;
    }
    try {
      setLoader(true);
      const result = await userRegistration(loginData);
      console.log(result);
     if(result.success === true){
      setLoader(false);
      Alert.alert('Account Creation Success:', result.message);
      return;
     }else{
      setLoader(false);
      Alert.alert('Account Creation Satus:', result.response.data.message);
      return;
     }
      
    } catch (error) {
      setLoader(false);
      // console.log(error);
      if(error.response){
        Alert.alert('Account Creation Failed', error.response.data.message);
        return;
      }
      else{
        Alert.alert('Account Creation Failed', `${error.message}, Please Try again later`);
        return;
      }
    }
    // console.log(loginData);
  };
  
  return (
    <View style={styles.section}>
      <ImageBackground source={require('../App_assests/radio.jpg')} style={styles.backgroundImage}>
      <View style={{marginVertical:5, marginTop:5,flex:1,alignItems:'center'}}>
    <TouchableOpacity onPress={onClose} style={{borderRadius:5,paddingHorizontal:4,paddingVertical:2, flexDirection:'column',alignItems:'center',paddingHorizontal:5,}}>
      <Text style={{fontSize:20,fontWeight:'bold',color:'white',  borderBottomWidth: 2,
  borderBottomColor: 'white', }}>Back</Text>
      <Text><Feather name="arrow-down" size={20} color="white" /></Text>
    </TouchableOpacity>
  </View>
       
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={styles.wrap}>
              <View style={styles.textWrap}>
                <View style={styles.text}>
                  <Text style={styles.heading}>Welcome to signup form</Text>
                  <Text style={{textAlign:'justify',color:'white'}}>
                    Embark on a musical journey like never before! Sign up today to unlock a world of harmonious
                    possibilities. Whether you're a musician or a seasoned pro, our platform is tailored to meet
                    your musical aspirations.
                  </Text>
                </View>
              </View>
              <View style={styles.loginWrap}>
                <Text style={styles.signupTitle}>Create an account</Text>
                <View style={styles.signupForm}>
                  <View style={styles.formGroup}>
                    <Text style={styles.label}>Full Name</Text>
                    <TextInput style={styles.input}
                     onChangeText={(text) => handleInputChange('name', text)} placeholder="Full Name" placeholderTextColor="white"/>
                  </View>
                  <View style={styles.formGroup}>
                    <Text style={styles.label}>Email Address</Text>
                    <TextInput style={styles.input} 
                    onChangeText={(text) => handleInputChange('email', text)}
                    placeholder="johndoe@email.com" keyboardType="email-address" placeholderTextColor="white"/>
                  </View>
                  <View style={styles.formGroup}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.input}
                    onChangeText={(text) => handleInputChange('password', text)}
                    placeholder="Password" secureTextEntry={true} placeholderTextColor="white"/>
                  </View>
                  <View style={styles.formGroup}>
                    <Text style={styles.label}>Phone no.</Text>
                    <TextInput style={styles.input} 
                    onChangeText={(text) => handleInputChange('ph_no', text)}
                    placeholder="+91" keyboardType="phone-pad" placeholderTextColor="white"/>
                  </View>
                  <View style={styles.formGroup}>
                    <Text style={styles.label}>Address</Text>
                    <TextInput style={styles.input} 
                    onChangeText={(text) => handleInputChange('address', text)}
                    placeholder="Address" placeholderTextColor="white"/>
                  </View>
                  <View style={styles.formGroup}>
                    <View style={styles.checkboxContainer}>
                      {/* <CheckBox value={true} disabled={false} /> */}
                      <Text style={styles.checkboxLabel}>I agree all statements in terms of service</Text>
                    </View>
                  </View>
                  <View style={styles.buttonstyle}>
                    <TouchableOpacity style={styles.createAccountButton} onPress={handleLoginPress}>
                     {loader?<Feather name="loader" size={20} color="white" /> : <Text style={styles.createAccountButtonText}>Create account</Text>}
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.socialWrap}>
                  <Text style={styles.or}>or</Text>
                  <Text style={styles.socialMediaText}>Signup with this services</Text>
                  <View style={styles.socialMedia}>
                    <TouchableOpacity style={[styles.socialIcon, styles.googleIcon]}>
                    <Image source={Google} style={styles.googleIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.socialIcon, styles.facebookIcon]}>
                    <Image source={Facebook} style={styles.facebookIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.socialIcon, styles.twitterIcon]}>
                    <Image source={Twitter} style={styles.twitterIcon}/>
                    </TouchableOpacity>
                  </View>
                </View>
                {/* <View style={styles.textCenter}>
                  <Text style={styles.loginLink}>I'm already a member! Login</Text>
                </View> */}
              </View>
            </View>
          </View>
        </View>
        <View style={{marginBottom:25,flex:1,alignItems:'center',marginVertical:15}}>
    <TouchableOpacity onPress={onClose} style={{borderRadius:5,padding:4, flexDirection:'row',paddingHorizontal:5,marginBottom:5}}>
      <Text></Text>
      <Text style={{fontSize:20,fontWeight:'bold', marginLeft:5,color:'white',borderBottomWidth: 2,
  borderBottomColor: 'white',}}>Already a Member / Log In</Text>
    </TouchableOpacity>
  </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    justifyContent: 'center',
  },
  wrap: {
    // width: '80%',
  },
  textWrap: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color:'white',
    width: '100%',
  },
  heading: {
    fontSize: 24,
    marginBottom: 7,
    color:'white',
    fontWeight:'bold',
    textAlign:'center'
  },
  loginWrap: {
    // padding: 15,
    color:'white',
    paddingHorizontal:15,
  },
  signupTitle: {
    color:'white',
    marginTop:10,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  signupForm: {
   marginVertical:10,
  },
  formGroup: {
    marginBottom: 15,
  },
  buttonstyle:{
    fledx:1,
    alignItems:'center',
  },
  label: {
    color:'white',
    fontWeight:'bold',
    fontSize:15,
    marginBottom: 5,
    marginLeft:15,
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 25,
    padding: 10,
    color:'white',
    
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxLabel: {
    color:'white',
    fontSize:15,
    fontWeight:'bold',
    flex: 1,
    marginLeft:15,
  },
  createAccountButton: {
    backgroundColor: 'blueviolet',
    color:'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  createAccountButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  socialWrap: {
    alignItems: 'center',
  },
  or: {
    color:'white',
    fontSize: 18,
    marginBottom: 7,
    fontWeight: 'bold',
    fontSize: 16,
  },
  socialMediaText: {
    fontWeight: 'bold',
    fontSize: 16,
    color:'white',
    marginBottom: 7,
  },
  socialMedia: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  googleIcon: {
    // backgroundColor: '#DD4B39',
    marginTop:5,
    marginHorizontal:10,
  },
  facebookIcon: {
    marginTop:5,
    marginHorizontal:10,
    // backgroundColor: '#3B5998',
  },
  twitterIcon: {
    marginTop:5,
    marginHorizontal:10,
    // backgroundColor: '#55ACEE',
  },
  iconText: {
    color: 'white',
    fontSize: 18,
  },
  textCenter: {
    alignItems: 'center',
  },
  loginLink: {
    marginTop: 20,
    fontSize: 18,
    fontWeight:'bold',
    color: 'white',
  },
});

export default SignUp;
