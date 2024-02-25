import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from './pictures/logo.png'



function App() {
  return (
    <div>  
    <nav>
      <img className="logo" src={logo} alt="logo"></img>
      <Link className="nav-link" to="/">HOME</Link> 
      <Link className="nav-link" to="/blog">RESUME</Link> 
      <Link className="nav-link" to="/projects">PROJECTS</Link> 
      <Link className="nav-link" to="/aboutMe">ABOUT ME</Link> 
    </nav>
  <Outlet />
  </div>
  );
}
export default App;
