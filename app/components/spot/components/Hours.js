import React from 'react'

import { hours } from '../../../data/data'

class Hours extends React.Component {
  render(){
    const hourList = hours.map(spot => {
      let element;
      if(spot.business_id == this.props.id) {
        return (
          spot.hours.map((day,key) => {
            return <li key={key}>{day}</li>
          })
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
