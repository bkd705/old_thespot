import React from 'react'

import NavigationBar from './common/NavigationBar'

import '../assets/css/normalize.css'
import '../assets/css/skeleton.css'
import '../assets/css/custom.css'


class App extends React.Component {
  render(){
    return(
      <div>
        <NavigationBar />
        {this.props.children}
      </div>
    )
  }
}

export default App
