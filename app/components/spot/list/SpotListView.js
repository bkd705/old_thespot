import React from 'react'
import SpotListItem from './SpotListItem'
import Search from './../components/Search'
import { connect } from 'react-redux'
import { getSpots } from '../../../actions/spotActions'
import store from '../../../store'

class SpotListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      query: '',
      spots: [],
      filteredSpots: []
    };
  }

  componentWillMount() {
    if(this.props.spots.length === 0) {
      this.props.getSpots()
    }
    if(this.state.spots.length === 0) {
      this.setState({
        isLoading: false,
        spots: this.props.spots,
        filteredSpots: this.props.spots
      })
    }
  }

  componentDidUpdate() {
    if(this.state.spots.length != this.props.spots.length){
      this.setState({
        isLoading: false,
        spots: this.props.spots,
        filteredSpots: this.props.spots
      })
    }
  }

  doSearch(queryText) {
    let queryResult = []
    queryText = queryText.toLowerCase()
    this.state.spots.forEach(spot => {
      if(spot.name.toLowerCase().indexOf(queryText) != -1) {
        const found = queryResult.some(a => { return a.name === spot.name })
        if(!found) { queryResult.push(spot) }
      }
    })

    this.state.spots.forEach(spot => {
      spot.features.split(',').forEach(ft => {
        if(ft.toLowerCase().indexOf(queryText) != -1){
          const found = queryResult.some(a => { return a.name === spot.name })
          if(!found) { queryResult.push(spot) }
        }
      })
    })

    if(queryText == '') {
      queryResult = this.state.spots
    }

    this.setState({
      query: queryText,
      filteredSpots: queryResult
    })
  }
  render(){
    const loading = (
      <p>Loading...</p>
    )
    return(
      <div>
        <Search query={this.state.query} doSearch={this.doSearch.bind(this)} />
        { this.state.isLoading ? loading : <SpotListItem spots={this.state.filteredSpots}/>}
      </div>
    );
  }
}

SpotListView.propTypes = {
  spots: React.PropTypes.array.isRequired,
  filteredSpots: React.PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    spots: state.spots,
    filteredSpots: state.spots
  }
}

export default connect(mapStateToProps, { getSpots })(SpotListView);
