import React from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {

  return (
    <div className="blogPageContainer" >
        <h1 className="aboutPageHeader">Blog.</h1>
      <div>
        <h4 className="blogHeader">Breaking the Ice with Python</h4>
        <h4 className="blog-date">4/8</h4>
        <p className="blogTeaserText" >This has been one of my favorite weeks! I didn’t want to stop working on my project and felt like I could have kept adding to it forever. Since we just started Python last week...</p>
        <Link className="read-more-link" to="/PythonBlog">Read more</Link>
      </div>
      <div>
        <h4 className="blogHeader">Frontend Finish Line</h4>
        <h4 className="blog-date">3/25</h4>
        <p className="blogTeaserText" >This was a great week. It was one of the hardest weeks and required us to move fast with React, 
            yet I came out of it feeling super accomplished...</p>
        <Link className="read-more-link" to="/FrontendFinishLineBlog">Read more</Link>
      </div>
      <div>
        <h4 className="blogHeader">Welcome to React</h4>
        <h4 className="blog-date">3/18</h4>
        <p className="blogTeaserText" >This week we were introduced to React! We have been hearing about how React comes
         with some magic for concepts that are more difficult to understand or to code in 
         vanilla JS so I was super excited to learn about it...</p>
        <Link className="read-more-link" to="/WelcometoReactBlog">Read more</Link>
      </div>
      <div>
        <h4 className="blogHeader">Push the JavaScript Limits</h4>
        <h4 className="blog-date">3/4</h4>
        <p className="blogTeaserText" >I had a huge AHA moment this week around my developmental process.
         A part of the curriculum is that our instructors will hold a code-along session where we can watch
        them code something around the...</p>
        <Link className="read-more-link" to="/PushtheJSLimitsBlog">Read more</Link>
      </div>
      <div>
        <h4 className="blogHeader">Begin the In-Person Sprint</h4>
        <h4 className="blog-date">2/25</h4>
        <p className="blogTeaserText" >I really felt the effects of ‘jumping off the cliff’ this week. We were introduced to object oriented programming (OOP) this week and had lots of conversations and reading materials devoted to understanding...</p>
        <Link className="read-more-link" to="/InPersonSprintBlog">Read more</Link>
      </div>
    </div>
  )
}

