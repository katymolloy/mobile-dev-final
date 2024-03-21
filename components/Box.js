import Matter from 'matter-js';
import React, { useState } from 'react';
import { View, Image } from 'react-native';


const Fish = (props) => {
  let fish = null;
  const width = props.body.bounds.max.x - props.body.bounds.min.x;
  const height = props.body.bounds.max.y - props.body.bounds.min.y;

  const xPos = props.body.position.x - width / 2;
  const yPos = props.body.position.y - height / 2;

  let startAnimate = (type) => {
    fish.play({
      type: type,
      fps: 24, // frames per second
      loop: true, //if true, replays animation after it finishes
    });
  };

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: 'white',
        borderStyle: 'solid',
        position: 'absolute',
        left: xPos,
        top: yPos,
        width: width,
        height: height,
      }}>

      <Image
        style={{
          //resizeMode: 'cover',
          height: 70,
          width: 140
          ,
        }}
        source={require('../assets/fish.png')}
      />
    </View>

  );
};

export default (world, color, pos, size) => {
  const theFish = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { label: 'Fish', restitution: 1, frictionAir: 0, isStatic: false }
  );
  Matter.World.add(world, theFish);
  return { body: theFish, color, pos, renderer: <Fish /> };
};
