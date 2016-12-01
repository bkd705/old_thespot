import React from 'react'

import SpotListView from './spot/list/SpotListView'

class Index extends React.Component {
  render(){
    return(
      <div className="wrapper">
        <SpotListView />
      </div>
    );
  }
}

export default Index;
