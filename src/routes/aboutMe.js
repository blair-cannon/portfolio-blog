import React from 'react';
import aboutImage from '../pictures/surfing.jpeg'

export default function AboutMe() {
  return (
    <div className="aboutPageContainer" >
      <div className="aboutImageWrapper">
       <img className="aboutImage" src={aboutImage} alt="about me"></img> 
      </div>
        <h1 className="aboutPageHeader">About me.</h1>
      <div className="aboutMeBioBox">
        <p className="aboutMeBio">
          In May of 2021, I graduated from the University of Kentucky and began applying to medical schools as I had always planned on. I started to notice
          a growing itch inside of me to want a fresh, broadened path for my future. Long story short, I took a shot in the dark and
          signed up for Awesome Inc's 16-week, intensive training program for aspiring software developers and haven't looked back. It was an amazing journey and
          provided the high-paced, challenging envirnoment that I enjoyed from undergrad. My job with Covetrus shortly followed and has been another great environment where
          I have grown tremendously. I have found that my strengths in learning have translated seemlessly into this field and I am eager to continue pushing myself.
          Excited to see what other fruit is in store on this path!<br/> 
        </p>
      </div>
    </div>
  )
}
