import React, { useState } from 'react'
import { animated, useTrail } from 'react-spring'

const items = [0, 1, 2, 3, 4];

const Boxes = () => {
  const [on, toggle] = useState(false);
  const trail = useTrail(items.length, {
    opacity: on ? 0 : 1,
    transform: on ? 'scale(0.3)' : 'scale(1)'
    // from: {
    //   opacity: 0
    // },
    // to: {
    //   opacity: 1
    // }
  });

  return (
    <div>
      <button onClick={() => toggle(!on)}>Toggle Trail</button>
      <div className="boxes-grid">
        {trail.map(animation => (
          <animated.div className="box" style={animation} />
        ))}
      </div>
    </div>
  )
}

export default Boxes