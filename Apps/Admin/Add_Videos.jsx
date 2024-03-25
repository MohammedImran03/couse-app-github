import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Feather } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import * as DocumentPicker from 'expo-document-picker';

export default function Add_Videos() {
  const [Coursedatas, setCoursedatas] = useState([]); 
  const [loader,setLoader]=useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [videoTitle, setVideoTitle] = useState('');
  const [videoObjectLinks, setVideoObjectLinks] = useState({});

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

  const handleCourseChange = async(itemValue) => {
    setSelectedCourse(itemValue);
    console.log("Selected Course ID:", itemValue);
  };

  const handleVideoSelection = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'video/*',
      });
      console.log(result.assets[0].uri);
      if (result.type === 'success') {

        setVideoObjectLinks(prevState => ({
          ...prevState,
          [videoTitle]: result.uri,
        }));
        setVideoTitle('');
      }
    } catch (error) {
      console.log('Error selecting video:', error);
    }
  };

  const handleTitleChange = (text) => {
    setVideoTitle(text);
  };

  const handleSubmit = () => {
    console.log('Video Object Links:', videoObjectLinks);
  };

  return (
    <ScrollView>
      {loader ? (
        <View style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Text>Loading Documents<Feather name="loader" size={20} color="black" /></Text>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>Add Course Videos</Text>
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
              {/* Render course list view here */}
              <Text style={styles.label}>Video Picker</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter video title"
                onChangeText={handleTitleChange}
                value={videoTitle}
              />
              <TouchableOpacity onPress={handleVideoSelection} style={styles.videoPickerButton}>
                <Text>Select Video</Text>
              </TouchableOpacity>
              {/* Render video picker option here */}
            </View>
          )}
          <TouchableOpacity onPress={handleSubmit}><Text>Submit</Text></TouchableOpacity>
        </View>
      )}
    </ScrollView>
  )
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
  label:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  videoPickerButton: {
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
