import React from 'react'

import Reviews from './components/Reviews'
import Events from './components/Events'
import Hours from './components/Hours';
import { hours } from '../../data/data';

class SingleSpot extends React.Component {
  render(){
    return(
      <div className="grid-third spot">
          <div className="spot__img">
            <img src={this.props.spot.imgSrc} alt="Old Chinese Weirdo Sipping Lean at Casa Yo" />
            <p className="spot__name">{this.props.spot.name}</p>
            <p className="spot__address">{this.props.spot.location}</p>
          </div>
          <h6>Hours</h6>
            <Hours id={this.props.spot.id} />
          <h6>Features</h6>
          <ul className="spot__features">
            <li>Wifi</li>
            <li>Hot Drinks</li>
            <li>Large Seeting</li>
          </ul>
        </div>
    );
  }
}

export default SingleSpot
