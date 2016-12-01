import React from 'react'
import { getSpots } from '../actions/spotActions'
import { connect } from 'react-redux'
import NavigationBar from './common/NavigationBar'
import FlashMessagesList from './flash/FlashMessagesList'


class App extends React.Component {

  componentDidMount() {
    this.props.getSpots();
  }

  render() {
    return(
      <div>
        <NavigationBar />
        <div className="wrapper">
          <FlashMessagesList />
          {this.props.children}
        </div>
      </div>
    )
  }
}

App.propTypes = {
  getSpots: React.PropTypes.func.isRequired
}

export default connect(null, { getSpots })(App)
