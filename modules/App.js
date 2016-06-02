import React from 'react'
import { Link } from 'react-router'


export default React.createClass({
  render() {
    return (
      <div>
        <h1>Mariah Tree's portfolio</h1>
        <h2>San Antonio, Texas</h2>
        <p>Hi my name is Mariah. This is a portfolio of my Front End Development projects. I have a MS in Psychology and have spent the last 6+ years as a professional research psychologist. I recently left my research efforts for the military so that I can pursue web development and data visualization full time. </p>
          <ul role="nav">
             <li><Link to="/blogs">Blog</Link></li>
             <li><Link to="/projects">Projects</Link></li>
             <li><a href="https://github.com/cogKnitter">Github</a></li>
           </ul>
           {this.props.children}

       </div>
    )
  }
})
