import React from 'react'

export default function WelcometoReactBlog() {
  return (
    <div className="blogPageContainer" >
      <h1 className="blog-header">Welcome to React</h1>
        <p className="blog-text" >
        This week we were introduced to React! We have been hearing about how React comes
         with some magic for concepts that are more difficult to understand or to code in 
         vanilla JS so I was super excited to learn about it! Now that we have had a week 
         of learning React and a project under our belts, I am glad that we spent as much
        time as we did dedicated to the core fundamentals of HTML, CSS, and JS. I think
        that it helped to better understand what React’s hooks, routes, and concepts 
        were accomplishing and will ultimately make me a more confident developer. 
        Anyways, React is awesome! I am excited to do another project with it and
        learn more next week! The use of hooks(useState and useEffect) and the simplified
        routes for manipulating the UI are already showing me how powerful React can be! 
        </p>
        <li className="blog-question">Do you think JavaScript Frameworks and Libraries are easy or hard to use? Why? </li>
        <p className="blog-text">
        I definitely think that the frameworks and libraries that we have been introduced to have facilitated
         something that is more complicated in vanilla JavaScript. React, for example, helps to develop dynamic
          User Interfaces and handle changes. React uses the virtual DOM, JSX, and components to better represent
           objects, make writing code easier to see by resembling HTML, and wrap components in groupings to better
            understand interactions, respectively. 
        </p>
        <li className="blog-question">
        What Frameworks or Libraries are you interested in learning more about?
        </li>
        <p className="blog-text" >
        Other frameworks/libraries that I want to learn next are Angular JS and Node JS.
         I came across these two the most while learning about React and I think they would
          be a great addition to my tool belt. Angular JS provides a standard structure for
           developers to use and is one of the most powerful and popular frameworks for single
            page applications. Node JS is a run-time environment that is fast and efficient as
             it calls multiple API calls instead of waiting for individual responses. 
        </p>
        <li className="blog-question">
            Find one emerging JavaScript tool that you would like to learn more about or use in your final project.
        </li>
        <p className="blog-text" >
        Another useful JavaScript tool that I have been seeing is the Atom desktop application that is
        a well known source code editor. It seems easy to use and easy to customize to make writing JavaScript
        more personalized to the individual or the project. 
        </p>
        
    </div>
  )
}
