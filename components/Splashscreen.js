import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Animated } from 'react-native';

import Constants from '../Constants';

const SplashScreen = ({ onHide }) => {

  const [opacity] = useState(new Animated.Value(1));
  const [zIndex, setZIndex] = useState(10); // Initial zIndex value

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 1000, // Duration of the opacity animation (1000ms = 1 second)
        useNativeDriver: true,
      }).start(() => {
        // Callback executed after the opacity animation is completed
        setZIndex(-10); // Set zIndex to -10 after opacity becomes 0
        onHide && onHide();
      });
    }, 3000); // Wait 3 seconds before starting the animation

    // Clear timeout to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <Animated.View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', zIndex, opacity }}>
      <Image
        source={require('../assets/splashscreen.jpg')}
        style={{ width: Constants.SCREEN_WIDTH, height: Constants.SCREEN_HEIGHT }}
      />
    </Animated.View>
  );
};

export default SplashScreen;