import React from 'react';
import aboutImage from '../pictures/surfing.jpeg'

export default function AboutMe() {
  return (
    <div className="aboutPageContainer" style={{
      height:"60rem"
    }}>
      <div className="aboutImageWrapper">
        <img className="aboutImage" src={aboutImage}></img>
      </div>
        <h1 className="aboutPageHeader">About me.</h1>
      <div className="aboutMeBioBox">
        <p className="aboutMeBio">Stuff about me. Include what languages you will have learned.... adventures such as skydiving, white water rafting, 
          rock climbing, hiking at National Parks, and surfing.... pre-med background... wanted to start something new and loved
          the endless possibilities that came with a career in web development. So far have enjoyed ____ the most.. etc. Stuff about me. Include what languages you will have learned.... adventures such as skydiving, white water rafting, 
          rock climbing, hiking at National Parks, and surfing.... pre-med background... wanted to start something new and loved
          the endless possibilities that came with a career in web development. So far have enjoyed ____ the most.. etc.
        </p>
      </div>
    </div>
  )
}
