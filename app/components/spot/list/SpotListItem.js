import React from 'react'
import { Link } from 'react-router'

import Reviews from './../components/Reviews'
import Features from './../components/Features'

class SpotListItem extends React.Component {
  render(){
    const item = this.props.spots.map((spot, key) => {
      const imgName = spot.name.toLowerCase().split(' ').join('')
      return (
        <div className="grid-third spot" key={key}>
          <Link to={`/view/${spot._id}`}>
            <div className="spot__img">
              <img src={"assets/img/" + imgName + ".jpg"} alt={imgName} />
              <p className="spot__name">{spot.name}</p>
              <p className="spot__address">{spot.address}, {spot.city}</p>
            </div>
            <h6>Spot Features</h6>
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
