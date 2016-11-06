import React from 'react'
import { Link } from 'react-router'

class NavigationBar extends React.Component {
  render(){
    return(
      <nav className="navbar">
        <div className="container">
          <ul className="navbar-list">
            <li className="navbar-item"><Link to="/" className="navbar-link">Home</Link></li>
            <li className="navbar-item"><Link to="/places" className="navbar-link">Places</Link></li>
            <li className="navbar-item"><Link to="/about" className="navbar-link">About</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavigationBar
