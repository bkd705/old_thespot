import React from 'react'

import { events } from '../../data/data'

class EventListItem extends React.Component {
  render(){
    const event = events.map((event, key) => {
      return (
          <div className="grid-third spot" key={key}>
            <span className="events__date-container"><span className="date--month">{event.month}</span><span className="date--number">{event.day}</span></span>
            <div className="event__details">
              <p className="event__name">{event.title}</p>
              <p className="event__desc">{event.description}</p>
            </div>
          </div>
      )
    })
    return(
      <div className="row">
        {event}
      </div>
    )
  }
}

export default EventListItem;
