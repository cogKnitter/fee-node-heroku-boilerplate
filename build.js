import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import Blogs from './modules/Blogs'
import Projects from './modules/Projects'
import BlogTest from './modules/BlogTest'
import SLPAssist from './modules/SLPAssist'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/blogs" component={Blogs}/>
      <Route path="/blogs/:blogName" component={BlogTest}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/projects/:projectName" component={SLPAssist}/>
    </Route>
  </Router>
), document.getElementById('app'))
