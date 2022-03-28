import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import Home from './routes/home';
import AboutMe from './routes/aboutMe';
import Projects from './routes/projects';
import Blog from './routes/blog';


// import 'bootstrap/dist/bootstrap.min.css';

const rootElement = document.getElementById("root"); 

render(
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="AboutMe" element={<AboutMe />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Blog" element={<Blog />} />
      </Route> 
      {/* route tag around app is not self-closing and wraps around all nav items bc we want it on all pages */}
    </Routes>
  </BrowserRouter>,
  rootElement
);
