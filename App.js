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
  const [score, setScore] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSplashScreenVisible(false);
    }, 4000);
  }, []);

  // Function to toggle pause state
  const togglePause = () => {
    setPaused(!paused);
  };

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
        running={running && !paused}

        onEvent={(e) => {
          switch (e.type) {
            case 'game_over':
              setRunning(false);
              gameEngine.stop();
              break;

            case 'score':
              setScore(score + 1);
              break;
          }
        }}

        style={styles.gameContainer}>
        <StatusBar style="auto" hidden={true} />
      </GameEngine>

      {running ? (
        <Text style={styles.scoreStyle}>Score: {score}</Text>) : null}


      {running ? (
        <TouchableOpacity
          style={styles.pauseButton}
          onPress={togglePause}>
          <Text style={{ fontWeight: 'bold', color: '#012e43', fontSize: 25 }}>
            {paused ? 'Resume' : 'Pause'}
          </Text>
        </TouchableOpacity>) : null}


      {splashScreenVisible && !running && <SplashScreen />}

      {!running ? (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.finalScore}>Your Score : {score}</Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              paddingHorizontal: 80,
              paddingVertical: 20,
              borderRadius: 50,
            }}
            onPress={() => {
              setRunning(true);
              setScore(0);
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
    zIndex: -1,
  },

  gameContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  scoreStyle: {
    position: 'absolute',
    top: 20,
    left: 40,
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#012e43',
  },

  pauseButton: {
    position: 'absolute',
    textAlign: 'right',
    top: 20,
    left: Constants.SCREEN_WIDTH - 150,
    borderRadius: 5,
  },
  finalScore: {
    position: 'absolute',
    top: 500,
    color: '#012e43',
    fontSize: 23,
    fontWeight: 'bold',
  },
});
