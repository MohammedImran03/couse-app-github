import React from 'react';
import {ScrollView } from 'react-native';
import Features from './HomeScreenassests/Features';
import Footer from '../Component/Footer';
import Banner from './AboutUsassests/AboutscnBanner';
import AboutSection from './AboutUsassests/AboutSection';
import VideoSection from './HomeScreenassests/Videoarea';
import OtherFeatureSection from './CourseScreenassest/OtherFeatures';
import TestimonialsSection from './AboutUsassests/TestinomialSection';
export default function About() {
  return (
    <ScrollView>
        <Banner text={`Modern astronomy's greatest leap the monumental advancement in telescope construction.`}/>
    <Features/>
    <AboutSection/>
    <VideoSection/>
    <OtherFeatureSection/>
    <TestimonialsSection/>
      <Footer/>
    </ScrollView>
  )
}