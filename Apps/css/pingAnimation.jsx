import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import styles from './ping_animation'; 

const PingButton = () => {
  const pingAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animatePing = Animated.loop(
      Animated.sequence([
        Animated.timing(pingAnimation, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
          easing: Easing.inOut(Easing.ease),
        }),
        Animated.timing(pingAnimation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
          easing: Easing.inOut(Easing.ease),
        }),
      ]),
    );

    animatePing.start();

    return () => {
      animatePing.stop();
    };
  }, [pingAnimation]);

  return (
    <TouchableOpacity style={styles.pingButton}>
      <Animated.View
        style={[
          styles.pingButtonBefore,
          {
            opacity: pingAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [0.8, 0],
            }),
            transform: [
              {
                scale: pingAnimation.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [1, 2, 1],
                }),
              },
            ],
          },
        ]}
      ></Animated.View>
      <Text>Your Button Text</Text>
    </TouchableOpacity>
  );
};

export default PingButton;
