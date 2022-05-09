import React from 'react';
import finalproject from '../pictures/final-project.png';
import restaurant from '../pictures/restaurant.png';
import todolist from '../pictures/to-do-list.png';
import tictactoe from '../pictures/tic-tac-toe.png';
import weatherapp from '../pictures/weather-app.png';
import backendtodolist from '../pictures/django-to-do-list.png';
import bouncingballs from '../pictures/bouncingballs.png';
import evercraft from '../pictures/evercraft.png';
import alarmclock from '../pictures/alarmclock.png';

export default function Projects() {
  return (
    <div className="projectPageDiv">
      <div>
        <a href="https://github.com/blair-preston/final-project-treater">
          <img className="projectDisplayHome" src={finalproject}></img>
        </a>
        <h4 className="projectTitle" >Mud-Buds</h4>
        <p className="projectDescription" >Tinder clone with a spin! <br/> Find potential puppy playmates in your area! <br/> Django backend, React frontend. </p>
      </div>
      <div>
        <a href="https://blair-preston.github.io/react-restaurant/">
          <img className="projectDisplayHome" src={restaurant}></img>
        </a>
        <h4 className="projectTitle">React Restaurant</h4>
        <p className="projectDescription" >A sample restaurant website pulling from a database.</p>
      </div>
      <div>
        <a href="https://blair-preston.github.io/to-do-list/">
          <img className="projectDisplayHome" src={todolist}></img>
        </a>
        <h4 className="projectTitle">To Do List</h4>
        <p className="projectDescription" >To-do-list webpage dynamically rendered <br/> with React Components.</p>
      </div>
      <div >
        <a href="https://blair-preston.github.io/tic-tac-toe/">
          <img className="projectDisplayHome" src={tictactoe}></img>
        </a>
        <h4 className="projectTitle" >Tic-Tac-Toe</h4>
        <p className="projectDescription" >Classic game implemented with Object <br/> Oriented Programming and a MVC framework.</p>
      </div>
      <div >
        <a href="https://blair-preston.github.io/weather-app/">
          <img className="projectDisplayHome" src={weatherapp}></img>
        </a>
        <h4 className="projectTitle">Weather App</h4>
        <p className="projectDescription" >Displays current weather information using Axios to fetch <br/> data and utilizing local storage to require less API requests. </p>
      </div>
      <div >
        <a href="https://github.com/blair-preston/django_to_do_list">
          <img className="projectDisplayHome" src={backendtodolist}></img>
        </a>
        <h4 className="projectTitle">Django To Do List</h4>
        <p className="projectDescription" >An API that saves a user’s to-do list items in a <br/> PostgresQL database. </p>
      </div>
      <div >
        <a href="https://blair-preston.github.io/bouncing-ball/">
          <img className="projectDisplayHome" src={bouncingballs}></img>
        </a>
        <h4 className="projectTitle">Bouncing Balls Game</h4>
        <p className="projectDescription" >Interactive, two-player game created with <br/> Object-Oriented-Programming. </p>
      </div>
      <div >
        <a href="https://github.com/blair-preston/python-evercraft">
          <img className="projectDisplayHome" src={evercraft}></img>
        </a>
        <h4 className="projectTitle">Evercraft</h4>
        <p className="projectDescription" >Developing an RPG-Evercraft backend using <br/> Test Driven Development. </p>
      </div>
      <div >
        <a href="https://blair-preston.github.io/alarmclock/">
          <img className="projectDisplayHome" src={alarmclock}></img>
        </a>
        <h4 className="projectTitle">Alarm Clock</h4>
        <p className="projectDescription" >Use of the Date object, setInterval, and setTimeout <br/> to display a digital alarm clock. </p>
      </div>
    </div>
  )
}
