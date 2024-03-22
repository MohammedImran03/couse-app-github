import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';

export default function Playvideos({videourl,onClose}) {
  return (
    <View>
          <TouchableOpacity  onPress={onClose} style={{}}>
            <Entypo name="cross" size={24} color="blue" />
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
      <Text>{videourl}</Text>
      <WebView
                style={styles.webview}
                source={{ html: `<video controls autoplay style="width: 100%; height: 100%"><source src="${videourl}" type="video/mp4"></video>` }}
              />

    </View>
  )
}

const styles = StyleSheet.create({
    video: {
        width: '100%',
        height: '100%',
      },
      webview: {
        width: '100%',
        height: '100%',
      },
    });
