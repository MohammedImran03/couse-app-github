import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Add_Course = () => {
  const [formValues, setFormValues] = useState({
    instrumentName: '',
    courseTitle: '',
    trainerName: '',
    lastUpdate: '',
    courseFee: '',
    membership: 'Free', // Default value for radio button
    courseImage: '',
    courseOutline: '',
    objective: '',
    eligibility: ''
  });

  const handleInputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = () => {
    console.log(formValues);
  };


  return (<ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Add Courses</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Course Info</Text>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Instrument Name</Text>
            <TextInput
                style={styles.input}
                value={formValues.instrumentName}
                onChangeText={(value) => handleInputChange('instrumentName', value)}
              />
          </View>
          <View style={styles.col}>
            <Text style={styles.label}>Course Title</Text>
            <TextInput
                style={styles.input}
                value={formValues.courseTitle}
                onChangeText={(value) => handleInputChange('courseTitle', value)}
              />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Trainer Name</Text>
            <Picker style={styles.input1}
              selectedValue={formValues.trainerName}
              onValueChange={(value) => handleInputChange('trainerName', value)}
            >
              <Picker.Item label="Select Trainer" value="" enabled={false} />
              <Picker.Item label="Harish" value="Harish" />
              <Picker.Item label="Sujith" value="Sujith" />
              <Picker.Item label="Barath" value="Barath" />
              <Picker.Item label="Sunil" value="Sunil" />
            </Picker>
          </View>
          <View style={styles.col}>
            <Text style={styles.label}>Last Update</Text>
            <TextInput style={styles.input} placeholder="dd/mm/yyyy" 
              value={formValues.lastUpdate}
              onChangeText={(value) => handleInputChange('lastUpdate', value)}
           
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Course Fee</Text>
            <TextInput style={styles.input}
               value={formValues.courseFee}
               onChangeText={(value) => handleInputChange('courseFee', value)}
            />
          </View>
          <View style={styles.col1}>
  <Text style={styles.label1}>Membership</Text>
  <View style={styles.radioContainer}>
    <TouchableOpacity style={styles.radioButton} onPress={() => handleInputChange('membership', 'Free')}>
      <View style={[styles.radioCircle, { backgroundColor: formValues.membership === 'Free' ? 'rgb(119,136,153)' : 'transparent' }]}></View>
      <Text style={styles.radioLabel}>Free</Text>
    </TouchableOpacity>
  </View>
  <View style={styles.radioContainer}>
    <TouchableOpacity style={styles.radioButton} onPress={() => handleInputChange('membership', 'Paid')}>
      <View style={[styles.radioCircle, { backgroundColor: formValues.membership === 'Paid' ? 'rgb(119,136,153)' : 'transparent' }]}></View>
      <Text style={styles.radioLabel}>Paid</Text>
    </TouchableOpacity>
  </View>
</View>


        </View>
        <Text style={styles.cardTitle}>Course Details</Text>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Course Image</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.col}>
            <Text style={styles.label}>Course Outline</Text>
            <TextInput style={styles.input} />
          </View>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Objective</Text>
          <TextInput style={[styles.input, styles.textarea]} multiline={true} numberOfLines={4} />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Eligibility</Text>
          <TextInput style={[styles.input, styles.textarea]} multiline={true} numberOfLines={4} />
        </View>
        <Button title="Submit" />
      </View>
    </View>
    </ScrollView>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   paddingVertical:5,
    paddingHorizontal:7,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
   paddingHorizontal:5,
   paddingVertical:7,
   marginBottom:50,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'column',
    marginBottom: 15,
    justifyContent:'flex-start'
  },
  col: {
    flex: 1,
   marginHorizontal:3
  },
  col1: {
    flex: 1,
    flexDirection:'row',
   marginHorizontal:3,
   marginTop:20,
   alignItems:'center'
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  label1: {
    fontSize: 16,
    marginBottom: 5,
    marginRight:10,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgb(119,136,153)',
    marginRight: 10,
  },
  
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  input1: {
    borderWidth: 1,
    borderColor: 'black',
    // backgroundColor:'gray',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  radioLabel: {
    marginRight: 10,
    fontSize: 16,
  },
  formGroup: {
    marginBottom: 15,
  },
  textarea: {
    height: 100,
  },
});

export default Add_Course;
