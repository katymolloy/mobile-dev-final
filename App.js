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
      {splashScreenVisible && <SplashScreen onHide={hideSplashScreen} />}

      <Image source={require('./assets/background.png')}
        style={styles.backgroundImage}></Image>

      <GameEngine
        systems={[Physics]}
        entities={entities()}
        running={running}
        style={styles.gameContainer}
      >
        {<StatusBar style="auto" hidden={true} />}
      </GameEngine>

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

  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: screenWidth,
    height: screenHeight,
    zIndex: -1, // Ensure the image is behind other content
  },

  gameContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }

});