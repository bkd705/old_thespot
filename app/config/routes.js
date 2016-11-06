import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from '../components/App'
import Index from '../components/Index'

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
    </Route>
  </Router>
)

export default routes
