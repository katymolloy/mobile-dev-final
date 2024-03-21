import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import SplashScreen from './components/Splashscreen';
import Constants from './Constants';
import { GameEngine } from 'react-native-game-engine';
import { useEffect } from 'react';
// import Physics from './physics';
// import entities from "./entities";

export default function App() {
  const [splashScreenVisible, setSplashScreenVisible] = useState(true);
  const [gameEngine, setGameEngine] = useState(null);

  const [running, setRunning] = useState(false);
  useEffect(() => {
    setRunning(true);
  }, []);

  const hideSplashScreen = () => {
    setSplashScreenVisible(false);
  };



  return (
    <View style={styles.container}>
      {splashScreenVisible && <SplashScreen onHide={hideSplashScreen} />}

      <Image source={require('./assets/background.png')}
        style={styles.backgroundImage}></Image>
      <GameEngine
        ref={(ref) => {
          setGameEngine(ref);
        }}
        // systems={[Physics]}
        // entities={entities()}
        style={styles.gameContainer}
      >


        <StatusBar style="auto" hidden={true} />
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
    width: Constants.SCREEN_WIDTH,
    height: Constants.SCREEN_HEIGHT,
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