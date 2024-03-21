import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';



const CourseCard = ({ productData}) => {
  return (
    {productData.map((course))
    <View style={styles.container}>
      <Image source={{ uri: productData.image_link }} style={styles.image} />
      <View style={styles.cardDetails}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 3 }}>
          <Text style={styles.description}>{productData.instrument}</Text>
          <Text style={styles.description}>By: {productData.t_name}</Text>
        </View>
        <Text style={styles.title}>{productData.c_title}</Text>
        <View style={styles.starRatings}>
          {/* Add StarRating component */}
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 3 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                {/* <FontAwesome name="rupee" size={20} color="green" /> */}
                </Text>
            <Text style={styles.price}>{productData.c_fee}</Text>
          </View>
          <TouchableOpacity 
        //   onPress={() => handleBlogPress(productData._id)}
           style={styles.viewMoreBtn}>
            <Text style={styles.buttonText}>View Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    }
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  cardDetails: {
    flex: 1,
  },
  starRatings: {
    // Add styling for star ratings
  },
  price: {
    fontSize: 18,
    marginLeft: 5,
  },
  viewMoreBtn: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CourseCard;
