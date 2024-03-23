import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Modal, TouchableWithoutFeedback } from 'react-native';
import My_Coursedetails from './My_Coursedetails';
import My_course_Videos from './My_course_Videos';
// import axios from 'axios';
// import { Video } from 'expo-av';

const CourseCard = ({ enrolledCourses }) => {

  // const [CourseData, setCourseData] = useState([]);
  // useEffect(() => {
  //   getcoursedata();
  // }, []); 

  // const getcoursedata = async () => {
  //   try {
  //     let courselist = await axios.get("https://course-app-server.onrender.com/tunetutor/courses");
  //     setCourseData(courselist.data);
  //     // console.log(courselist.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // console.log(CourseData)

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [modalVisible2, setModalVisible2] = useState(false);
  const [selectedProduct2, setSelectedProduct2] = useState(null);

  const handleBlogPress = (productId) => {
    const product = enrolledCourses.find((item) => item._id === productId);
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const handleBlogPress2 = (productId) => {
    const product = enrolledCourses.find((item) => item._id === productId);
    setSelectedProduct2(product);
    setModalVisible2(true);
  };

  function onClose() {
    setModalVisible(false);
  }

  function onClose2() {
    setModalVisible2(false);
  }

  return (
    <View style={styles.container}>
      {enrolledCourses.map((product, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.title}>{product.c_title}</Text>
          <Image source={{ uri: product.image_link }} style={styles.image} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 2 }}>
            <Text style={styles.description}>{product.instrument}</Text>
            <Text style={styles.description}>By: {product.t_name}</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => handleBlogPress(product._id)}>
              <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>View Details</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleBlogPress2(product._id)}>
              <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>View Classes</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
{/* <View><Text>https://res.cloudinary.com/dplltb3db/video/upload/v1711027548/amknn7ie3riizmnjnzkq.mp4</Text>
<Video
            source={{ uri: 'https://res.cloudinary.com/dplltb3db/video/upload/v1711027548/amknn7ie3riizmnjnzkq.mp4' }}
            style={styles.video}
            useNativeControls // This enables native playback controls
          />
</View> */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <ScrollView>
          <View>
            <My_Coursedetails product={selectedProduct} onClose={onClose} />
          </View>
        </ScrollView>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => setModalVisible2(false)}
      >
        <ScrollView>
          <View>
            <My_course_Videos visible={true} product={selectedProduct2} onClose={onClose2} />
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(220, 220, 220)',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 7,
    marginVertical: 5,
    marginHorizontal: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 7,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
  video: {
    width: '100%',
    height: 300,
  },
});

export default CourseCard;
