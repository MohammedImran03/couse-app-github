import React,{useState} from 'react';
import { View, Text, Image, StyleSheet,Modal,ScrollView,TouchableOpacity } from 'react-native';
import { Feather,FontAwesome  } from '@expo/vector-icons';
import Coursedetails from './Coursedetails';
import { StripeProvider } from '@stripe/stripe-react-native';



const Course_cards=({CourseData})=>{

  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5 ? 1 : 0;
  
    const stars = Array(fullStars).fill(1).map((_, index) => (
      <Text key={index} style={styles.starIcon}>
        <FontAwesome name="star" size={20} color='rgb(255,215,0)' />
      </Text>
    ));
  
    if (halfStar === 1) {
      stars.push(
        <Text key="halfStar" style={styles.starIcon}>
          <FontAwesome name="star-half-full" size={20} color='rgb(255,215,0)' />
        </Text>
      );
    }
  
    return <View style={styles.ratingContainer}>{stars}</View>;
  };
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleBlogPress = (blogId) => {
    // console.log(blogId);
    setSelectedBlogId(blogId);
    setModalVisible(true);
  };

  const STRIPE_KEY="pk_test_51OuEqlSBQwTu3Sdv5c1NmGfDMn9IQ9UkykIyC1wTPFOOMa4vxTDb8qxO50Ce9Akxiv8fXYHMMcZSNYzHfvqK4kAY00oXR8dc66";



  return (<>
    <View style={styles.container}>
      <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10,marginTop:5,}}>Most Selling Courses</Text>
      
      
      {CourseData.length ? CourseData.map((productData, index) => (
  <View key={index} style={styles.card}>
    <Image source={{ uri: productData.image_link }} style={styles.image} />
    <View style={styles.cardDetails}>
  
      <View style={{flexDirection:'row', justifyContent:'space-between',marginVertical:3}}>
      <Text style={styles.description}>{productData.instrument}</Text>
      <Text style={styles.description}>By: {productData.t_name}</Text>
      </View>
      <Text style={styles.title}>{productData.c_title}</Text>
      <View style={styles.startratings}>
      <StarRating rating='5' />
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-between',marginVertical:3}}>
     <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}><Text><FontAwesome name="rupee" size={20} color="green" /></Text><Text style={styles.price}>{productData.c_fee}</Text></View>
     <TouchableOpacity onPress={() => handleBlogPress(productData._id)} style={styles.viewMoreBtn}>
  <Text style={{fontSize:16,fontWeight:'bold',color:'white'}}>View Details</Text>
</TouchableOpacity>
      </View>
     
    </View>
  </View>
)): <View style={{flex:1,justifyContent:'center',alignItems:'center', marginVertical:25,}}><Text><Feather name="loader" size={30} color="blueviolet"/> </Text></View>}

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

             {/* <StripeProvider publishableKey={STRIPE_KEY}> */}
             <Coursedetails blogId={selectedBlogId} onClose={() => setModalVisible(false)} CourseData={CourseData} />
      {/* </StripeProvider> */}

          </View>
        )}
        </ScrollView>
      </Modal>


  </>);
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'rgb(220,220,220)',
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  card: {
    // flexDirection: 'row',
    flex:1,
    borderRadius: 10,
    backgroundColor: 'rgb(192,192,192)',
    // margin: 10,
    marginVertical:10,
    marginHorizontal:10,
    overflow: 'hidden',
    borderColor:'black'
    // elevation: 3, // for Android
    // shadowColor: '#000', // for iOS
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
  },
  image: {
    // alignItems:'center',
    width: "100%",
    height: 200,
    // borderTopLeftRadius: 10,
    // borderBottomLeftRadius: 10,
  },
  cardDetails: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',

  },
  description: {
    fontSize: 14,
    color: '#555',
    // marginBottom: 5,
  },
  price: {
    marginLeft:2,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  startratings:{
    marginVertical:3,
  // backgroundColor:'blue',
  flexDirection:'row',
  },
  viewMoreBtn: {
    backgroundColor: '#3498db',
    padding: 8,
    borderRadius: 5,
    // alignItems: 'center',
  },
  viewMoreText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Course_cards;
