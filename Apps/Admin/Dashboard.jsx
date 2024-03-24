import React from 'react';
import { View, Text, StyleSheet,ScrollView  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Dashboard = () => {
  return (
    <ScrollView >
    <View style={styles.mainPanel}>
      <View style={styles.contentWrapper}>
        <View style={styles.pageHeader}>
          <Text style={styles.headerText}>Hi, welcome back!</Text>
          <Text style={styles.subHeaderText}>Web Analytics Dashboard.</Text>
        </View>

        <View style={styles.row}>
        <View style={styles.cardBody}>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <Text style={styles.colorCardHead}>Sales</Text>
            <Text><MaterialCommunityIcons name="sale" size={20} color="white" /></Text>
            </View>
                      
                      <Text style={styles.textWhite}>₹8,753.<Text style={styles.h5}>00</Text></Text>
                    <Text style={{marginTop:3,marginBottom:5,color:'white',fontWeight:'bold'}}>18.33% Since last month</Text>
                    </View>
                    <View style={styles.cardBody2}>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <Text style={styles.colorCardHead}>Margin</Text>
            <Text><MaterialCommunityIcons name="margin" size={20} color="white" /></Text>
            </View>
                      
                      <Text style={styles.textWhite}>₹5,300.<Text style={styles.h5}>00</Text></Text>
                    <Text style={{marginTop:3,marginBottom:5,color:'white',fontWeight:'bold'}}>13.21% Since last month</Text>
                    </View>
        </View>

<View style={{ marginVertical:15,width:'100%', marginHorizontal:5,backgroundColor:'rgb(220,220,220)',display:'flex', flexDirection:'column'}}>
  <View style={{marginLeft:5, marginVertical:10, display:'flex', flexDirection:'column',justifyContent:'flex-start'}}>
<Text style={{fontSize:18,fontWeight:'bold',}}>Bussiness Survey</Text>
<Text style={{fontSize:14,fontWeight:'bold',marginTop:5,}}>Show Overall enroll Courses <Text style={{textDecorationLine:'underline',paddingLeft:10}}>See Details</Text></Text>
  </View>

<View style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
  <View style={{
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 6,
      margin: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    }}>
      <Text style={{
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
      }}>Total Earnings</Text>
      <Text style={{
        fontSize: 18,
        color: 'green',
        fontWeight:'bold',
        marginBottom: 5,
      }}>₹5,300</Text>
      <Text style={{
        fontSize: 12,
        color: 'red',
        fontWeight:'bold',
      }}>-310 avg.sales</Text>
    </View>
    <View style={{
      backgroundColor: '#fff',
      borderRadius: 10,
      padding:6,
      margin: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    }}>
      <Text style={{
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
      }}>Products Sold</Text>
      <Text style={{
        fontSize: 18,
        color: 'green',
        fontWeight:'bold',
        marginBottom: 5,
      }}>₹9,100</Text>
      <Text style={{
        fontSize: 12,
        color: 'red',
        fontWeight:'bold',
      }}>-310 avg.sales</Text>
    </View> 
    <View style={{
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 6,
      margin: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    }}>
      <Text style={{
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
      }}>Today Orders</Text>
      <Text style={{
        fontSize: 18,
        color: 'green',
        fontWeight:'bold',
        marginBottom: 5,
      }}>₹4,354</Text>
      <Text style={{
        fontSize: 12,
        color: 'red',
        fontWeight:'bold',
      }}>-310 avg.sales</Text>
    </View>
    </View>

<View style={{ marginLeft:5,display:'flex',flexDirection:'column',marginVertical:10, justifyContent:'flex-start'}}>
  <Text style={{fontSize:16,fontWeight:'bold'}}>Overall Revenue List Courses Enrolled</Text>
<View style={{ marginTop:5,display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
  <Text style={{fontSize:14,fontWeight:'bold',marginRight:8,}}>Sales Revenue</Text>
  <Text style={{fontSize:18,fontWeight:'bold'}}>₹2,45,000 <Text style={{fontSize:14,fontWeight:'bold',color:'#ff007f'}}>Last 8 months</Text></Text>
</View>
</View>

</View>

      </View>
    </View>
    </ScrollView>);
};

const styles = StyleSheet.create({
  mainPanel: {
    backgroundColor: '#f4f4f4',
  },
  contentWrapper: {
    paddingHorizontal: 5,
    paddingBottom: 20,
      flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },
  pageHeader: {
    marginTop: 10,
    marginBottom: 10,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',

  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontSize: 16,
    color: '#666',
  },
  row: {
    marginHorizontal:2,
    // padding:5,
    display:'flex',
    flexDirection: 'row',
    // flexWrap: 'wrap',
   marginVertical:5,
   justifyContent:'space-between'
  },
  cardBody: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor:'#ff9933',
    marginHorizontal:2,
  },
  cardBody2: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor:'#ff33ff',
    marginHorizontal:2,
  },
  colorCardHead: {
    fontSize: 18,
    fontWeight:'bold',
    marginTop:5,
    color: '#fff',
  },
  textWhite: {
    fontSize: 24,
    color: '#fff',
fontWeight:'bold',  },
  colXL3: {
    width: '25%',
  },
  stretchCard: {
    flex: 1,
  },
  gridMargin: {
    marginHorizontal: 5,
  },
  colXL12: {
    width: '100%',
  },
  colMD6: {
    width: '50%',
  },
  pbSm3: {
    paddingBottom: 15,
  },
  card: {
    borderRadius: 5,
    overflow: 'hidden',
  },
  bgWarning: {
    backgroundColor: '#ffc107',
  },
 
  px3: {
    paddingHorizontal: 20,
  },
  py4: {
    paddingVertical: 25,
  },
  dFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  justifyContentBetween: {
    justifyContent: 'space-between',
  },
  alignItemsStart: {
    alignItems: 'flex-start',
  },
  colorCard: {
    flex: 1,
  },
 

  h5: {
    fontSize: 16,
  },
  cardIconIndicator: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Dashboard;
