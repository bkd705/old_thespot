import React from 'react'

import Featured from './spot/components/Featured'
import SpotListView from './spot/SpotListView'

class Index extends React.Component {
  render(){
    return(
      <div className="wrapper">
        <Featured />
        <SpotListView />
      </div>
    );
  }
}

export default Index;
