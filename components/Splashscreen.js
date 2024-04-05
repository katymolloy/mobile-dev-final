import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Animated } from 'react-native';

import Constants from '../Constants';

const SplashScreen = ({ onHide }) => {

  const [opacity] = useState(new Animated.Value(1));
  const [zIndex, setZIndex] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        setZIndex(-10);
        onHide && onHide();
      });
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Animated.View style={{ position: 'absolute', top: 0, alignItems: 'center', justifyContent: 'center', zIndex, opacity }}>
      <Image
        source={require('../assets/splashscreen.jpg')}
        style={{ width: Constants.SCREEN_WIDTH, height: Constants.SCREEN_HEIGHT }}
      />
    </Animated.View>
  );
};

export default SplashScreen;