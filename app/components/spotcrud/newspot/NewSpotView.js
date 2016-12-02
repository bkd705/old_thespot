import React from 'react'
import NewSpotForm from './NewSpotForm'

class NewSpotView extends React.Component {
  render(){
    return(
      <div className="wrapper">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <NewSpotForm />
          </div>
        </div>
      </div>
    );
  }
}

export default NewSpotView;
