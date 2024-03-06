import React, { useState } from 'react';
import { View, Text, TextInput,ScrollView, TouchableOpacity, Image, StyleSheet, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import SignUp from './SignUp';
const Login = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const handleBlogPress = () => {
        // setSelectedBlogId(blogId);
        setModalVisible(true);
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
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
              />
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Login</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.forgotContainer}>
              <Text style={styles.forgotText}>Forgot</Text>
              <Text style={styles.forgotLink}>Username / Password?</Text>
            </View>

            <View style={styles.createAccountContainer}>
                <TouchableOpacity onPress={handleBlogPress} style={{flexDirection:'row',alignItems:'center',justifyContent:'center', padding:10,}}>
              <Text style={styles.createAccountText}>Create Account</Text>
              <Text style={styles.createAccountLink}>
                <Text style={styles.arrowIcon}><FontAwesome name="sign-in" size={25} color="blueviolet" /></Text>
              </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <Modal
        animationType="none"
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
    marginVertical:10
    // marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgb(105,105,105)',
    borderRadius: 25,
    paddingVertical:10,
    paddingLeft:25
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
  createAccountText: {},
  createAccountLink: {
    color: 'blue',
    marginLeft: 5,
  },
  arrowIcon: {
    // fontSize: 20,
  },
});

export default Login;
