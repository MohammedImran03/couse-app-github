import React, { useEffect, useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet,ScrollView} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Playvideos from './Playvideos';

const My_course_Videos = ({visible, product, onClose }) => {


    const [videoUrl, setVideoUrl] = useState('');
    const [VideoKeys,setVideokeys]=useState([]);
    useEffect(()=>{
        if(product.videoobjectlinks){
            const VideoKeys=Object.keys(product.videoobjectlinks);
            setVideokeys(VideoKeys);
        }
    },[]);


    const [modalVisible, setModalVisible] = useState(false);

    const handlevideourl = (key) => {
        const url=product.videoobjectlinks[key];
        setModalVisible(true);
        setVideoUrl(url);
      };

      function handlemodalclose(){
        setModalVisible(false);
        setVideoUrl('');
      }
// if(!product.videoobjectlinks){
//     return <Text>Classess of this course will be launched soon</Text>;
// }
  return (<>
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContent}>
          <Text style={{fontWeight:'bold',fontSize:14,marginTop:10}}>{product.c_title}</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
           <Entypo name="cross" size={24} color="blue" /><Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          <View style={{ marginTop:5,display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
<Text style={{fontSize:14,fontWeight:'bold'}}>S.No</Text>
<Text style={{fontSize:14,fontWeight:'bold'}}>Class</Text>
          </View>
          <View style={{}}>
            {VideoKeys&& VideoKeys.length ? VideoKeys.map((item,index)=>
            <View key={index} style={{marginVertical:5, display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start',}}>
                <Text>{index+1}</Text>
            <TouchableOpacity onPress={()=>handlevideourl(item)} ><Text style={{marginLeft:10,color:'blue',textDecorationLine:'underline'}}>{item}</Text></TouchableOpacity>
            </View>
            ):<Text>Classess of this course will be launched soon</Text>}
          </View>
        </View>
      </View>
    </Modal>

    <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
            setModalVisible(false);
            setVideoUrl('');
        }}
      >
        <ScrollView>
        {videoUrl && (
          <View>
            <Playvideos videourl={videoUrl} onClose={handlemodalclose} />
          </View>
        )}
        </ScrollView>
      </Modal>

 </> );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    position:'relative',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    height: '90%',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
  },
  closeButtonText: {
    fontSize: 16,
    color: 'blue',
   
  },
});

export default My_course_Videos;
