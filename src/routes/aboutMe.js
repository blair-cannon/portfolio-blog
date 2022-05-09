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
        <p className="aboutMeBio">
          Hi there! I'm Blair! I have been pursuing a passion project in web development since January 2022 where I have learned an array of 
          front-end and back-end languages. Thinking through a problem, making a plan for solving it and then translating that 
          into working code has been one of the most rewarding processes! I'm excited and determined to keep this journey alive! <br/> <br/>

          More about me. <br/>
          In May of 2021, I graduated from UK and began applying to medical schools as I had always planned on. I started to notice
          a growing itch inside of me to want a fresh, broadened path for my future. Long story short, I took a shot in the dark and
          signed up for Awesome Inc's 16-week, intensive training program for aspiring software developers. It has been the 
          best thing that has happened for my life. I already know that this knowledge will bring so much fruit into my life. <br/> <br/>

          Fun stuff about me.  <br/>
          I am an adventurer at heart. 
          From white water rafting, rock climbing, skydiving, and surfing to hiking at National Parks, being out in nature 
          is super important to me. 
        </p>
      </div>
    </div>
  )
}
