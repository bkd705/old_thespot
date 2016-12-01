import React from 'react'
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'

import App from '../components/App'
import Index from '../components/Index'
import SpotContainer from '../components/spot/SpotContainer'
import NewSpotView from '../components/spotcrud/newspot/NewSpotView'

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="/view/:spotId" component={SpotContainer}></Route>
      <Route path="/newspot" component={NewSpotView}></Route>
    </Route>
  </Router>
)

export default routes
