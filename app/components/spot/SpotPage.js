import React from 'react'
import SingleSpot from './SingleSpot'
import { places } from '../../data/data'

class SpotPage extends React.Component {
  render(){
    const single = places.map((business, key) => {
      return <SingleSpot spot={business} key={key} />
    })
    return(
      <div className="container">
        <div className="row">
          {single}
        </div>
      </div>
    );
  }
}

export default SpotPage;
