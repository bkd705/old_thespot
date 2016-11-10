import React from 'react'
import { Link } from 'react-router'

class NavigationBar extends React.Component {
  render(){
    return(
      <nav className="navbar">
          <ul className="navbar__list">
            <li className="navbar__item"><Link to="/">Home</Link></li>
            <li className="navbar__item"><Link to="/search">Search</Link></li>
            <li className="navbar__brand navbar__item"><Link to="/">The Spot</Link></li>
            <li className="navbar__item"><Link to="/events/all">Events</Link></li>
            <li className="navbar__item"><Link to="/spots">Spots</Link></li>
          </ul>
      </nav>
    )
  }
}

export default NavigationBar
