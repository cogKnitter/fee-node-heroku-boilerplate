import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
      <h2>{this.props.params.projectName}</h2>
      <p>SLPAssist is a prototype web tool designed to assist Speech Language Pathologists in their day to day tracking of student goals. This project began as a group effort by the Spring cohort at The Iron Yard San Antonio. Stay tuned for updates as this work in progress continues. </p>
      <a href="http://slpassist.com/dashboard">SLPAssist.com</a>
      </div>
    )
  }
})
