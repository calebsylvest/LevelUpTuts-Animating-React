import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  const { color, y } = useSpring({
    // opacity: isToggled ? 1 : 0,
    // fontSize: isToggled ? '2rem' : '20em',
    color: isToggled ? 'tomato' : 'green',
    y: isToggled ? 0 : 1
    // transform: isToggled ? 'translate3d(0,0,0)' : 'translate3d(0,-50px,0)'
  });
  const fade = useSpring({
    // opacity: isToggled ? 1 : 0,
    // fontSize: isToggled ? '2rem' : '20em',
    color: isToggled ? 'tomato' : 'green',
    transform: isToggled ? 'translate3d(0,0,0)' : 'translate3d(0,-10px,0)'
  });

  return (
    <div>
      <animated.h1
        style={{
          transform: y.interpolate({
            range: [0, .25, .50, .75, 1],
            output: [0, -25, -50, -70, -50]
          }).interpolate(y => `translate3d(0, ${y}px, 0)`),
          color
        }}
      >
        Hello Interpolated
      </animated.h1>
      <animated.h1 style={fade}>Hello Fade</animated.h1>
      <button onClick={() => setToggle(!isToggled)}>Toggle</button>
    </div>
  );
};

// const AnimatedTitle = animated(componentName);

export default Toggle;
