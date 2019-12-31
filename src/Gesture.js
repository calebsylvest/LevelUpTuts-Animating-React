import React from 'react'
import {useGesture } from 'react-with-gesture'
import { animated, useSpring } from 'react-spring'

const Gesture = () => {
  const [{ x }, set] = useSpring(() => ({ x: 0 }));

  const bind = useGesture(({ down, delta }) => {
    if (down) {
      set({ x: delta[0] });
    } else {
      if (delta[0] > 400) {
        set({ x: 500 });
      } else if (delta[0] < -400) {
        set({ x: -500 });
      } else {
        set({ x: 0 });
      }
    }
    // set({ x: down ? delta[0] : 0 });
  });
  
  return (
    <animated.div
      style={{
        opacity: x.interpolate({ 
          map: Math.abs,
          range: [0, 400],
          output: [1, 0]
        }),
        transform: x.interpolate(x => `translate3d(${x}px, 0, 0)`)
      }}
      {...bind()}
      className="box"
    />
  )
};

export default Gesture;