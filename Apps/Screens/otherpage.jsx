// OtherPage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OtherPage = () => {
  return (
    <View style={styles.container}>
      <Text>This is the other page!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OtherPage;
