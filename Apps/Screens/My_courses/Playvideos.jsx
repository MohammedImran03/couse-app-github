import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Video } from 'expo-av';

const Playvideos = ({ videourl, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

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
          <Text>{videourl}hhh</Text>
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
            <Entypo name={isPlaying ? 'controller-paus' : 'controller-play'} size={36} color="blue" />
          </TouchableOpacity>
        </View>
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
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    width: '100%',
    height: 300,
    position: 'relative',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -18 }, { translateY: -18 }],
  },
});

export default Playvideos;
