import Matter from 'matter-js';
import React from 'react';
import { View, Image } from 'react-native';

const Enemy = (props) => {
  const radius = props.body.circleRadius * 2;

  const xPos = props.body.position.x - radius / 2;
  const yPos = props.body.position.y - radius / 2;

  return (
    <Image
      style={{
        width: radius,
        height: radius,
        left: xPos,
        top: yPos,
        position: "absolute",
      }}
      source={props.image}
    />
  );
};

export default (world, color, pos, size, image) => {
  const enemy = Matter.Bodies.circle(
    pos.x,
    pos.y,
    size.radius,
    { label: 'Enemy', isStatic: true, gravityScale: 0 },
  );
  Matter.World.add(world, enemy);
  return { body: enemy, color, pos, image, renderer: <Enemy /> };
};