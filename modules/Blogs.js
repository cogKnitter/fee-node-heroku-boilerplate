import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Blog</h2>
        <ul>
          <li><Link to="/blogs/BlogTest">Blog Test</Link></li>
        </ul>
      </div>
    )
  }
})
