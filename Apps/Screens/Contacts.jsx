import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { AntDesign,Feather } from '@expo/vector-icons';
import Footer from '../Component/Footer';

const Contacts=()=>{
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
              />
    
              <TextInput
                style={styles.input}
                placeholder="Enter email address"
                keyboardType="email-address"
              />
    
              <TextInput
                style={styles.input}
                placeholder="Enter subject"
              />
    
              <TextInput
                style={[styles.input, styles.messageInput]}
                placeholder="Enter Message"
                multiline
              />
    
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Send Message</Text>
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