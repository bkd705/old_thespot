import React from 'react'
import { connect } from 'react-redux'
import { addFlashMessage } from '../../actions/flashMessages'
import { deleteSpot } from '../../actions/spotActions'

import Hours from './components/Hours'
import Features from './components/Features'
import Events from './components/Events'

class SpotView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      spotId: ''
    }

    this.onClick = this.onClick.bind(this)
  }

  componentDidMount() {
    const { spotId } = this.props.params
    if(this.state.spotId == '') {
      this.state.spotId = spotId
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
    const { spotId } = this.props.params;
    const i = this.props.spots.findIndex(spot => spot._id === spotId)
    const spot = this.props.spots[i];
    const ftlist = spot.features.split(',');
    const style = {
      background: `url('../assets/img/large/${spot.name.toLowerCase().split(' ').join('')}large.jpg') no-repeat`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
    return(
      <div className="wrapper">
        <section className="featured__large" style={style}>
          <div className="featured__desc">
            <h3>{spot.name}</h3>
            <p>With {ftlist[0]}, {ftlist[1]} and more, {spot.name} is the perfect place for you and your friends to hangout!</p>
          </div>
        </section>
        <div className="row">
          <section className="spot__description grid-half">
            <h6>Hours</h6>
            <Hours id={spotId} data={spot}/>
            <h6>Features</h6>
            <Features id={spotId} data={spot.features} />
          </section>
          <section className="spot__events grid-half">
            <h6>Upcoming Events</h6>
            <Events id={spotId} />
          </section>
        </div>
        <button className="btn btn-danger" onClick={this.onClick}>Delete Spot</button>
      </div>
    )
  }
}

SpotView.contextTypes = {
  router: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    spots: state.spots
  }
}

export default connect(mapStateToProps, { deleteSpot, addFlashMessage })(SpotView)
