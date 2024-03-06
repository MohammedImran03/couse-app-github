import {ScrollView } from 'react-native';
import React from 'react'
import PopularCourses from './CourseScreenassest/PopularCourse';
import Footer from '../Component/Footer';
import RegistrationSection from './CourseScreenassest/RegistrationSection';
import OtherFeatureSection from './CourseScreenassest/OtherFeatures';
export default function Course() {
  return (
  <ScrollView>
    <PopularCourses/>
    <RegistrationSection/>
    <OtherFeatureSection/>
    <Footer/>
  </ScrollView>
  )
}