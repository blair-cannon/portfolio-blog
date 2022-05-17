import React from 'react';
import { useNavigate } from "react-router-dom";
import headShot from '../pictures/headshotSquare.jpeg';
import github from '../pictures/Github.svg';
import email from '../pictures/Email.svg';
import instagram from '../pictures/Instagram.svg';
import phone from '../pictures/Phone.svg';
import finalproject from '../pictures/final-project.png';
import restaurant from '../pictures/restaurant.png';
import todolist from '../pictures/to-do-list.png';



export default function Home() {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path='Projects'  
    navigate(path);
  }
  return (
    <>
    <div className="spacer"></div>
    <div className="homePageContainer">
      <div className="homeLeft">
        <h1 className="homePageHeader">Blair Preston</h1>
        <p className="homePageSubheader">I am in the process of becoming a </p>
        <p className="homePageSubheader">Full-Stack Web Developer.</p>
        <div className="svgBlock">
          <a className="svg" href="mailto:blair.preston99@gmail.com" ><img src={email} width="60px" height="60px" alt="mail svg" /></a>
          <a className="svg" href="https://github.com/blair-preston" ><img src={github} width="60px" height="60px" alt="github svg" /></a>
          <a className="svg" href="tel:+8596094196"><img src={phone} width="60px" height="60px" alt="phone svg" /></a>
          <a className="svg" href="https://www.instagram.com/blair_that_music/"><img src={instagram} width="60px" height="60px" alt="instagram svg"  /></a>
        </div>
      </div>
      <div className="homeRight">
        <img className="headShot" src={headShot} alt="headshot"></img>
      </div>
    </div>
        <h3 className="recentProjects" >Recent Projects.</h3>
      <div className="belowTheFold">
        <div>
            <a href="https://mud-buds.herokuapp.com/">
              <img className="projectDisplayHome" src={finalproject} alt="final project"></img>
            </a>
          <h4 className="projectTitle" >Mud-Buds</h4>
          <p className="projectDescription" >Tinder clone with a spin! <br/> Find potential puppy playmates in your area! <br/> Django backend, React frontend. </p>
        </div>
        <div>
          <a href="https://blair-preston.github.io/react-restaurant/">
            <img className="projectDisplayHome" src={restaurant} alt="restaurant project"></img>
          </a>
          <h4 className="projectTitle">React Restaurant</h4>
          <p className="projectDescription" >A sample restaurant website pulling from a database.</p>
        </div>
        <div>
          <a href="https://blair-preston.github.io/to-do-list/">
            <img className="projectDisplayHome" src={todolist} alt="to do list project" ></img>
          </a>
          <h4 className="projectTitle">To Do List</h4>
          <p className="projectDescription" >To-do-list webpage dynamically rendered <br/> with React Components.</p>
        </div>
      </div>
      <div className="see-more-btn-container">
        <button onClick={routeChange} className="see-more-projects">Other Projects</button>
      </div>
    </>
  )
}
