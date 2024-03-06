import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const SignUp = () => {
  return (
    <View style={styles.section}>
      <ImageBackground source={require('../App_assests/radio.jpg')} style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={styles.wrap}>
              <View style={styles.textWrap}>
                <View style={styles.text}>
                  <Text style={styles.heading}>Welcome to signup form</Text>
                  <Text style={{textAlign:'justify',color:'white'}}>
                    Embark on a musical journey like never before! Sign up today to unlock a world of harmonious
                    possibilities. Whether you're a budding musician or a seasoned pro, our platform is tailored to meet
                    your musical aspirations.
                  </Text>
                </View>
              </View>
              <View style={styles.loginWrap}>
                <Text style={styles.signupTitle}>Create an account</Text>
                <View style={styles.signupForm}>
                  <View style={styles.formGroup}>
                    <Text style={styles.label}>Full Name</Text>
                    <TextInput style={styles.input} placeholder="Full Name" placeholderTextColor="white"/>
                  </View>
                  <View style={styles.formGroup}>
                    <Text style={styles.label}>Email Address</Text>
                    <TextInput style={styles.input} placeholder="johndoe@email.com" keyboardType="email-address" placeholderTextColor="white"/>
                  </View>
                  <View style={styles.formGroup}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} placeholderTextColor="white"/>
                  </View>
                  <View style={styles.formGroup}>
                    <Text style={styles.label}>Phone no.</Text>
                    <TextInput style={styles.input} placeholder="+91" keyboardType="phone-pad" placeholderTextColor="white"/>
                  </View>
                  <View style={styles.formGroup}>
                    <Text style={styles.label}>Address</Text>
                    <TextInput style={styles.input} placeholder="Address" placeholderTextColor="white"/>
                  </View>
                  <View style={styles.formGroup}>
                    <View style={styles.checkboxContainer}>
                      {/* <CheckBox value={true} disabled={false} /> */}
                      <Text style={styles.checkboxLabel}>I agree all statements in terms of service</Text>
                    </View>
                  </View>
                  <View style={styles.formGroup}>
                    <TouchableOpacity style={styles.createAccountButton}>
                      <Text style={styles.createAccountButtonText}>Create an account</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.socialWrap}>
                  <Text style={styles.or}>or</Text>
                  <Text style={styles.socialMediaText}>Signup with this services</Text>
                  <View style={styles.socialMedia}>
                    <TouchableOpacity style={[styles.socialIcon, styles.googleIcon]}>
                      <Text style={styles.iconText}>G</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.socialIcon, styles.facebookIcon]}>
                      <Text style={styles.iconText}>F</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.socialIcon, styles.twitterIcon]}>
                      <Text style={styles.iconText}>T</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.textCenter}>
                  <Text style={styles.loginLink}>I'm already a member! Login</Text>
                </View>
              </View>
            </View>
          </View>
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
    marginBottom: 10,
    color:'white',
    fontWeight:'bold'
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
  label: {
    color:'white',
    fontWeight:'bold',
    fontSize:15,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 25,
    padding: 10,
    color:'red',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxLabel: {
    flex: 1,
  },
  createAccountButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  createAccountButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  socialWrap: {
    alignItems: 'center',
  },
  or: {
    fontSize: 18,
    marginBottom: 10,
  },
  socialMediaText: {
    marginBottom: 10,
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
    backgroundColor: '#DD4B39',
  },
  facebookIcon: {
    backgroundColor: '#3B5998',
  },
  twitterIcon: {
    backgroundColor: '#55ACEE',
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
    fontSize: 16,
    color: 'blue',
  },
});

export default SignUp;
