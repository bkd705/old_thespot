import React from 'react'
import SpotListItem from './SpotListItem'
import Search from './components/Search'

import { places } from '../../data/data'


class SpotListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      spots: places,
      filteredSpots: places
    };
  }

  checkExists(arr, name) {
    console.log('check')
    for(let i=0; i < arr.length; i++) {
      if (arr[i].name == name) {
        console.log('exists')
        return false;
      } else {
        return true;
      }
    }
  }

  doSearch(queryText) {
    let queryResult = []
    queryText = queryText.toLowerCase()
    this.state.spots.forEach(spot => {
      if(spot.name.toLowerCase().indexOf(queryText) != -1) {
        queryResult.push(spot)
      }
    })

    this.state.spots.forEach(spot => {
      spot.features.forEach(ft => {
        if(ft.toLowerCase().indexOf(queryText) != -1){
          queryResult.push(spot)
        }
      })
    })

    if(queryText == '') {
      queryResult = places
    }

    this.setState({
      query: queryText,
      filteredSpots: queryResult
    })
  }
  render(){
    // const single = places.map((business, key) => {
    //   return <SpotListItem spot={business} key={key} />
    // })
    return(
      <div className="container">
        <Search query={this.state.query} doSearch={this.doSearch.bind(this)} />
        <div className="row">
          <SpotListItem spots={this.state.filteredSpots}/>
        </div>
      </div>
    );
  }
}

export default SpotListView;
