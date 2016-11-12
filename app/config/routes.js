import React from 'react'
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'

import App from '../components/App'
import Index from '../components/Index'
import SpotView from '../components/spot/SpotView'
import EventListView from '../components/event/EventListView'
import NewSpotView from '../components/newspot/NewSpotView'

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="/view/:spotId" component={SpotView}></Route>
      <Route path="/events/all" component={EventListView}></Route>
      <Route path="/newspot" component={NewSpotView}></Route>
    </Route>
  </Router>
)

export default routes
