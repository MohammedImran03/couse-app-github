import React, { useRef, useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome,Foundation } from '@expo/vector-icons';
const courseData = [
  {
    id: 1,
    image: require('../../App_assests/p1.jpg'),
    name: 'Learn Angular JS Course for Legendary Persons',
    category: 'programming language',
    price: '$150',
    rating: 3.5,
    reviews: 25,
  },
  {
    id: 2,
    image: require('../../App_assests/p2.jpg'),
    name: 'Python programming language',
    category: 'Python programming language',
    price: '$150',
    rating: 4.5,
    reviews: 25,
  },
  {
    id: 3,
    image: require('../../App_assests/p3.jpg'),
    name: 'Learn Angular JS Course for Legendary Persons',
    category: 'programming language',
    price: '$150',
    rating: 5,
    reviews: 25,
  },
  {
    id: 4,
    image: require('../../App_assests/p4.jpg'),
    name: 'Learn Angular JS Course for Legendary Persons',
    category: 'programming language',
    price: '$150',
    rating: 5,
    reviews: 25,
  },
 
];

const ITEMS_PER_PAGE = 1;
const AUTOMATIC_SCROLL_INTERVAL = 5000; 
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5 ? 1 : 0;

  const stars = Array(fullStars).fill(1).map((_, index) => (
    <Text key={index} style={styles.starIcon}>
      <FontAwesome name="star" size={20} color='rgb(255,215,0)' />
    </Text>
  ));

  if (halfStar === 1) {
    stars.push(
      <Text key="halfStar" style={styles.starIcon}>
        <FontAwesome name="star-half-full" size={20} color='rgb(255,215,0)' />
      </Text>
    );
  }

  return <View style={styles.ratingContainer}>{stars}</View>;
};

const CoursesSection = () => {
  const scrollViewRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(courseData.length / ITEMS_PER_PAGE);

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;

  const visibleCourses = courseData.slice(startIdx, endIdx);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    // Automatically move to the next page after a certain interval
    const intervalId = setInterval(() => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      } else {
        setCurrentPage(1); // Go back to the first page
      }
    }, AUTOMATIC_SCROLL_INTERVAL);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [currentPage, totalPages]);

  return (
    <View style={styles.container}>
      <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false}>
        <View style={{marginHorizontal:10,marginVertical:10}}><Text style={{fontSize:25,fontWeight:'bold'}}>Popular Courses Available Right Now</Text></View>
        {visibleCourses.map((course) => (
          <TouchableOpacity key={course.id} style={styles.courseContainer}>
            <Image source={course.image} style={styles.courseImage} />
            <View style={styles.details}>
              <View style={styles.infoContainer}>
              <Text style={styles.courseCategory}>{course.category}</Text>
              <Text style={styles.coursePrice}>{course.price}</Text>            
              </View>
              <View>  
                <Text style={styles.courseName}>{course.name}</Text>
                </View>
              <View style={styles.bottomContainer}>
                <StarRating rating={course.rating} />
                <Text style={styles.courseReviews}>{course.reviews} Reviews</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        <TouchableOpacity style={styles.prevNextButton} onPress={handlePrevPage}>
          <Text><Foundation name="previous" size={24} color="rgb(138,43,226)" /></Text>
        </TouchableOpacity>
        <Text>{`${currentPage} of ${totalPages}`}</Text>
        <TouchableOpacity style={styles.prevNextButton} onPress={handleNextPage}>
          <Text><Foundation name="next" size={24} color="rgb(138,43,226)" /></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  courseContainer: {
    margin: 10,
    alignItems: 'center',
    backgroundColor:'gray',
    borderRadius: 4,
    // paddingVertical:5,
    height:350,
  },
  courseImage: {
    width: "100%",
    height: 200,
    // borderRadius: 8,
    borderTopLeftRadius:4,
    borderTopRightRadius:4
  },
  details: {
    marginTop: 10,
    alignItems: 'center',
  },
  infoContainer: {
    marginHorizontal:10,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  courseName: {
    marginTop:5,
    fontSize:20,
    fontWeight: 'bold',
   marginHorizontal:5,
   color:'blueviolet'

  },
  courseCategory: {
    marginLeft:5,
    fontSize:16,
    color: 'black',
    flex:1,
    alignItems:'flex-start'
  },
  bottomContainer: {
    marginTop: 5,
    flexDirection:'row',
    alignItems:'center',
    marginBottom:10,
    justifyContent:'center',
    textAlign:'center',
    // backgroundColor:'black',
  },
  coursePrice: {
    marginRight:5,
    fontSize:16,
    color:'black',
    fontWeight:'bold',
    // marginTop: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  starIcon: {
    color: 'orange',
    fontSize: 18,
  },
  courseReviews: {
    marginHorizontal:10,
    // backgroundColor:'blue',
    // flex :1,
    // justifyContent:'center',
    // textAlign:'center',
    // alignItems:'center',
    color: 'white',
    paddingVertical:2
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  prevNextButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    marginHorizontal:10,
  },
});

export default CoursesSection;
