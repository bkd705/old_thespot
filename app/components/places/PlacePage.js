import React from 'react'
import SinglePlace from './SinglePlace'
import { places } from '../../data/data'

class PlacePage extends React.Component {
  render(){
    const single = places.map((business, key) => {
      return <SinglePlace place={business} key={key} />
    })
    return(
      <div className="container">
        <h2>Places</h2>
        <div className="row">
          {single}
        </div>
      </div>
    );
  }
}

export default PlacePage;
