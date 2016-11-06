import React from 'react'

import Featured from './spot/components/Featured'
import Search from './search/Search'
import SpotPage from './spot/SpotPage'

class Index extends React.Component {
  render(){
    return(
      <div className="wrapper">
        <Featured />
        <Search />
        <SpotPage />
      </div>
    );
  }
}

export default Index;
