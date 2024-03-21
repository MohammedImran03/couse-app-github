import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Modal, TouchableWithoutFeedback } from 'react-native';
import My_Coursedetails from './My_Coursedetails';
const CourseCard = ({ enrolledCourses }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleBlogPress = (productId) => {
    const product = enrolledCourses.find((item) => item.id === productId);
    setSelectedProduct(product);
    setModalVisible(true);
  };


function Onclose(){
  setModalVisible(false);
}
  return (
    <View style={styles.container}>
      {enrolledCourses.map((product, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.title}>{product.c_title}</Text>
          <Image source={{ uri: product.image_link }} style={styles.image} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 2 }}>
            <Text style={styles.description}>{product.instrument}</Text>
            <Text style={styles.description}>By: {product.t_name}</Text>
          </View>
          <TouchableOpacity onPress={() => handleBlogPress(product.id)}>
            <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>View Details</Text>
          </TouchableOpacity>
        </View>
      ))}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
      <ScrollView>
<View>
  <My_Coursedetails product={selectedProduct} onClose={Onclose}/>
</View>
      </ScrollView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(220, 220, 220)',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 7,
    marginVertical: 5,
    marginHorizontal: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 7,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
 
});

export default CourseCard;
