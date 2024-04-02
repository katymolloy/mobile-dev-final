import Matter from 'matter-js';
import React, { useState } from 'react';
import { View, Image } from 'react-native';


const Enemy = (props) => {
  const width = props.body.bounds.max.x - props.body.bounds.min.x;
  const height = props.body.bounds.max.y - props.body.bounds.min.y;

  const xPos = props.body.position.x - width / 2;
  const yPos = props.body.position.y - height / 2;


  return (

    <Image
    style={{

      width: width,
      height: height,
      left: xPos,
      top: yPos,
      position: "absolute",
    }}
    source={props.image}
  />

  );
};

export default (world, color, pos, size, image) => {
  const enemy = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { label: 'Enemy', isStatic: true, gravityScale: 0},
  );
  Matter.World.add(world, enemy);
  return { body: enemy, color, pos, image, renderer: <Enemy /> };
};
