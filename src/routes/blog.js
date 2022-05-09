import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import PythonBlog from './python';

export default function Blog() {

  // let navigate = useNavigate(); 
  // const routeChange = () =>{ 
  //   let path='Projects'  
  //   navigate(path);
  // }

  return (
    <div className="blogPageContainer" >
        <h1 className="aboutPageHeader">Blog.</h1>
        <h4 className="blogHeader">Breaking the Ice with Python</h4>
        <p className="blogTeaserText" >This has been one of my favorite weeks! I didn’t want to stop working on my project and felt like I could have kept adding to it forever. Since we just started Python last week...</p>
        <Link to="/PythonBlog">Read more</Link>
        <h4 className="blogHeader">BLOG TITLE</h4>
        <p className="blogTeaserText" >Et velit quis est explicabo assumenda et unde suscipit. 
         Vel nobis galisum qui necessitatibus minima nam maxime voluptates et minus praesentium ut voluptas consequatur.</p>
        <a className="blogReadMore" href="#">Read more</a>
        <h4 className="blogHeader">BLOG TITLE</h4>
        <p className="blogTeaserText" >Et velit quis est explicabo assumenda et unde suscipit. 
         Vel nobis galisum qui necessitatibus minima nam maxime voluptates et minus praesentium ut voluptas consequatur.</p>
        <a className="blogReadMore" href="#">Read more</a>
        <h4 className="blogHeader">BLOG TITLE</h4>
        <p className="blogTeaserText" >Et velit quis est explicabo assumenda et unde suscipit. 
         Vel nobis galisum qui necessitatibus minima nam maxime voluptates et minus praesentium ut voluptas consequatur.</p>
        <a className="blogReadMore" href="#">Read more</a>
        <h4 className="blogHeader">BLOG TITLE</h4>
        <p className="blogTeaserText" >Et velit quis est explicabo assumenda et unde suscipit. 
         Vel nobis galisum qui necessitatibus minima nam maxime voluptates et minus praesentium ut voluptas consequatur.</p>
        <a className="blogReadMore" href="#">Read more</a>
        
    </div>
  )
}

