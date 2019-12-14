import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Nav from './Nav';
import Checkout from './Checkout';
import Modal from './Modal';
import Accordion from './Accordion';
import Waypoints from './Waypoints';
import logo from './logo.svg';
import './App.css';


const App = () => {
  const [ isNavOpen, setNavOpen ] = useState(false);
  const [ isCheckoutOpen, setCheckoutOpen ] = useState(false);
  const navAnimation = useSpring({
    transform: isNavOpen
      ? `translate3d(0, 0, 0) scale(1)`
      : `translate3d(100%, 0, 0) scale(0.6)`
  });
  const fade = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1
  });

  return (
    <animated.div className="App" style={fade}>
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <button onClick={() => setNavOpen(!isNavOpen)} className="menu-button">
          Menu
        </button>
        <button onClick={() => setCheckoutOpen(!isCheckoutOpen)} className="menu-button">
          Checkout
        </button>
        <Nav style={navAnimation} />
      </header>

      <main>
        <Modal />
        <Accordion />
        <Waypoints />
      </main>

      <Checkout isOpen={isCheckoutOpen} />
    </animated.div>
  );
}

export default App;
