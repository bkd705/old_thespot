import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from '../components/App'
import Index from '../components/Index'
import SpotView from '../components/spot/SpotView'

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="/view/:spotId" component={SpotView}></Route>
    </Route>
  </Router>
)

export default routes
