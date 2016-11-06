import React from 'react'

import { hours } from '../../../data/data'

class Hours extends React.Component {
  render(){
    const hourList = hours.map((spot, key) => {
      let element;
      if(spot.business_id == this.props.id) {
        return (
          <span key={key}>
            <li>{spot.hours[0]}</li>
            <li>{spot.hours[1]}</li>
            <li>{spot.hours[2]}</li>
            <li>{spot.hours[3]}</li>
            <li>{spot.hours[4]}</li>
            <li>{spot.hours[5]}</li>
            <li>{spot.hours[6]}</li>
          </span>
        )
      }
      return element
    })
    return(
        <ul className="spot__hours">{hourList}</ul>
    )
  }
}

export default Hours;
