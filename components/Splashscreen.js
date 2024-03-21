import React, { useEffect } from 'react';
import { Animated, StyleSheet, Image } from 'react-native';

import { screenHeight, screenWidth } from '../Consts';

const SplashScreen = ({ onHide }) => {
  const opacity = new Animated.Value(1);


  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 5000,
        useNativeDriver: true,
      }).start(() => {
        onHide && onHide(); // Callback to notify that the splash screen has been hidden
      });
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <Animated.View style={{ opacity, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('../assets/splashscreen.png')}
      style={{width: screenWidth, height: screenHeight}}></Image>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    textShadowColor:"red",
  },
});

export default SplashScreen;