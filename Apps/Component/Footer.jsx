import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,TextInput } from 'react-native';
import { AntDesign,EvilIcons,Entypo } from '@expo/vector-icons';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerContent}>
        <View style={styles.row}>
          <View style={styles.footerColumn}>
            <Text style={styles.footerHeading}>Top Products</Text>
            <View style={styles.footerList}>
              <Text style={styles.footerListItem}>Managed Website</Text>
              <Text style={styles.footerListItem}>Manage Reputation</Text>
              <Text style={styles.footerListItem}>Power Tools</Text>
              <Text style={styles.footerListItem}>Marketing Service</Text>
            </View>
          </View>
          <View style={styles.footerColumn}>
            <Text style={styles.footerHeading}>Quick Links</Text>
            <View style={styles.footerList}>
              <Text style={styles.footerListItem}>Jobs</Text>
              <Text style={styles.footerListItem}>Brand Assets</Text>
              <Text style={styles.footerListItem}>Investor Relations</Text>
              <Text style={styles.footerListItem}>Terms of Service</Text>
            </View>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.footerColumn}>
            <Text style={styles.footerHeading}>Features</Text>
            <View style={styles.footerList}>
              <Text style={styles.footerListItem}>Jobs</Text>
              <Text style={styles.footerListItem}>Brand Assets</Text>
              <Text style={styles.footerListItem}>Investor Relations</Text>
              <Text style={styles.footerListItem}>Terms of Service</Text>
            </View>
          </View>

          <View style={styles.footerColumn}>
            <Text style={styles.footerHeading}>Resources</Text>
            <View style={styles.footerList}>
              <Text style={styles.footerListItem}>Guides</Text>
              <Text style={styles.footerListItem}>Research</Text>
              <Text style={styles.footerListItem}>Experts</Text>
              <Text style={styles.footerListItem}>Agencies</Text>
            </View>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.footerColumn2}>
            <Text style={styles.footerHeading}>Newsletter</Text>
            <Text style={styles.footerText}>You can trust us. we only send promo offers.</Text>
            
<View style={styles.centercontainer}>
<View style={styles.relativeContainer}>
        {/* Your other content goes here */}

        <View style={styles.absoluteContainer}>
          <TextInput
            style={styles.inputBox}
            placeholder="Enter email address"
            keyboardType="email-address"
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Subscribe</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
          </View>
        </View>
      </View>

      <View style={styles.footerBottom}>
        <Text style={styles.footerText}>
          Copyright © {new Date().getFullYear()} All rights reserved | This template is made with{' '}
          <Text style={styles.heartIcon}><AntDesign name="hearto" size={14} color="white" /></Text> by{' '}
          <Text style={styles.authorLink}>Aakash Ranga</Text>
        </Text>
        </View>
        <View style={styles.footerSocial}>
          <TouchableOpacity style={styles.socialIcon}>
          <EvilIcons name="sc-facebook" size={40} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
          <Entypo name="twitter" size={40} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
          <Entypo name="dribbble" size={40} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
          <Entypo name="behance" size={40} color="white" />
          </TouchableOpacity>
        </View>
   
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#333',
    paddingVertical: 10,
  },
  footerContent: {
    flexDirection: 'column',
  },
  row: {
    marginLeft:5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  footerColumn: {
    flexDirection:'column',
    justifyContent:'center',
   marginLeft:10,
    width: '48%', 
  },
  footerColumn2: {
    flexDirection:'column',
    justifyContent:'center',
   marginLeft:10,
    // width: '48%',
  },
  input:{
   backgroundColor:'gray',
   color:'white',
   paddingLeft:5,
//    width:'100%',
   margin:'0 5px',
  },
  button: {
    backgroundColor: 'blueviolet',
    padding: 10,
    borderRadius: 5,
    height: 40,
    // alignSelf:'flex-end'
  },
  centercontainer:{
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  relativeContainer: {
       marginTop:5,
    position: 'relative',
  },
  absoluteContainer: {
    position: 'absolute',
    // bottom: 20,
    flexDirection: 'row',
    // alignItems: 'center',
  },
  inputBox: {
 
    height: 40,
    width: '75%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginRight: 5,
  },
//   button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//   },
  buttonText: {

    color: 'white',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  textboxbutton:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerHeading: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  footerList: {},
  footerListItem: {
    color: 'gray',
    marginBottom: 5,
  },
  footerText: {
    color: 'gray',
    marginBottom: 10,
  },
  footerBottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginLeft:10,
    marginRight:5,
    marginBottom:10,
  },
  heartIcon: {
    color: 'red',
  },
  authorLink: {
    color: 'blueviolet',

    textDecorationLine: 'underline',
  },
  footerSocial: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding:10,
  },
  socialIcon: {
    margin:8,
    backgroundColor: 'gray',
    padding: 5,
    borderRadius: 5,
    marginLeft:10,
    marginRight: 10,
  },
});

export default Footer;

