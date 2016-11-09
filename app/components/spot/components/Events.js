import React from 'react'
import { events } from '../../../data/data'

class Events extends React.Component {
  render(){
    const event = events.map((event, key) => {
      if(event.business_id == this.props.id) {
        return (
            <li className="events__item" key={key}>
              <span className="events__date-container"><span className="date--month">{event.month}</span><span className="date--number">{event.day}</span></span>
              <div className="event__details">
                <p className="event__name">{event.title}</p>
                <p className="event__desc">{event.description}</p>
              </div>
            </li>
        )
      }
    })
    return(
      <ul className="events__list">
        {event}
      </ul>
    )
  }
}

export default Events
