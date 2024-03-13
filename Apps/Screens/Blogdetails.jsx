import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { BlogsData } from '../datas'; // Import the blog data
import { FontAwesome,AntDesign,FontAwesome5,EvilIcons,Entypo,MaterialIcons ,Fontisto } from '@expo/vector-icons';

const BlogDetails = ({ blogId, onClose }) => {
  const blogPost = BlogsData.find((blog) => blog.id === blogId);

  if (!blogPost) {
  
    return <Text>Blog not found</Text>;
  }

return (
  <ScrollView style={styles.container}>
    <View style={{marginVertical:5, marginHorizontal:2,flex:1,alignItems:'flex-start'}}>
    <TouchableOpacity onPress={onClose} style={{backgroundColor:'rgb(0,191,255)',borderRadius:5,padding:4,  flexDirection:'row',alignItems:'flex-start',paddingHorizontal:5,marginBottom:5}}>
      <Text><FontAwesome name="long-arrow-left" size={25} color="blueviolet" /></Text>
      <Text style={{fontSize:20,fontWeight:'bold', marginLeft:5}}>Blogs</Text>
    </TouchableOpacity>
  </View>
  <View >
    <Image source={blogPost.image2} style={styles.featureImage} />
    </View>
    <View style={styles.metaDetailsContainer}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5 }}>
  {blogPost.tags.map(tag => (
    <TouchableOpacity key={tag} onPress={() => console.log(`Tag: ${tag}`)}>
      <Text style={{ backgroundColor: 'rgb(240,248,255)', padding: 4, marginRight: 5, borderRadius: 5 }}>#{tag}</Text>
    </TouchableOpacity>
  ))}
</View>
<View style={{flexDirection:'row'}}>
                <View style={{flex:1,alignItems:'flex-start', paddingVertical:5}}>
                <View style={{paddingVertical:2, flexDirection:'row',alignItems:'center',justifyContent:'center',textAlign:'center'}}><Text style={{marginRight:5}}>{blogPost.user.name}</Text><Text><AntDesign name="user" size={16} color="black" /></Text></View>
                <View style={{paddingVertical:2, flexDirection:'row',alignItems:'center',justifyContent:'center',textAlign:'center'}}><Text style={{marginRight:5}}>{blogPost.user.date}</Text><Text><MaterialIcons name="date-range" size={16} color="black" /></Text></View>
                </View>
                <View style={{flex:1,alignItems:'flex-end', paddingVertical:5}}>
                <View style={{paddingVertical:2, flexDirection:'row',alignItems:'center',justifyContent:'center',textAlign:'center'}}><Text style={{marginRight:5}}>{blogPost.user.views}</Text><Text><MaterialIcons name="preview" size={16} color="black" /></Text></View>
                <View style={{paddingVertical:2, flexDirection:'row',alignItems:'center',justifyContent:'center',textAlign:'center'}}><Text style={{marginRight:5}}>{blogPost.user.comments}</Text><Text><FontAwesome5 name="comments" size={16} color="black" /></Text></View>
                </View>
              </View>
              <View style={styles.footerSocial}>
          <TouchableOpacity style={styles.socialIcon2}>
          <Fontisto name="facebook" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
          <Entypo name="twitter" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
          <Entypo name="dribbble" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
          <Entypo name="behance" size={20} color="white" />
          </TouchableOpacity>
        </View>
    
    </View>

    <View style={styles.mainContent}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.excerpt}>{blogPost.expert1}</Text>
      <Text style={styles.excerpt}>{blogPost.expert2}</Text>
      <Text style={styles.excerpt}>{blogPost.expert3}</Text>
    </View>

    <View style={styles.quotes}>
      <Text style={styles.quotesText}>
       {blogPost.expert4}
      </Text>
    </View>

    <View style={styles.imageGallery}>
      <View style={styles.imageColumn}>
        <Image source={blogPost.image1} style={styles.galleryImage} />
      </View>
      <View>
        <Text style={styles.excerpt}>{blogPost.expert2}</Text>
      </View>
      <View style={styles.imageColumn}>
        <Image source={blogPost.image3} style={styles.galleryImage} />
      </View>
      <View>
        <Text style={styles.excerpt}>{blogPost.expert2}</Text>
      </View>
    </View>
    <View style={{marginBottom:25,flex:1,alignItems:'center'}}>
    <TouchableOpacity onPress={onClose} style={{backgroundColor:'rgb(0,191,255)',borderRadius:5,padding:4, flexDirection:'row',paddingHorizontal:5,marginBottom:5}}>
      <Text><MaterialIcons name="arrow-back-ios-new" size={25} color="blueviolet" /></Text>
      <Text style={{fontSize:20,fontWeight:'bold', marginLeft:5}}>Go Back</Text>
    </TouchableOpacity>
  </View>
  </ScrollView>
);


};

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: 'rgb(211,211,211)',
  padding: 10,
},
featureImage: {
  width: '100%',
  height: 220,
},
metaDetailsContainer: {
  flexDirection: 'column',
  marginTop: 5,
},
tags: {
  marginRight: 20,
},
tag: {
  fontSize: 16,
  color: 'blueviolet',
  marginRight: 5,
},
userDetails: {
  flex: 1,
},
userName: {
  fontSize: 16,
  color: '#333',
  marginBottom: 10,
},
date: {
  fontSize: 16,
  color: '#333',
  marginBottom: 10,
},
views: {
  fontSize: 16,
  color: '#333',
  marginBottom: 10,
},
comments: {
  fontSize: 16,
  color: '#333',
  marginBottom: 10,
},
socialLinks: {
  flexDirection: 'row',
  justifyContent: 'space-between',
},
icon: {
  fontSize: 20,
},
linkText: {
  color: 'blueviolet',
  textDecorationLine: 'underline',
},
mainContent: {
  marginTop: 15,
},
title: {
  fontSize: 25,
  fontWeight: 'bold',
  marginBottom: 10,
},
excerpt: {
  fontSize: 16,
  marginBottom: 10,
  textAlign:'justify',
},
quotes: {
  backgroundColor: '#f5f5f5',
  padding: 10,
  marginTop: 5,
  marginBottom: 20,
  paddingHorizontal:10,
},
quotesText: {
  fontSize: 16,
  fontStyle: 'italic',
  textAlign:'justify',
},
imageGallery: {
  flexDirection: 'column',
  justifyContent: 'center',
  marginBottom: 15,
},
imageColumn: {
  flex: 1,
  alignItems:'center'
},
galleryImage: {
  width: '100%',
  height: 200,
  marginBottom: 10,
},
imageDescription: {
  fontSize: 16,
  marginBottom: 20,
},
goBackButton: {
  backgroundColor: 'blueviolet',
  padding: 10,
  borderRadius: 5,
  marginTop: 20,
  alignSelf: 'flex-start',
},
buttonText: {
  color: '#fff',
  fontWeight: 'bold',
},
footerSocial: {
  flexDirection: 'row',
alignItems:'flex-start',
marginTop:5,
  // padding:10,
},
socialIcon2: {

  // margin:8,
  backgroundColor: 'gray',
  padding: 5,
  paddingHorizontal:10,
  borderRadius: 5,
  marginRight:5,
// marginHorizontal:10
},
socialIcon: {

  // margin:8,
  backgroundColor: 'gray',
  padding: 5,
  borderRadius: 5,
marginHorizontal:5
},
});
export default BlogDetails;
