import Matter from 'matter-js';
import React, { useState } from 'react';
import { Dimensions, View, TouchableWithoutFeedback } from 'react-native';
import SpriteSheet from 'rn-sprite-sheet';

const Candle = (props) => {
  let candle = null;
  const width = props.body.bounds.max.x - props.body.bounds.min.x;
  const height = props.body.bounds.max.y - props.body.bounds.min.y;

  const xPos = props.body.position.x - width / 2;
  const yPos = props.body.position.y - height / 2;

  let startAnimate = (type) => {
    candle.play({
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
      <SpriteSheet
        ref={(ref) => (candle = ref)}
        source={require('../assets/candle.png')}
        columns={7}
        rows={2}
        height={height} // set either, none, but not both
        //width={width}
        onLoad={() => startAnimate('extinguish1')}
        imageStyle={{ marginTop: 0 }}
        animations={{
          light: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          //extinguish1: [14, 15, 16, 17],
          extinguish1: [7],  // number 7 is "OFF" - not lighting 
        }}
      />
      <TouchableWithoutFeedback
        onPress={() => startAnimate('light')}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <View
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default (world, color, pos, size) => {
  const theCandle = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { label: 'Candle', restitution: 1, frictionAir: 0, isStatic: true }
  );
  Matter.World.add(world, theCandle);
  return { body: theCandle, color, pos, renderer: <Candle /> };
};
