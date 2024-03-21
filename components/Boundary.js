import Matter from 'matter-js';
import React from 'react';
import { Dimensions, View } from 'react-native';

const Boundary = (props) => {
  const width = props.body.bounds.max.x - props.body.bounds.min.x;
  const height = props.body.bounds.max.y - props.body.bounds.min.y;

  const xPos = props.body.position.x - width / 2;
  const yPos = props.body.position.y - height / 2;

  return (
    <View
      style={{
        position: 'absolute',
        left: xPos,
        top: yPos,
        width: width,
        height: height,
        backgroundColor: props.color,
      }}
    />
  );
};

export default (world, color, pos, size) => {
  const boundary = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {
      label: 'BoundaryBottom',
      isStatic: true,
    }
  );
  Matter.World.add(world, boundary);
  return { body: boundary, color, pos, renderer: <Boundary /> };
};
