import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import useMeasure from './useMeasure'

const Accordion = () => {
  const [on, toggle] = useState(false);
  const [bind, { height, top }] = useMeasure();
  console.log('height:', height);
  const animation = useSpring({
    overflow: 'hidden',
    height: on ? height + top * 2 : 0
  });
  
  return (
    <div>
      <button onClick={() => toggle(!on)}>Toggle</button>
      <animated.div style={animation}>
        <div {...bind} className="accordion">
          <p>Hello, I'm in the accordion.</p>
        </div>
      </animated.div>
    </div>
  )
}

export default Accordion