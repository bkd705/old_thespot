import React from 'react'

import Hours from './components/Hours'
import Features from './components/Features'
import Events from './components/Events'

import { places } from '../../data/data'

class SingleSpotPage extends React.Component {
  render(){
    const { spotId } = this.props.params;
    const i = places.findIndex(spot => spot.id === spotId)
    const spot = places[i];
    return(
      <div className="wrapper">
        <section className="featured__large">
          <div className="featured__desc">
            <h3>{spot.name}</h3>
            <p>Flying Monkeys craft brewery in the downtown core of Barrie is a hotspot for craft beer enthusiasts. With great food, wifi and of course beer, this place is the perfect spot for you and your friends to hangout!</p>
          </div>
        </section>
        <div className="row">
          <section className="spot__description grid-half">
            <h6>Hours</h6>
            <Hours id={spotId} data={spot}/>
            <h6>Features</h6>
            <Features id={spotId} data={spot.features} />
          </section>

          <section className="spot__events grid-half">
            <h6>Upcoming Events</h6>
            <Events id={spotId} />
          </section>
        </div>

      </div>
    )
  }
}

export default SingleSpotPage
