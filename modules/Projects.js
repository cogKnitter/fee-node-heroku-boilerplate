import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Projects</h2>
        <ul>
          <li><Link to="/projects/SLPAssist">SLPAssist</Link></li>
        </ul>
      </div>
    )
  }
})
