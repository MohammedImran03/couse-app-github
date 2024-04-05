import React,{useEffect,useState} from 'react';
import {ScrollView} from 'react-native';
import PopularCourses from './CourseScreenassest/PopularCourse';
import Footer from '../Component/Footer';
import RegistrationSection from './CourseScreenassest/RegistrationSection';
import OtherFeatureSection from './CourseScreenassest/OtherFeatures';
import Course_cards from './CourseScreenassest/courecards';
import axios from 'axios';
import { StripeProvider } from '@stripe/stripe-react-native';


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

      const STRIPE_KEY="pk_test_51OuEqlSBQwTu3Sdv5c1NmGfDMn9IQ9UkykIyC1wTPFOOMa4vxTDb8qxO50Ce9Akxiv8fXYHMMcZSNYzHfvqK4kAY00oXR8dc66";

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