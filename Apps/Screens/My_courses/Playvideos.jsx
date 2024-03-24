import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Video } from 'expo-av';

const Playvideos = ({classno, title,videourl, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
console.log(classno);
  const togglePlay = () => {
    if (videoRef.current !== null) {
      if (isPlaying) {
        videoRef.current.pauseAsync();
      } else {
        videoRef.current.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Entypo name="cross" size={24} color="blue" />
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          {/* <Text>{videourl}hhh</Text> */}
        </View>
        <View style={styles.videoContainer}>
          <Video
            ref={videoRef}
            source={{ uri: videourl }}
            style={styles.video}
            useNativeControls
            onPlaybackStatusUpdate={(status) => setIsPlaying(status.isPlaying)}
          />
          <TouchableOpacity onPress={togglePlay} style={styles.playButton}>
            <Entypo style={isPlaying?styles.pause:styles.play} name={isPlaying ? 'controller-paus' : 'controller-play'} size={36} />
          </TouchableOpacity>
        </View>
        <View style={{marginVertical:5,marginLeft:5}}><Text style={{fontSize:15,fontWeight:'bold'}}>Class {classno}: {title}</Text></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  closeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  closeButtonText: {
    fontSize: 16,
    color: 'blue',
    marginLeft: 5,
  },
  videoContainer: {
    flex: 1,
    // backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    // marginVertical: 20,
    width: '100%',
    height: 500,
    position: 'relative',
    // marginHorizontal:10,
    padding:5
  },
  video: {
        width: '100%',
    height: '100%',
    // aspectRatio: 10 / 9
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -18 }, { translateY: -18 }],
  },
  pause:{
    color:'transparent',
  
  },
  play:{
    color:'blue',
  }

});

export default Playvideos;
