import Matter, { Sleeping } from "matter-js";
import Constants from "./Constants";

const Physics = (entities, { touches, time, dispatch }) => {
  // Physics logic
  let engine = entities.physics.engine;
  let world = engine.world;

  Matter.Engine.update(engine, time.delta);

  touches
    .filter((t) => t.type === 'press')
    .forEach((t) => {
      Matter.Body.setVelocity(entities.Fish.body, {
        x: 0, //move along x-axis with given velocity
        y: -8, //move along y-axis with given velocity
      });
    });

  Matter.Events.on(engine, 'collisionStart', (event) => {
    Matter.Body.setPosition(entities.Fish.body, {
      x: Constants.SCREEN_WIDTH - 320,
      y: Constants.SCREEN_HEIGHT / 2 - 50
    });
    dispatch({ type: 'game_over' })
  })
  return entities;
};

export default Physics;


