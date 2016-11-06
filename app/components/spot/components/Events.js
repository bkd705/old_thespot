import React from 'react'
import { events } from '../../../data/data'

class Events extends React.Component {
  render(){
    const event = events.map((event, key) => {
      if(event.business_id == this.props.id) {
        return (
          <div className="single-event">
            <p>Date: {event.date} at <em>{event.time}</em></p>
            <p>Event Type: {event.type}</p>
            <p>{event.description}</p>
          </div>
        )
      }
    })
    return(
      <div className="place-event">
        {event}
      </div>
    )
  }
}

export default Events
