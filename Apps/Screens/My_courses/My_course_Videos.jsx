import React, { useEffect, useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet,ScrollView} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Playvideos from './Playvideos';

const My_course_Videos = ({visible, product, onClose }) => {


    const [videoUrl, setVideoUrl] = useState('');
    const [title,setTitle]=useState('');
    const [classno,setClassno]=useState(0);

    const [VideoKeys,setVideokeys]=useState([]);
    useEffect(()=>{
        if(product.videoobjectlinks){
            const VideoKeys=Object.keys(product.videoobjectlinks);
            setVideokeys(VideoKeys);
        }
    },[]);


    const [modalVisible, setModalVisible] = useState(false);

    const handlevideourl = (key,index) => {
        const url=product.videoobjectlinks[key];
        setModalVisible(true);
        setVideoUrl(url);
        setTitle(key);
        setClassno(index+1);
      };

      function handlemodalclose(){
        setModalVisible(false);
        setVideoUrl('');
        setTitle('');
        setClassno(0);
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
          <Text style={{fontWeight:'bold',fontSize:14,marginTop:35,marginBottom:5}}>{product.c_title}</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
           <Entypo name="cross" size={24} color="blue" /><Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          <View style={{ marginTop:5,display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
<Text style={{fontSize:14,fontWeight:'bold',marginBottom:5,}}>Class</Text>
{/* <Text style={{fontSize:14,fontWeight:'bold'}}>Class</Text> */}
          </View>
          <View style={{}}>
            {VideoKeys&& VideoKeys.length ? VideoKeys.map((item,index)=>
            <View key={index} style={{marginVertical:5, display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start'}}>
                {/* <Text>{index+1}</Text> */}
            <TouchableOpacity ><Text style={{}}>{item}</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>handlevideourl(item,index)} ><Text style={{color:'blueviolet',textDecorationLine:'underline'}}>View</Text></TouchableOpacity> 
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
            setTitle('');
            setClassno(0);
        }}
      >
        <ScrollView>
        {videoUrl && (
          <View>
            <Playvideos classno={classno} title={title} videourl={videoUrl} onClose={handlemodalclose} />
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
    padding: 5,
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
