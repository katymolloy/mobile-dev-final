import Matter, { Sleeping } from "matter-js";
const Physics = (entities, { touches, time }) => {
  // Physics logic
  let engine = entities.physics.engine;
  let world = engine.world;

  Matter.Engine.update(engine, time.delta);
  return entities;
};

export default Physics;


