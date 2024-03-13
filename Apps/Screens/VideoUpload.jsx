import React from 'react';
import { View, Button, Alert } from 'react-native';
import DocumentPicker from '@react-native-community/document-picker';
import axios from 'axios';

const VideoUpload = () => {
  const uploadVideo = async (uri) => {
    try {
      const formData = new FormData();
      formData.append('file', {
        uri: uri,
        type: 'video/mp4',
        name: 'video.mp4',
      });
      formData.append('upload_preset', 'your_upload_preset'); // Replace with your Cloudinary upload preset name
      formData.append('cloud_name', 'your_cloud_name'); // Replace with your Cloudinary cloud name

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/your_cloud_name/video/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('Upload success:', response.data);
      // Handle success, e.g., save the video URL to state or database
    } catch (error) {
      console.error('Upload error:', error);
      // Handle error
    }
  };

  const openDocumentPicker = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.video],
      });
      uploadVideo(res.uri);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User canceled the picker
      } else {
        // Error occurred
        Alert.alert('Error', 'Failed to pick video file');
      }
    }
  };

  return (
    <View>
      <Button title="Choose Video" onPress={openDocumentPicker} />
    </View>
  );
};

export default VideoUpload;
