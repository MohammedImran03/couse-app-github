import axios from 'axios';
import React,{useEffect,useState} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
// import image from '../template/courseimage/g.jpg';

const Course_cards = () => {
    const [CourseData, setCourseData] = useState([]);
    useEffect(() => {
      getdata();
    }, []);
  
  const getdata = async () => {
      try {
        let courselist = await axios.get("https://course-app-server.onrender.com/tunetutor/courses");
        // message.success("Students data fetched from Database");
        setCourseData(courselist.data);
        console.log(courselist.data);
      } catch (error) {
        console.log(error);
      }
    };
    // {CourseData.map((course) => (
    //     <View><Text>{course.c_title}</Text></View>
    //    ))}

  const productData = {
    title: 'Product Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: '$19.99',
    imageUrl: './flute 1.jpg',
  };

  function convertImage(source) {
    return require(source);
  }
  
// const path='../template/courseimage/g.jpg';
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={convertImage(productData.imageUrl)}  style={styles.image} />
        <View style={styles.cardDetails}>
          <Text style={styles.title}>{productData.title}</Text>
          <Text style={styles.description}>{productData.description}</Text>
          <Text style={styles.price}>Price: {productData.price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#fff',
    margin: 10,
    overflow: 'hidden',
    elevation: 3, // for Android
    shadowColor: '#000', // for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  cardDetails: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default Course_cards;
