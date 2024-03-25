import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import axios from 'axios';
import { Feather, Entypo, FontAwesome} from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import * as DocumentPicker from 'expo-document-picker';
import {UpdateCoursedetailsvideos} from '../apis/admin';

export default function Add_Videos() {
  const [Coursedatas, setCoursedatas] = useState([]);
  const [loader, setLoader] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [videoData, setVideoData] = useState([{ title: '', uri: '', videname: '' }]); // Array to store video data

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    try {
      setLoader(true);
      let courselist = await axios.get("https://course-app-server.onrender.com/tunetutor/courses");
      setCoursedatas(courselist.data);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  };

  const handleCourseChange = async (itemValue) => {
    setSelectedCourse(itemValue);
    console.log(itemValue);
  };

  const handleTitleChange = (text, index) => {
    const newData = [...videoData];
    newData[index].title = text;
    setVideoData(newData);
  };
  const [cloudinaryloader,setCloudinaryloader]=useState(false);

  const handleVideoSelection = async (index) => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'video/*',
      });
      console.log(result);
      if (!result.cancelled) {
        setCloudinaryloader(true);
        const videoUri = result.assets[0].uri;
        const selectedTitle = result.assets[0].name; // Get the selected video name
        const formData = new FormData();
        formData.append('file', {
          uri: videoUri,
          type: 'video/mp4',
          name: selectedTitle,
        });
        formData.append('upload_preset', "Chat_APP");

        const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dplltb3db/video/upload';

        const response = await fetch(cloudinaryUrl, {
          method: 'POST',
          body: formData,
        });
        setCloudinaryloader(true);
        console.log(response)
        if (response.ok) {
          setCloudinaryloader(true);
          const responseData = await response.json();
          console.log('Video uploaded to Cloudinary:', responseData.secure_url);
          const newData = [...videoData];
          newData[index].uri = responseData.secure_url;
          newData[index].videname = selectedTitle; // Add the selected video name to videoData array
          setVideoData(newData);
          setCloudinaryloader(false);
        } else {
          setCloudinaryloader(false);
          console.error('Failed to upload video to Cloudinary');
        }
      }
    } catch (error) {
      setCloudinaryloader(false);
      console.log('Error selecting video:', error);
    }
  };

  
  const addAnotherBox = () => {
    setVideoData([...videoData, { title: '', uri: '', videname: '' }]);
  };

  const [submitloader,setSubmitLoader]=useState(false);
  const handleSubmit = async () => {
    try {
      console.log(selectedCourse);
      const videoObjectLinks = {};
      videoData.forEach(curr => {
        if (curr.title.trim() && curr.uri) {
          videoObjectLinks[curr.title.trim()] = curr.uri;
        }
      });
      console.log(JSON.stringify(videoObjectLinks, null, 2));
      
      const formValues = { videoobjectlinks: videoObjectLinks };
      console.log(formValues);
      
      setSubmitLoader(true);
      const result = await UpdateCoursedetailsvideos(selectedCourse, formValues);
      console.log(result);
      
      if (result.success === true) {
        setSubmitLoader(false);
        Alert.alert('Course Update Status : ', result.message);
        setVideoData([{ title: '', uri: '' }]);
        setSelectedCourse('');
      } else {
        setSubmitLoader(false);
        Alert.alert('Course Update Status : ', result.response.data.message);
      }
    } catch (error) {
      setSubmitLoader(false);
      console.log(error);
      if (error.response) {
        Alert.alert('Course Update Failed', error.response.data.message);
      } else {
        Alert.alert('Course Update Failed', `${error.message}, Please Try again later`);
      }
    }
  };
  
  
  

  return (
    <ScrollView>
      {loader ? (
        <View style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Text>Loading Documents<Feather name="loader" size={20} color="black" /></Text>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>Add Course Videos</Text>
          {videoData.length >0 &&  <View style={styles.videoPickerButton}>
                    <TouchableOpacity disabled={videoData.length==0} onPress={addAnotherBox} style={{ borderRadius:5,paddingHorizontal:10,paddingVertical:5,backgroundColor:'blueviolet',fontSize:14,fontWeight:'bold', display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <FontAwesome name="upload" size={20} color="white" />
                      <Text style={{ marginLeft: 5, fontSize: 18, fontWeight: 'bold',color:'white' }}>Upload Another</Text>
                    </TouchableOpacity>
                  </View>}
          <Text style={styles.label}>Select Course </Text>
          <Picker
            selectedValue={selectedCourse}
            onValueChange={handleCourseChange}
            style={{ height: 50, width: '100%', marginTop: 10 }}>
            <Picker.Item label="Select Course" value="" />
            {Coursedatas.map((course) => (
              <Picker.Item key={course._id} label={course.c_title} value={course._id} />
            ))}
          </Picker>
          {selectedCourse !== '' && (
            <View>
              <Text style={styles.label}>Course List</Text>
              {videoData.map((video, index) => (
                <View key={index}>
                  <Text style={styles.label1}>Course Title</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter video title"
                    onChangeText={(text) => handleTitleChange(text, index)}
                    value={video.title}
                  />
                 {cloudinaryloader && !video.videname ? 
                 <View style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',color:'red' }}>
          <Text style={{color:'red'}}>Please wait, untill the selected video is uploaded, it will take some time <Feather name="loader" size={20} color="red"/>
          </Text>
        </View> :<View style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',color:'black' }}>
          <Text>{video.videname}</Text>
        </View>
        }
                  <View style={styles.videoPickerButton}>
                    <TouchableOpacity style={{ borderRadius:5,paddingHorizontal:10,paddingVertical:5,backgroundColor:'blueviolet',fontSize:14,fontWeight:'bold', display:'flex',flexDirection:'row',alignItems:'center'}} onPress={() => handleVideoSelection(index)}>
                      <Entypo name="video-camera" size={20} color="white" />
                      <Text style={{ marginLeft: 5, fontSize: 18, fontWeight: 'bold',color:'white' }}>Select Video</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          )}
          
          {/* <TouchableOpacity onPress={addAnotherBox}><Text>Upload Another</Text></TouchableOpacity> */}
          
          {/* <TouchableOpacity onPress={handleSubmit}><Text>Submit</Text></TouchableOpacity> */}
          <View style={styles.videoPickerButton}>
                    <TouchableOpacity onPress={handleSubmit} style={{ borderRadius:5,paddingHorizontal:10,paddingVertical:5,backgroundColor:'blueviolet',fontSize:14,fontWeight:'bold', display:'flex',flexDirection:'row',alignItems:'center'}}>
                   {submitloader ? <Feather name="loader" size={24} color="white" /> :<><FontAwesome name="upload" size={20} color="white" />
                      <Text style={{ marginLeft: 5, fontSize: 18, fontWeight: 'bold',color:'white' }}>Add Course Vides</Text>
                      </>} 
                    </TouchableOpacity>
                  </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  label1: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  videoPickerButton: {
    display:'flex',
    justifyContent:'center',
    width:'100%',

    // backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 7,
  },
});
