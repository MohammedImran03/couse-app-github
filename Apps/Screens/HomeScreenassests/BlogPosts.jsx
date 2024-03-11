import React,{useState} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet,Modal,ScrollView} from 'react-native';
import { Feather } from '@expo/vector-icons';
import Blogdetails from '../Blogdetails';

const BlogPostArea = () => {
  const posts = [
    {
      id: 1,
      image: require('../../App_assests/Flute.jpg'),
      date: '29th, Oct, 2018',
      likes: '121 likes',
      comments: '05 comments',
      title: 'Flute Carnival',
      description:
        'Embark on a melodic journey with the flute, an enchanting wind instrument that breathes life into soulful tunes',
      link: 'blog-single.html',
    },
    {
      id: 2,
      image: require('../../App_assests/carnival.jpg'),
      date: '29th, Oct, 2018',
      likes: '121 likes',
      comments: '05 comments',
      title: 'Musical Carnival',
      description:
        'Immerse yourself in a vibrant symphony of sounds and rhythms at the Music Carnival, where diverse genres and performers come together.',
      link: 'blog-single1.html',
    },
    {
      id: 2,
      image: require('../../App_assests/concert.jpg'),
      date: '29th, Oct, 2018',
      likes: '121 likes',
      comments: '05 comments',
      title: 'Concert',
      description:
        'Experience the magic of live music as concerts transform into memories, uniting audiences in the heartbeat of shared melodies',
      link: 'blog-single2.html',
    },
  ];

  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleBlogPress = (blogId) => {
    setSelectedBlogId(blogId);
    setModalVisible(true);
  };

  return (<>
    <View style={styles.container}>
      <View style={styles.sectionTitle}>
        <Text style={styles.titleText}>
          Upcoming Events Can Avail By Everyone.
        </Text>
        <Text style={styles.descriptionText}>
          There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s
          exciting to think about setting up your own viewing station.
        </Text>
      </View>
      {posts.map((post, index) => (
        // <TouchableOpacity key={index} onPress={() => console.log('Navigate to ' + post.link)}>
          <View key={index} style={styles.postContainer}>
            <Image source={post.image} style={styles.postImage} />
         
            <View style={styles.postDetailsContainer}>
              <View style={styles.postMetaData}>
                <Text style={styles.postMetaText}>{post.date}</Text>
                <Text style={styles.postMetaText}>{post.likes}</Text>
                <Text style={styles.postMetaText}>{post.comments}</Text>
              </View>
              <View style={styles.postContent}>
                <Text style={styles.postTitle}>{post.title}</Text>
                <Text style={styles.postDescription}>{post.description}</Text>
                <TouchableOpacity
                  style={styles.viewDetailsButton}
                  onPress={() => handleBlogPress(post.id)} >
                  <View style={styles.viewDetailsButtonText}><Text style={styles.testtext}>View Details</Text><View><Feather name="arrow-right-circle" size={24} color="white" /></View></View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        // </TouchableOpacity>
      ))}
    </View>
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
  </>);
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop:20,
  },
  sectionTitle: {
    marginBottom: 20,
  },
  titleText: {
    fontSize:25,
    fontWeight:'bold',
    // flex:1,
    // justifyContent:'center',
    // alignItems:'center',
  },
  descriptionText: {
    color:'gray',
    marginTop: 10,
    fontSize: 16,
    textAlign:'justify'
  },
  postContainer: {
    // position:'relative',
    marginBottom: 20,
    backgroundColor: 'gray',
    borderRadius: 8,
    overflow: 'hidden',
    padding:5,
    width: '100%',
    // height: '100%',
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  postDetailsContainer: {
    padding: 15,
  },
  postMetaData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postMetaText: {
    fontSize: 14,
    color: 'white',
  },
  postContent: {
    marginTop: 10,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  postDescription: {
    marginTop: 5,
    fontSize: 16,
    color: 'white',
    textAlign:'justify'
  },
  viewDetailsButton: {
    marginTop: 10,
    backgroundColor: 'rgb(130, 139, 178)',
    maxWidth:'auto',
    padding:5,
    // position:'absolute',
    // top:'50%',
    // left:'50%',
    // flex:1,
    // justifyContent:'center',
    // alignItems:'center',
    // padding: 10,
    borderRadius: 5,
  },
  viewDetailsButtonText: {
    color: '#fff',
    textAlign: 'center',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    // padding:10,
  },
  testtext:{
   marginRight:5,
   color:'white'
  },
});

export default BlogPostArea;
