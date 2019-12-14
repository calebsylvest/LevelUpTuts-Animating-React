import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

const Checkout = ({isOpen}) => {
  {/*const animation = useSpring({
    transform: isOpen ? `translate3d(0, 0, 0)` : `translate3d(100%, 0, 0)`
  });*/}

  const { x } = useSpring({
    x: isOpen ? 0 : 100,
    config: config.wobbly
    // config: {
    //   tension: 400,
    //   friction: 200
    // }
  });

  return (
    <div className="checkout"
      style={{
        pointerEvents: isOpen ? 'all' : 'none'
      }}
    >
      {/*<animated.div style={animation} className="checkout-left" />
      <animated.div style={animation} className="checkout-right" />*/}

      <animated.div style={{
        transform: x.interpolate(x => `translate3d(${x * -1}%, 0, 0)`)
      }} className="checkout-left" />
      <animated.div style={{
        transform: x.interpolate(x => `translate3d(${x}%, 0, 0)`)
      }} className="checkout-right" />
    </div>
  );
}

export default Checkout
