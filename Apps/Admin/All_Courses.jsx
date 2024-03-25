import { View, Text, StyleSheet, ScrollView, TouchableOpacity,Alert, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Entypo,MaterialIcons } from '@expo/vector-icons';
import { Feather,AntDesign } from '@expo/vector-icons';
import UpdateCourses from './UpdateCourses';

export default function All_Courses() {
  const [CourseData, setCourseData] = useState([]); 
  const [loader,setLoader]=useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  
  
  const handleBlogPress = (blogId) => {
    setSelectedBlogId(blogId);
    setModalVisible(true);
  };

  useEffect(() => {
    getdata();
  }, []);
      
  const getdata = async () => {
    try {
      setLoader(true);
      let courselist = await axios.get("https://course-app-server.onrender.com/tunetutor/courses");
      setCourseData(courselist.data);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  };

  const confirmDelete = (id) => {
    Alert.alert(
      'Confirmation Required',
      'Are you sure do you want to delete this course ?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => handleDelete(id),
          style: 'destructive',
        },
      ],
      { cancelable: false }
    );
  };

  const handleDelete = (id) => {
    // console.log(`Deleting course with ID: ${id}`);
    axios.delete(`https://course-app-server.onrender.com/tunetutor/delete-course/${id}`)
      .then(() => {
        getdata();
        Alert.alert('Course Update', 'Course deleted successfully');
        return;
        // console.log('Course deleted successfully');
      })
      .catch((error) => {
        console.log('Error deleting course:', error);
      });
  };

  const OnClose=()=>{
   setModalVisible(false);
   getdata();
  }

  const Card = ({ course, index }) => {
    const backgroundColor = index % 2 === 0 ? 'rgb(220,220,220)' : '#ffffff'; 
    return (
      
      <View style={[styles.card, { backgroundColor }]} key={course._id}>
        <Text style={styles.cardText}>Course ID: {course._id}</Text>
        <Text style={styles.cardText}>Course Title: {course.c_title}</Text>
        <Text style={styles.cardText}>Instrument: {course.instrument}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}
          onPress={() => handleBlogPress(course._id)}
          >
            <Text><Entypo name="edit" size={15} color="white" /></Text>
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1}
          onPress={() => confirmDelete(course._id)}
          >
          <Text><MaterialIcons name="delete-forever" size={20} color="white" /></Text>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity style={{display:'flex',flexDirection:'row',borderRadius:5 ,backgroundColor:'rgb(119,136,153)',marginTop:10,alignItems:'center',padding:10}} onPress={getdata}>
      <AntDesign name="reload1" size={20} color="white" /><Text style={{marginLeft:5,fontSize:18,fontWeight:'bold',color:'white'}}>Reload Courses</Text>
      </TouchableOpacity>
      </View>
        {loader ? <View style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><Text>Loading Documents<Feather name="loader" size={20} color="black" /></Text></View>:
      <View style={styles.container}>
        <Text style={styles.title}>All Courses</Text>
        {CourseData.map((course, index) => (
          <Card course={course} index={index} key={index} />
        ))}
      </View>
}


<Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          setSelectedBlogId(null);
        }}
      >
        <ScrollView>
        {selectedBlogId && (
          <View>
            <UpdateCourses blogId={selectedBlogId} onClose={OnClose} />
          </View>
        )}
        </ScrollView>
      </Modal>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 7,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    backgroundColor: 'green',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  button1: {
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    backgroundColor: 'red',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,

  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft:5
  },
});
