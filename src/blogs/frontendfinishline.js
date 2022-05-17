import React from 'react'

export default function FrontendFinishLineBlog() {
  return (
    <div className="blogPageContainer" >
      <h1 className="blog-header">Frontend Finish Line</h1>
        <p className="blog-text" >
            This was a great week. It was one of the hardest weeks and required us to move fast with React, 
            yet I came out of it feeling super accomplished. Even though we learned a lot about React in one project, 
            I really felt like I understood it all and would be able to apply the topics to other projects in the future. 
            React required extra sensitivity around props and passing them between components which needed further planning 
            and intentionality with separation of concerns. Each button and tab were never as simple as I thought they were 
            going to be yet in the end I am so glad to have struggled and learned from each one. React is going to be a super 
            powerful tool!! I definitely plan on continuing to learn more about React outside of the Bootcamp.
        </p>
        <li className="blog-question">What have you learned about CLIs? Do you think they are scary? </li>
        <p className="blog-text">
            CLI’s are outlets for communicating with the computer. It is used for operating system functions
             such as installing packages, looking at directories, changing files, etc. The majority of my experience
              with CLI has been within Github. I do think that they are intimidating and have created a Github commands
               Google Doc with different commands as I learn more so that I can start to apply them more often and 
               eventually be less intimidated by the CLI. 
        </p>
        <li className="blog-question">
        If you were to build a CLI, what would it do?
        </li>
        <p className="blog-text" >
            I would still want my CLI to follow already existing patterns so that it is
            intuitive and easy to use. I would also want to implement a feature like in the React
            terminal that identifies weaknesses in your code and points out variables or props that
            get identified and not used or other errors/warnings. 
        </p>
        <li className="blog-question">
            List some ideas that without a Framework, would take you a long time to code.
        </li>
        <p className="blog-text" >
            I think that there would be many things that would be difficult to code without
             a framework. In general, people are familiar with frameworks making it easy to work
            within development teams and to collaborate on projects. Thus, I think it would take
            a long time to code a larger app amongst a team without a framework because it would
            be hard to keep context on everyone’s code throughout the process and hard to
            maintain over time.  
        </p>
        
    </div>
  )
}
