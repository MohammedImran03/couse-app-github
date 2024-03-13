import React,{useEffect,useState} from 'react';
import {ScrollView} from 'react-native';
import PopularCourses from './CourseScreenassest/PopularCourse';
import Footer from '../Component/Footer';
import RegistrationSection from './CourseScreenassest/RegistrationSection';
import OtherFeatureSection from './CourseScreenassest/OtherFeatures';
import Course_cards from './CourseScreenassest/courecards';
import axios from 'axios';



export default function Course() {
  const [CourseData, setCourseData] = useState([]); 
  useEffect(() => {
      getdata();
    }, []);

      
    const getdata = async () => {
        try {
          let courselist = await axios.get("https://course-app-server.onrender.com/tunetutor/courses");
          setCourseData(courselist.data);
          console.log(courselist.data);
        } catch (error) {
          console.log(error);
        }
      };

  return (
  <ScrollView>
    <PopularCourses/>
    <Course_cards CourseData={CourseData}/>
    <RegistrationSection/>
    <OtherFeatureSection/>
    <Footer/>
  </ScrollView>
  )
}