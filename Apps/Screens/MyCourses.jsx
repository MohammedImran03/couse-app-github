import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { View, Text,TouchableOpacity,ScrollView } from 'react-native';
import { getusersAllNotes } from '../apis/course.api';
import axios from 'axios';
import CourseCard from './Enrolled_course_cards';
import { Ionicons } from '@expo/vector-icons';

const MyCourses = ({ userData }) => {
  const [loaders, setLoaders] = useState(false);
  const [reloadFlag, setReloadFlag] = useState(false); // Add reload flag state

  const [CourseData, setCourseData] = useState([]);
  useEffect(() => {
    getcoursedata();
  }, [reloadFlag]); // Trigger reload when reload flag changes

  const getcoursedata = async () => {
    try {
      let courselist = await axios.get("https://course-app-server.onrender.com/tunetutor/courses");
      setCourseData(courselist.data);
      // console.log(courselist.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [usersCourseData, setUsersCourseData] = useState([]);
  useEffect(() => {
    getuserscoursedata();
  }, [reloadFlag]); // Trigger reload when reload flag changes

  const getuserscoursedata = async () => {
    try {
      let courselist = await getusersAllNotes(userData._id);
      setUsersCourseData(courselist.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const [enrolledCourses, setEnrolledCourses] = useState([]);
  useEffect(() => {
    setLoaders(true);
    const userEnrolledCourses = CourseData.filter(course => usersCourseData.some(userCourse => userCourse.product_id == course._id));
    setEnrolledCourses(userEnrolledCourses);
    setLoaders(false);
  }, [CourseData, usersCourseData, reloadFlag]); // Include reload flag in dependency array

  const handleReload = () => {
    setReloadFlag(!reloadFlag); // Toggle reload flag
  };

  return (
    <ScrollView>
    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginVertical: 5 }}>
      <TouchableOpacity onPress={handleReload} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#007bff', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5 }}>
        <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold', marginRight: 10 }}>Refresh Page</Text>
        <Ionicons name="reload" size={25} color="white" style={{ fontWeight: 'bold' }} />
      </TouchableOpacity>
    </View>
    <View>
      {loaders ? (
        <Text>Loading...</Text>
      ) : enrolledCourses.length ? (
        <CourseCard enrolledCourses={enrolledCourses} />
      ) : (
        <Text>You have not enrolled in any courses.</Text>
      )}
    </View>
  </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  userData: state.userData,
});

export default connect(mapStateToProps)(MyCourses);
