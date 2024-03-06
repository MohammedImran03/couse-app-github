import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Modal } from 'react-native';
import { AntDesign,MaterialIcons,FontAwesome5} from '@expo/vector-icons';
import Banner from './HomeScreenassests/Banner';
import '../css/ping_animation.css';
import Footer from '../Component/Footer';
import { BlogsData } from '../datas';
import { useNavigation } from '@react-navigation/native';
import Blogdetails from './Blogdetails';



const ITEMS_PER_PAGE = 3;

const BlogSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(BlogsData.length / ITEMS_PER_PAGE);

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;

  const visiblePosts = BlogsData.slice(startIdx, endIdx);

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const navigation = useNavigation();
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleBlogPress = (blogId) => {
    setSelectedBlogId(blogId);
    setModalVisible(true);
  };

  return (<>
    <ScrollView style={styles.container}>
      <Banner text={'Blogs'}/>
      <View style={styles.postsList}>
        {visiblePosts.map(post => (
          <View key={post.id} style={styles.singlePost}>
            {/* <View style={styles.metaDetails}> */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5 }}>
  {post.tags.map(tag => (
    <TouchableOpacity key={tag} onPress={() => console.log(`Tag: ${tag}`)}>
      <Text style={{ backgroundColor: '#e0e0e0', padding: 4, marginRight: 5, borderRadius: 5 }}>#{tag}</Text>
    </TouchableOpacity>
  ))}
</View>

              <View style={{flexDirection:'row'}}>
                <View style={{flex:1,alignItems:'flex-start',padding:2, paddingVertical:5}}>
                <View style={{padding:2, flexDirection:'row',alignItems:'center',justifyContent:'center',textAlign:'center'}}><Text style={{marginRight:5}}>{post.user.name}</Text><Text><AntDesign name="user" size={16} color="black" /></Text></View>
                <View style={{padding:2, flexDirection:'row',alignItems:'center',justifyContent:'center',textAlign:'center'}}><Text style={{marginRight:5}}>{post.user.date}</Text><Text><MaterialIcons name="date-range" size={16} color="black" /></Text></View>
                </View>
                <View style={{flex:1,alignItems:'flex-end',padding:2, paddingVertical:5}}>
                <View style={{padding:2, flexDirection:'row',alignItems:'center',justifyContent:'center',textAlign:'center'}}><Text style={{marginRight:5}}>{post.user.views}</Text><Text><MaterialIcons name="preview" size={16} color="black" /></Text></View>
                <View style={{padding:2, flexDirection:'row',alignItems:'center',justifyContent:'center',textAlign:'center'}}><Text style={{marginRight:5}}>{post.user.comments}</Text><Text><FontAwesome5 name="comments" size={16} color="black" /></Text></View>
                </View>
              </View>
            {/* </View> */}
            <View style={styles.postContent}>
              <Image source={post.image1} style={styles.featureImg} />
              <TouchableOpacity onPress={() => console.log(`Clicked on: ${post.link}`)}>
                <Text style={styles.postsTitle}>{post.title}</Text>
              </TouchableOpacity>
              <Text style={styles.excerpt}>{post.mainexpert}</Text>
              <TouchableOpacity onPress={() => handleBlogPress(post.id)} style={styles.viewMoreBtn}>
  <Text>View More</Text>
</TouchableOpacity>

            </View>
          </View>
        ))}
      </View>
      <View style={styles.pagination}>
        <TouchableOpacity onPress={handlePrevPage} disabled={currentPage === 1}>
          <Text style={[styles.paginationBtn, currentPage === 1 && styles.disabledBtn]}><AntDesign name="banckward" size={25} /></Text>
        </TouchableOpacity>
        <Text style={styles.pageText}>({currentPage}/{totalPages})</Text>
        <TouchableOpacity onPress={handleNextPage} disabled={currentPage === totalPages}>
          <Text style={[styles.paginationBtn, currentPage === totalPages && styles.disabledBtn]}><AntDesign name="forward" size={25} /></Text>
        </TouchableOpacity>
      </View>

      <Footer/>
    </ScrollView>
    
    <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          setSelectedBlogId(null);
        }}
      >
        <ScrollView>
        {selectedBlogId && (
          <View>
            <Blogdetails blogId={selectedBlogId} onClose={() => setModalVisible(false)} />
          </View>
        )}
        </ScrollView>
      </Modal>
    
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding: 20,
    backgroundColor: 'rgb(130, 139, 178)',
  },
  postsList: {
    marginTop:10,
    // marginBottom: 20,
  },
  singlePost: {
    marginHorizontal:5,
    marginBottom: 20,
    padding:10,
backgroundColor:'gray',
    borderRadius: 8,
    overflow: 'hidden',
  },
  metaDetails: {
    // flex :1,
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#e0e0e0',
  },
  tags: {
    // paddingHorizontal:5,
    flex:1,
    alignItems:'center'
    // flexDirection: 'row',
    // justifyContent:'center'
  },
  tagsinline:{
    // flexDirection: 'row',
    // justifyContent:'space-between',
  },
  tagLink: {
    // color: '#3498db',
    // marginRight: 5,
  },
  userDetails: {
    // flex:2,
    // justifyContent:'center',
    // backgroundColor:'white',
    // alignItems: 'center',
  },
  userName: {
    // fontWeight: 'bold',
    // marginRight: 10,
  },
  icon: {
    // marginLeft: 5,
  },
  postContent: {
    padding: 15,
  },
  featureImg: {
    marginBottom: 10,
    // borderRadius:10
  },
  imgFluid: {
    width: '100%',
    height: 200,
    // borderRadius: 8,
  },
  postsTitle: {
    // marginBottom: 10,
    fontSize:30
  },
  h3: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  excerpt: {
    marginBottom: 10,
    flex:1,
    // alignItems:'flex-end'
  },
  viewMoreBtn: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  viewMoreText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  metaDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  tags: {
    flexDirection: 'row',
  },
  userDetails: {
    
  },
  userName: {
  },
  postContent: {
 
  },
  featureImg: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius:5
  },
  postsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  // excerpt: {
  //   flex:1,
  //   justifyContent:'space-between',
  //   marginBottom: 10,
  // },
  // viewMoreBtn: {
    
  //   color: '#3498db',
  //   fontWeight: 'bold',
  // },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    // flexDirection:'row',
    textAlign:'center',
    alignItems:'center',
    marginTop: 10,
    // backgroundColor:'blue',
    marginBottom:30,
  },
  paginationBtn: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledBtn: {
    color: 'black',
  },
  pageText: {
    marginHorizontal:7,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default BlogSection;
