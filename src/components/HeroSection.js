import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <ul className='hero-list'>
        <li>
          <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
          <h1>19-20th</h1>
          <h2>February</h2>
          <div className='hero-btns'>
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              GET STARTED
            </Button>
            <Button
              className='btns'
              buttonStyle='btn--primary'
              buttonSize='btn--large'
              onClick={console.log('hey')}
            >
              WATCH TRAILER <i className='far fa-play-circle' />
            </Button>
          </div>
        </li>
        <li>
          <img src="mes-logo4.png" alt="" />
          <h1>ADVENTURE AWAITS</h1>
          <p>What are you waiting for?</p>
        </li>
      </ul>
    </div>
  );
}

export default HeroSection;