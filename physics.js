import Matter, { Sleeping } from "matter-js";
import Constants, { randomY } from "./Constants";

const Physics = (entities, { touches, time, dispatch }) => {
  let engine = entities.physics.engine;
  let world = engine.world;

  let randomSpeed = () => {
    let xSpeed = (Math.floor(Math.random() * (3 - 1) + 2))
    let xSpeedReturn = -xSpeed
    return xSpeedReturn
  }

  let enemy1speed = randomSpeed();
  let enemy2speed = randomSpeed();
  let enemy3speed = randomSpeed();

  Matter.Engine.update(engine, time.delta);
  Matter.Body.translate(entities.Enemy1.body, { x: enemy1speed, y: 0 });
  Matter.Body.translate(entities.Enemy2.body, { x: enemy2speed, y: 0 });
  Matter.Body.translate(entities.Enemy3.body, { x: enemy3speed, y: 0 });

  const getRandomXOffset = () => {
    return Math.random() * 100;
  };

  if (entities.Enemy1.body.position.x < -35) {
    dispatch({ type: "score" });
    const randomXOffset = getRandomXOffset();
    Matter.Body.setPosition(entities.Enemy1.body, {
      x: Constants.WINDOW_WIDTH + 35 + randomXOffset,
      y: randomY(Constants.SCREEN_HEIGHT),
    });
    enemy1speed--;
  }

  if (entities.Enemy2.body.position.x < -35) {
    dispatch({ type: "score" });
    const randomXOffset = getRandomXOffset();
    Matter.Body.setPosition(entities.Enemy2.body, {
      x: Constants.WINDOW_WIDTH + 35 + randomXOffset,
      y: randomY(Constants.SCREEN_HEIGHT),
    });
    enemy2speed--;
  }
  if (entities.Enemy3.body.position.x < -35) {
    dispatch({ type: "score" });
    const randomXOffset = getRandomXOffset();
    Matter.Body.setPosition(entities.Enemy3.body, {
      x: Constants.WINDOW_WIDTH + 35 + randomXOffset,
      y: randomY(Constants.SCREEN_HEIGHT),
    });
    enemy3speed--;
  }

  touches
    .filter((t) => t.type === 'press')
    .forEach((t) => {
      Matter.Body.setVelocity(entities.Fish.body, {
        x: 0,
        y: -8,
      });
    });

  Matter.Events.on(engine, 'collisionStart', (event) => {
    var pairs = event.pairs;
    var objALabel = pairs[0].bodyA.label;
    var objBLabel = pairs[0].bodyB.label;

    if (objALabel === 'Fish' || objBLabel === 'Fish') {
      Matter.Body.setPosition(entities.Fish.body, {
        x: Constants.SCREEN_WIDTH - 320,
        y: Constants.SCREEN_HEIGHT / 2 - 50
      });

      Matter.Body.setPosition(entities.Enemy1.body, {
        x: Constants.SCREEN_WIDTH + 60,
        y: randomY(Constants.SCREEN_HEIGHT)
      });

      Matter.Body.setVelocity(entities.Fish.body, { x: 0, y: 0 });

      Matter.Body.setAngularVelocity(entities.Fish.body, 0);

      Matter.Body.setPosition(entities.Enemy2.body, {
        x: Constants.SCREEN_WIDTH + 240,
        y: randomY(Constants.SCREEN_HEIGHT)
      });

      Matter.Body.setPosition(entities.Enemy3.body, {
        x: Constants.SCREEN_WIDTH + 480,
        y: randomY(Constants.SCREEN_HEIGHT)
      });
      dispatch({ type: 'game_over' })
    }
  })
  return entities;
};

export default Physics;


