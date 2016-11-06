import React from 'react'
import { Link } from 'react-router'

import Reviews from './components/Reviews'
import Events from './components/Events'
import Hours from './components/Hours'
import Features from './components/Features'

class SingleSpot extends React.Component {
  render(){
    return(
        <div className="grid-third spot">
          <Link to={`/view/${this.props.spot.id}`}>
            <div className="spot__img">
              <img src={this.props.spot.imgSrc} alt="Old Chinese Weirdo Sipping Lean at Casa Yo" />
              <p className="spot__name">{this.props.spot.name}</p>
              <p className="spot__address">{this.props.spot.address}, {this.props.spot.city}</p>
            </div>
            <h6>Hours</h6>
              <Hours id={this.props.spot.id} />
            <h6>Features</h6>
              <Features id={this.props.spot.id} data={this.props.spot.features}/>
          </Link>
        </div>
    );
  }
}

export default SingleSpot
