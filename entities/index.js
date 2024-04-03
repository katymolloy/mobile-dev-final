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
      { x: Constants.SCREEN_WIDTH - 320, y: Constants.SCREEN_HEIGHT /2 - 50 },
      { height: 50, width: 120 }
    ),
   
    Enemy1: Enemy(world, 'red', {x: screenWidth + 15, y: randomY(screenHeight)}, { height: 68, width: 120 }, Images.Enemy1), 
    Enemy2: Enemy(world, 'red', {x: screenWidth + 15, y: randomY(screenHeight)}, { height: 68, width: 120 },Images.Enemy2 ), 
    Enemy3: Enemy(world, 'red', {x: screenWidth + 15, y: randomY(screenHeight)}, { height: 68, width: 120 }, Images.Enemy3),

    
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



// import Matter from "matter-js";
// import { Dimensions } from "react-native";
// import Monster from './../components/monster';
// import Box from "../components/Box";
// import Edges from './../components/edges';
// import Constants from "../Constants";

// export default (gameWorld) => {
//   let engine = Matter.Engine.create({ enableSleeping: false });
//   let world = engine.world;
//   engine.gravity.y = 0.4;

//   let screenWidth = Dimensions.get("window").width;
//   let screenHeight = Dimensions.get("window").height;

//   return {
//     physics: { engine, world },
//     Square: Box(
//       world,
//       "blue",
//       //{ x: 100, y: 100 },
//       { x: 55, y: Constants.SCREEN_HEIGHT - 115 },
//       { height: 90, width: 60 }
//     ),
//     Candle: Box(
//       world,
//       "blue",
//       { x: Constants.SCREEN_WIDTH - 40, y: Constants.SCREEN_HEIGHT - 115 },
//       { height: 90, width: 60 }
//     ),

//     MonsterA: Monster(
//       world,
//       "blue",
//       { x: 150, y: 300 },
//       { height: 78, width: 50 },
//       { label: "Monster", restitution: 0, frictionAir: 0 },
//       { animType: "appear" }
//     ),
    
//     TopEdge: Edges(
//       world,
//       "red",
//       { x: screenWidth / 2, y: 0 },
//       { height: 30, width: screenWidth }
//     ),
//     LeftEdge: Edges(
//       world,
//       "red",
//       { x: 0, y: screenHeight / 2 },
//       { height: screenHeight, width: 30 }
//     ),
//     RightEdge: Edges(
//       world,
//       "red",
//       { x: screenWidth, y: screenHeight / 2 },
//       { height: screenHeight, width: 30 }
//     ),
//     BottomEdge: Edges(
//       world,
//       "red",
//       { x: screenWidth / 2, y: screenHeight },
//       { height: 30, width: screenWidth }
//     ),
    
//   };
// };

