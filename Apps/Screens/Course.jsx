import axios from 'axios';
import React,{useEffect,useState} from 'react';
import {ScrollView,View,Text } from 'react-native';
import PopularCourses from './CourseScreenassest/PopularCourse';
import Footer from '../Component/Footer';
import RegistrationSection from './CourseScreenassest/RegistrationSection';
import OtherFeatureSection from './CourseScreenassest/OtherFeatures';
export default function Course() {
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


  return (
  <ScrollView>
<View><Text>hi</Text>
{/* {CourseData.map((course)=>{
  <View><Text>{course.c_title}</Text></View>
})} */}

{CourseData.map((course) => (
         <View><Text>{course.c_title}</Text></View>
        ))}

</View>
    <PopularCourses/>
    <RegistrationSection/>
    <OtherFeatureSection/>
    <Footer/>
  </ScrollView>
  )
}