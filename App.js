import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import Physics from 'physics';
import entities from "./entities";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={Images.Background}
        style={styles.backgroundImage}
        resizeMode="stretch"
      />
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
  backgroundImage: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: Constants.SCREEN_WIDTH,
    height: Constants.SCREEN_HEIGHT,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
