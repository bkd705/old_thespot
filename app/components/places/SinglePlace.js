import React from 'react'

import Reviews from './components/Reviews'
import Events from './components/Events'

class SinglePlace extends React.Component {
  render(){
      let wifi = '';
      if(this.props.place.amenities.wifi) {
        wifi = 'Wifi is available.'
      } else {
        wifi = 'Wifi is not available.'
      }
    return(
      <div className="one-half column">
        <p>{this.props.place.id}</p>
        <h3>{this.props.place.name}</h3>
        <h4>Hours: {this.props.place.location}</h4>
        <h6>{wifi}</h6>
        <Events id={this.props.place.id} />
        <Reviews id={this.props.place.id}/>
      </div>
    );
  }
}

export default SinglePlace
