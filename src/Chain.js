import React, { useState, useRef } from 'react';
import {
  animated,
  useTrail,
  useSpring,
  useChain,
  useTransition
} from 'react-spring';

const items = [0.5, 0.3, 0.2, 0.7, 1, 34, 234, 23, 12, 123];

const Boxes = () => {
  const [on, toggle] = useState(false);

  const springRef = useRef();
  const { size } = useSpring({
    ref: springRef,
    from: { size: '20%' },
    to: { size: on ? '100%' : '20%' }
  });

  const transitionRef = useRef();
  // With Trail
  // const trail = useTrail(items.length, {
  //   ref: transitionRef,
  //   from: {
  //     opacity: 0,
  //     transform: 'scale(0)'
  //   },
  //   to: {
  //     opacity: on ? 1 : 0,
  //     transform: on ? 'scale(1)' : 'scale(0)'
  //   }
  // });
  const transition = useTransition(on ? items : [], item => item, {
    ref: transitionRef,
    trail: 400 / items.length,
    from: {
      opacity: 0,
      transform: 'scale(0)'
    },
    enter: {
      opacity: 1,
      transform: 'scale(1)'
    },
    leave: {
      opacity: 0,
      transform: 'scale(0)'
    }
  });

  useChain(on ? [springRef, transitionRef] : [transitionRef, springRef]);

  return (
    <div className="full-height">
      <animated.div
        style={{ width: size, height: size }}
        className="boxes-grid-two"
        onClick={() => toggle(!on)}
      >
        {transition.map(({ item, key, props }) => (
          <animated.div className="box-two" key={key} style={props} />
        ))}
        {/* {trail.map(animation => (
          <animated.div className="box-two" style={animation} />
        ))} */}
      </animated.div>
    </div>
  );
};

export default Boxes;
