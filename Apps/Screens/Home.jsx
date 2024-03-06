import React from 'react';
import {ScrollView } from 'react-native';
import Footer from '../Component/Footer';
import Features from './HomeScreenassests/Features';
import Banner from './HomeScreenassests/Banner';
import VideoSection from './HomeScreenassests/Videoarea';
import BlogPostArea from './HomeScreenassests/BlogPosts';
const Home = () => {
  
  return (
    <ScrollView>
    <Banner text={`Take the first step to learn with us.`}/>
    <Features/>
<VideoSection/>
<BlogPostArea/>
      <Footer/>
    </ScrollView>
  );
};


export default Home;
