import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import SplashScreen from './components/Splashscreen';
import { screenHeight, screenWidth } from './Consts';

export default function App() {
  const [splashScreenVisible, setSplashScreenVisible] = useState(true);

  const hideSplashScreen = () => {
    setSplashScreenVisible(false);
  };



  return (
    <View style={styles.container}>
      {splashScreenVisible && <SplashScreen onHide={hideSplashScreen} />
      }

      <Image source={require('./assets/background.png')}
        style={{ width: screenWidth, height: screenHeight }}></Image>


    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
