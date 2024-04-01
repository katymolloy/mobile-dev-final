import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import SplashScreen from './components/Splashscreen';
import Constants from './Constants';
import { GameEngine } from 'react-native-game-engine';
import { useEffect } from 'react';
import Physics from './physics';
import entities from "./entities";

export default function App() {
  const [splashScreenVisible, setSplashScreenVisible] = useState(true);
  const [running, setRunning] = useState(false);
  const [gameEngine, setGameEngine] = useState(null);

  useEffect(() => {
    // Hide splash screen after 2 seconds
    setTimeout(() => {
      setSplashScreenVisible(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>

      <Image
        source={require('./assets/background.png')}
        style={styles.backgroundImage}
      />

      <GameEngine
        ref={(ref) => {
          setGameEngine(ref);
        }}
        systems={[Physics]}
        entities={entities()}
        running={running}

        onEvent={(e) => {
          switch (e.type) {
            case 'game_over':
              setRunning(false);
              gameEngine.stop();
              break;
          }
        }}

        style={styles.gameContainer}>
        <StatusBar style="auto" hidden={true} />
      </GameEngine>
      {splashScreenVisible && !running && <SplashScreen />}

      {!running ? (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              paddingHorizontal: 80,
              paddingVertical: 20,
              borderRadius: 50,
            }}
            onPress={() => {
              setRunning(true);
              entities().resetFishPosition(); // Reset fish position
            }}>
            <Text
              style={{ fontWeight: 'bold', color: '#012e43', fontSize: 20 }}>
              START GAME
            </Text>
          </TouchableOpacity>
        </View>
      ) : null
      }
    </View >
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