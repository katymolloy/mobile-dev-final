import { Dimensions } from "react-native";
import Box from "../components/Box";
import Enemy from "../components/Enemy";
import Boundary from '../components/Boundary';
import Constants, { randomY } from "../Constants";

import Images from "../Images";
import Matter from "matter-js";

export default (gameWorld) => {
  let engine = Matter.Engine.create();
  let world = engine.world;
  engine.gravity.y = 0.9;

  let screenWidth = Dimensions.get("window").width;
  let screenHeight = Dimensions.get("window").height;

  return {
    physics: { engine, world },

    Fish: Box(
      world,
      "blue",
      { x: Constants.SCREEN_WIDTH - 320, y: Constants.SCREEN_HEIGHT / 2 - 50 },
      { height: 50, width: 120 }
    ),

    Enemy1: Enemy(world, 'red', { x: screenWidth + 15, y: randomY(screenHeight) }, { radius: 50 }, Images.Enemy1),
    Enemy2: Enemy(world, 'red', { x: screenWidth + 15, y: randomY(screenHeight) }, { radius: 50 }, Images.Enemy2),
    Enemy3: Enemy(world, 'red', { x: screenWidth + 15, y: randomY(screenHeight) }, { radius: 50 }, Images.Enemy3),

    TopEdge: Boundary(
      world,
      "#012e43",
      { x: screenWidth / 2, y: 0 },
      { height: 20, width: screenWidth }
    ),
    LeftEdge: Boundary(
      world,
      "#012e43",
      { x: 0, y: screenHeight / 2 },
      { height: screenHeight, width: 20 }
    ),
    RightEdge: Boundary(
      world,
      "#012e43",
      { x: screenWidth, y: screenHeight / 2 },
      { height: screenHeight, width: 20 }
    ),
    BottomEdge: Boundary(
      world,
      "#012e43",
      { x: screenWidth / 2, y: screenHeight },
      { height: 20, width: screenWidth }
    ),
  };
};
