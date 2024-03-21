import Matter, { Sleeping } from "matter-js";
const Physics = (entities, { touches, time }) => {
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

  return entities;
};

export default Physics;


