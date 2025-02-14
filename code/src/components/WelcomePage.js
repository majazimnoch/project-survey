/* eslint-disable max-len */
import React from 'react';
import Image from '../assets/astronaut.jpg'
import ButtonNext from './ButtonNext';

const WelcomePage = ({ onClickNext }) => {
  return (
    <div className="header">
      <h1 className="header-copy">Welcome to the <span className="color1"> Astral Escapes!</span></h1>
      <img className="icon" src={Image} alt="Astronaut" />
      <p className="header-paragraph"><span className="size1">Astral Escapes</span> is a space tourism company that offers <span className="color2">once-in-a-lifetime</span> trips to space for <span className="color3">adventure seekers</span> and space enthusiasts. Click below to book your trip!
      </p>
      <ButtonNext button="Start" onClickNext={onClickNext} />
    </div>
  )
}

export default WelcomePage;