import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const RegistrationSection = () => {
  return (
    <View style={styles.registrationContainer}>
      <View style={styles.row}>
        <View style={styles.column}>
          <View style={styles.sectionTitle}>
            <Text style={styles.titleText}>
              Watch Our Trainers 
              in Live Action
            </Text>
            <Text style={styles.subtitleText}>
              as they bring music education to life! Immerse yourself in dynamic, interactive sessions designed to elevate your musical journey. Join our live sessions to experience the magic of real-time learning, where passion meets expertise.
            </Text>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.courseFormSection}>
            <Text style={styles.formTitle}>Courses for Free</Text>
            <Text style={styles.formSubtitle}>It is high time for learning</Text>
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Name"
                onFocus={() => {}}
                onBlur={() => {}}
              />
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                onFocus={() => {}}
                onBlur={() => {}}
              />
              <TextInput
                style={styles.input}
                placeholder="Email Address"
                onFocus={() => {}}
                onBlur={() => {}}
              />
              <View style={{flex:1, alignItems:'center'}}>
              <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Submit</Text>
              </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  registrationContainer: {
    backgroundColor: 'blueviolet', // Set background color accordingly
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical:10,
  },
  row: {
    flexDirection: 'column',
    // alignItems: 'flex-end',
  },
  column: {
    flex: 1,
    // marginLeft: 10,
  },
  sectionTitle: {
    alignItems: 'flex-start',
  },
  titleText: {
    marginVertical:5,
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  subtitleText: {
    flex:1,
    textAlign:'justify',
    color: 'white',
    marginTop: 10,
    marginBottom:20,
  },
  courseFormSection: {
    borderRadius: 5,
    elevation: 1, 
    padding:10,
    paddingHorizontal:20,
    paddingVertical:20,
    // marginLeft: 'auto',
    // alignItems: 'flex-end',
  },
  formTitle: {
    color: 'white',
    textAlign:"center",
    fontSize: 23,
    fontWeight: 'bold',
  },
  formSubtitle: {
    color: 'white',
    textAlign:"center",
    // color: '#fff',
    marginVertical: 5,
  },
  form: {
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
    color: '#000', // Set text color accordingly
  },
  submitButton: {
    marginVertical:15,
    flex:1,
    alignItems:'center',
  backgroundColor:'rgb(0,191,255)',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  submitButtonText: {
    fontSize:15,
    color: 'white', // Set button text color accordingly
    fontWeight: 'bold',
  },
});

export default RegistrationSection;
