import React  from 'react';
import {ScrollView} from 'react-native';
import PopularCourses from './CourseScreenassest/PopularCourse';
import Footer from '../Component/Footer';
import RegistrationSection from './CourseScreenassest/RegistrationSection';
import OtherFeatureSection from './CourseScreenassest/OtherFeatures';
import Course_cards from './CourseScreenassest/courecards';

export default function Course() {
  return (
  <ScrollView>
    <PopularCourses/>
    <Course_cards/>
    <RegistrationSection/>
    <OtherFeatureSection/>
    <Footer/>
  </ScrollView>
  )
}