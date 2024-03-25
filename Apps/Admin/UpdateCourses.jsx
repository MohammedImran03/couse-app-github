import React, { useState,useEffect } from 'react';
import { View, Text,Image, TextInput,Alert, Button, StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import axios from 'axios';
import {UpdateCoursedetails} from '../apis/admin';
import {Feather,FontAwesome} from '@expo/vector-icons';

const  UpdateCourses=({blogId, onClose})=>{
  
    useEffect(() => {
        GetCourse();
      }, []);


    const [loader, setLoader] = useState(false);
    const [bigloader,setBigloader]=useState(false);
    const [course, setCourse] = useState(null);
    const [formValues, setFormValues] = useState({
        instrument: '',
        c_title: '',
        t_name: '',
        last_update: '',
        c_fee: '',
        membership: 'Free', 
        image_link: null,
        c_outline: '',
        objective: '',
        eligibility: ''
      });
      const [previewImage,setPreviewImage]=useState(null);
const GetCourse=async()=>{
    try {
        setBigloader(true);
        const response = await axios.get(`https://course-app-server.onrender.com/tunetutor/${blogId}`);
        const courseData = response.data;
        // console.log(courseData.data[0]);
        setCourse(courseData.data[0]);
        setFormValues({
            instrument: courseData.data[0].instrument,
            c_title: courseData.data[0].c_title,
            t_name: courseData.data[0].t_name,
            last_update:  courseData.data[0].last_update,
            c_fee:  courseData.data[0].c_fee,
            membership:  courseData.data[0].membership, 
            image_link:  courseData.data[0].image_link,
            c_outline:  courseData.data[0].c_outline,
            objective:  courseData.data[0].objective,
            eligibility:  courseData.data[0].eligibility,
          });
          setPreviewImage(courseData.data[0].image_link)
          setBigloader(false);
      } catch (error) {
        setBigloader(false);
        console.error('Error fetching course data:', error);
      }
}    
// console.log(course);
      const handleInputChange = (name, value) => {
        setFormValues({ ...formValues, [name]: value });
        // console.log(formValues.name);
      };
    

    
      const handleImageUpload = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
      
        if (!result.cancelled && result.assets.length > 0) {
          const uri = result.assets[0].uri;
          setPreviewImage(uri);
          const imageData = await FileSystem.readAsStringAsync(uri, {
            encoding: FileSystem.EncodingType.Base64,
          });
      
         
          const cloudinaryUrl = "https://api.cloudinary.com/v1_1/dplltb3db/image/upload";
          const formData = new FormData();
          formData.append('file', `data:image/jpeg;base64,${imageData}`);
          formData.append('upload_preset', "Chat_APP");
      
          try {
            const response = await axios.post(cloudinaryUrl, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
            // console.log('Image uploaded to Cloudinary:', response.data.url);
            setFormValues({ ...formValues, image_link: response.data.url });
          } catch (error) {
            console.error('Error uploading image to Cloudinary:', error);
          }
        }
      };
    
    
      const getCurrentDate = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        return  yyyy+'-'+ mm+'-'+dd;
      };
    
      const handleDateButtonClick = () => {
        const currentDate = getCurrentDate();
        handleInputChange('last_update', currentDate);
      };
    
    

    
      const handleSubmit = async() => {
        // console.log('nothing');
        // console.log(formValues.instrument);
        // const keys1 = Object.keys(formValues);
        // const keys2 = Object.keys(course);
        // // if (keys1.length !== keys2.length) {
        // //   return false;
        // // }
        // for (const key of keys2) {
        //   if (formValues[key] != course[key]) {
        //     Alert.alert('Invalid Course Update', 'Course Details Cannot be Updated Since there were no Changes in the documents');
        //     return;
        //   }
        // }
    //   console.log(formValues.instrument);
        if(formValues.instrument==course.instrument && formValues.c_title==course.c_title && formValues.c_fee==course.c_fee &&
           formValues.t_name==course.t_name && formValues.last_update==course.last_update){
            Alert.alert('Invalid Course Update', 'Course Details Cannot be Updated Since there were no Changes in the documents');
          return;
        }
        // console.log(formValues);
        try {
          setLoader(true);
          const result = await UpdateCoursedetails(blogId,formValues);
          console.log(result);
         if(result.success === true){
          setLoader(false);
          GetCourse();
          setPreviewImage(null);
          GetCourse();
          Alert.alert('Course Update Status : ', result.message);
          return;
         }else{
          setLoader(false);
          Alert.alert('Course Update Status : ', result.response.data.message);
          return;
         }
        } catch (error) {
          setLoader(false);
          console.log(error);
          if(error.response){
            Alert.alert('Course Update Failed', error.response.data.message);
            return;
          }
          else{
            Alert.alert('Course Update Failed', `${error.message}, Please Try again later`);
            return;
          }
        }
      };
  
    return (
    <ScrollView>
         <View style={{marginVertical:5, marginHorizontal:2,flex:1,alignItems:'flex-start'}}>
    <TouchableOpacity onPress={onClose} style={{backgroundColor:'rgb(0,191,255)',borderRadius:5,padding:4,  flexDirection:'row',alignItems:'flex-start',paddingHorizontal:5,marginBottom:5}}>
      <Text><FontAwesome name="long-arrow-left" size={25} color="blueviolet" /></Text>
      <Text style={{fontSize:20,fontWeight:'bold', marginLeft:7}}>Back</Text>
    </TouchableOpacity>
  </View>
  {bigloader ? <View style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><Text>Loading Documents<Feather name="loader" size={20} color="black" /></Text></View>:
  <View style={styles.container}>
      <Text style={styles.title}>Add Courses</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Course Info</Text>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Instrument Name</Text>
            <TextInput
                style={styles.input}
                value={formValues.instrument}
                onChangeText={(value) => handleInputChange('instrument', value)}
              />
          </View>
          <View style={styles.col}>
            <Text style={styles.label}>Course Title</Text>
            <TextInput
                style={styles.input}
                value={formValues.c_title}
                onChangeText={(value) => handleInputChange('c_title', value)}
              />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Trainer Name</Text>
            <Picker style={styles.input1}
              selectedValue={formValues.t_name}
              onValueChange={(value) => handleInputChange('t_name', value)}
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
        <TextInput
          style={styles.input}
          placeholder="dd/mm/yyyy"
          value={formValues.last_update}
          onChangeText={(value) => handleInputChange('last_update', value)}
        />
        <Button style={styles.btnstyle} title="Set Update" onPress={handleDateButtonClick} />
      </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Course Fee</Text>
            <TextInput style={styles.input}
            placeholder='₹'
               value={formValues.c_fee}
               onChangeText={(value) => handleInputChange('c_fee', value)}
            />
          </View>
          <View style={styles.col1}>
  <Text style={styles.label1}>membership</Text>
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
            <Button style={styles.btnstyle} title="Upload Course Image" onPress={handleImageUpload} />
          </View>
          <View style={styles.col3}>
              {previewImage && (
                <Image source={{ uri: previewImage }} style={{ width: 150, height: 150 }} />
              )}
            </View>
          <View style={styles.col}>
            <Text style={styles.label}>Course Outline</Text>
            <TextInput 
            value={formValues.c_outline}
            onChangeText={(value) => handleInputChange('c_outline', value)}
            style={styles.input} />
          </View>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>objective</Text>
          <TextInput
           value={formValues.objective}
           onChangeText={(value) => handleInputChange('objective', value)}
          style={[styles.input, styles.textarea]} multiline={true} numberOfLines={4} />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>eligibility</Text>
          <TextInput
           value={formValues.eligibility}
           onChangeText={(value) => handleInputChange('eligibility', value)}
          style={[styles.input, styles.textarea]} multiline={true} numberOfLines={4} />
        </View>
        {/* <Button title="Submit" onPress={handleSubmit}/> */}

        <TouchableOpacity style={styles.createAccountButton} onPress={handleSubmit}>
                     {loader?<Text style={styles.createAccountButtonText}>Loading <Feather name="loader" size={20} color="white" /></Text> : <Text style={styles.createAccountButtonText}>Add New Course</Text>}
                    </TouchableOpacity>

      </View>
    </View>
}
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
  btnstyle: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },

  col3: {
    flex: 1,
    justifyContent:'center',
  marginVertical:10,
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
});

export default UpdateCourses;
