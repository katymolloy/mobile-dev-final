import React, { useEffect } from 'react';
import { Animated, StyleSheet, Image } from 'react-native';

import Constants from '../Constants';

const SplashScreen = ({ onHide }) => {
  const opacity = new Animated.Value(1);

  /*
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
    */

  return (
    <Animated.View style={{ opacity, flex: 1, alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
      <Image source={require('../assets/splashscreen.jpg')}
        style={{ width: Constants.SCREEN_WIDTH, height: Constants.SCREEN_HEIGHT }}></Image>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    textShadowColor: "red",
  },
});

export default SplashScreen;