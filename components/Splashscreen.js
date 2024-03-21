import React, { useEffect } from 'react';
import { StyleSheet, Image, View } from 'react-native';

import Constants from '../Constants';

const SplashScreen = ({ onHide }) => {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
      <Image source={require('../assets/splashscreen.jpg')}
        style={{ width: Constants.SCREEN_WIDTH, height: Constants.SCREEN_HEIGHT }}></Image>
    </View>
  );
};

export default SplashScreen;