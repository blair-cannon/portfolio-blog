import React from 'react'

export default function PythonBlog() {
  return (
    <div className="blogPageContainer" >
      <h1 className="blog-header">Breaking the Ice with Python</h1>
        <p className="blog-text" >This has been one of my favorite weeks! I didn’t want to stop working on my project and felt like I could have kept adding to it forever. Since we just started Python last week, I was proud to feel the ease of using it along with SQL statements this week to actually complete a project!! I left this week feeling super good about pursuing this career path and excited to keep learning. The more I learn, the more I realize how much more there is to learn and how web development will be a continual learning process. 
            I really enjoyed manipulating a database and thinking through best practices for organizing data for a project. I’m excited to eventually see how we can connect backend databases and organization to the frontend to create a full stack project.
        </p>
        <li className="blog-question">What are some similarities and differences you can see with JS and Python? </li>
          <p className="blog-text">There are plenty of similarities between JS and Python. Even though they look
            different concepts like functions, variables, classes, loops, arrays 
            (known as lists or tuples), and objects (known as dictionaries) are used
            in both languages. One of the biggest differences between JS and Python is syntax.
            The one I have to get the most used to is the lack of semicolons and brackets in Python.
            Python relies on indentations to define code blocks which is easy to look at and read but
            has taken some time to get used to as my finger’s jerk reaction on my right hand is to hit
            the semicolon button after every line! The characteristic that Python is easy to look at and
            read is also not just because of the code blocks. Python in general reads closer to English 
            using words like and, or, and not instead of the JS &&, ||, and !. 
        </p>
        <li className="blog-question">
        If you had started with Python instead of JS, how do you think the Bootcamp would be different? <br/>
        Would you have benefited?
        </li>
        <p className="blog-text" >Since Python focuses more on simplicity, as described in the first question, with its words and
        organization I think that a new developer would have a more difficult time grasping a deeper 
        understanding of concepts such as scope, variable assignment, and conditional statements that would
        be needed to learn JS after Python instead of before. Additionally, although I read that Python can
        be used for front-end development, it is intended for the back-end part of the web application while
        JavaScript can be used for both the front-end and the back-end. I like that Bootcamp starts with 
        front-end development as new developers can more easily see what the code they are typing produces
        to the UI to create cause/effect relationships between their code and the resulting view. As I went
        through that process, I now feel like I can better understand code and can walk through what is being
        accomplished by each line. Thus, I’m glad that we started with JS. 
        </p>
        
    </div>
  )
}
