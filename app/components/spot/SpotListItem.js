import React from 'react'
import { Link } from 'react-router'

import Reviews from './components/Reviews'
import Events from './components/Events'
import Hours from './components/Hours'
import Features from './components/Features'

class SpotListItem extends React.Component {
  render(){
    const item = this.props.spots.map((spot, key) => {
      return (
        <div className="grid-third spot" key={key}>
          <Link to={`/view/${spot._id}`}>
            <div className="spot__img">
              <img src={spot.imgSrc} alt="Old Chinese Weirdo Sipping Lean at Casa Yo" />
              <p className="spot__name">{spot.name}</p>
              <p className="spot__address">{spot.address}, {spot.city}</p>
            </div>
            <h6>Hours</h6>
              <Hours id={spot._id} />
            <h6>Features</h6>
              <Features data={spot.features}/>
          </Link>
        </div>
      )
    })
    return(
      <div className="row">
      {item}
      </div>
    );
  }
}

export default SpotListItem
