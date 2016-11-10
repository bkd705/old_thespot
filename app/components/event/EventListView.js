import React from 'react'

import EventListItem from './EventListItem'

class EventListView extends React.Component {
  render(){
    return(
      <div className="wrapper">
        <EventListItem />
      </div>
    )
  }
}

export default EventListView
