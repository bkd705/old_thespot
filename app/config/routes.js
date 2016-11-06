import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from '../components/App'
import Index from '../components/pages/Index'
import About from '../components/pages/About'
import PlacePage from '../components/places/PlacePage'

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="/about" component={About} />
      <Route path="/places" component={PlacePage} />
    </Route>
  </Router>
)

export default routes
