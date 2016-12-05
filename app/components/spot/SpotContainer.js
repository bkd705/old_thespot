import React from 'react'
import { connect } from 'react-redux'
import { addFlashMessage } from '../../actions/flashMessages'
import { deleteSpot } from '../../actions/spotActions'

import SpotView from './SpotView'

class SpotContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      spot: {},
      spotId: ''
    }

    this.onClick = this.onClick.bind(this)
  }

  componentWillMount() {
    if(this.props.spots.length != 0) {
      const i = this.props.spots.findIndex(spot => spot._id === this.props.params.spotId)
      const spot = this.props.spots[i]
      this.setState({
        spot: spot,
        spotId: this.props.params.spotId,
        isLoading: false
      })
    }
  }

  componentDidUpdate(prevProps) {
    if(this.state.spot.name === undefined) {
      const { spotId } = this.props.params
      const i = this.props.spots.findIndex(spot => spot._id === spotId)
      const spot = this.props.spots[i]
      this.setState({
        isLoading: false,
        spot: spot,
        spotId: spotId
      })
    }
  }

  onClick() {
    this.props.deleteSpot(this.state.spotId).then(res => {
      console.log(res)
      if(res.data.message) {
        this.props.addFlashMessage({
          type: 'success',
          text: res.data.message
        })
        this.context.router.push('/')
      } else {
        this.props.addFlashMessage({
          type: 'error',
          text: 'An error occurred, please try again!'
        })
      }
    })
  }

  render(){
    const loading = (
      <p>Spot is loading...</p>
    )
    return (
      <div>
        {this.state.isLoading ? loading : <SpotView spot={this.state.spot} onClick={this.onClick}/>}
      </div>
    )
  }
}

SpotContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    spots: state.spots
  }
}

export default connect(mapStateToProps, { deleteSpot, addFlashMessage })(SpotContainer)
