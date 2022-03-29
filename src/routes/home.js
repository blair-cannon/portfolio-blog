import React from 'react';
import headShot from '../pictures/headshotSquare.jpeg';
import github from '../pictures/Github.svg'
import email from '../pictures/Email.svg'
import instagram from '../pictures/Instagram.svg'
import phone from '../pictures/Phone.svg'


export default function Home() {
  return (
    <>
    <div className="spacer"></div>
    <div className="homePageContainer">
      <div className="homeLeft">
        <h1 className="homePageHeader">Blair Preston</h1>
        <p className="homePageSubheader">I am in the process of becoming a </p>
        <p className="homePageSubheader">Full-Stack Web Developer.</p>
        <div className="svgBlock">
          <a href="mailto:blair.preston99@gmail.com"><img src={email} width="60px" height="60px" /></a>
          <a href="https://github.com/blair-preston"><img src={github} width="60px" height="60px" /></a>
          <a href="tel:+8596094196"><img src={phone} width="60px" height="60px" /></a>
          <a href="https://www.instagram.com/blair_that_music/"><img src={instagram} width="60px" height="60px" /></a>
        </div>
      </div>
      <div className="homeRight">
        <img className="headShot" src={headShot}></img>
      </div>
    </div>
        <h3 className="recentProjects" >Recent Projects.</h3>
      <div className="belowTheFold">
        <div className="projectDisplayHome">
          <img src="#"></img>
          <h4 className="projectTitle" >Project name</h4>
          <p className="projectDescription" >Description </p>
        </div>
        <div className="projectDisplayHome">
          <img src="#"></img>
          <h4 className="projectTitle">Project name</h4>
          <p className="projectDescription" >Description </p>
        </div>
        <div className="projectDisplayHome">
          <img src="#"></img>
          <h4 className="projectTitle">Project name</h4>
          <p className="projectDescription" >Description </p>
        </div>
      </div>
    </>
  )
}
