import React from 'react'
import Features from './components/Features'
import Reviews from './components/Reviews'

class SpotView extends React.Component {
  render(){
      const { spot } = this.props
      const features = spot.features.split(',');
      const style = {
        background: `url('../assets/img/large/${spot.name.toLowerCase().split(' ').join('').replace(/[^\w\s]/gi, '')}large.jpg') no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
      return(
        <div className="wrapper">
          <section className="featured__large" style={style}>
            <div className="featured__desc">
              <h3>{spot.name}</h3>
              <p>With {features[0]}, {features[1]} and more, {spot.name} is the perfect place for you and your friends to hangout!</p>
            </div>
          </section>
          <div className="row">
            <section className="spot__description grid-half">
              <h6>Features</h6>
              <Features data={spot.features} />
            </section>
            <section className="spot__events grid-half">
              <h6>Reviews</h6>
              <Reviews spot={spot} />
            </section>
          </div>
          <button className="btn btn-danger" onClick={this.props.onClick}>Delete Spot</button>
        </div>
    )
  }
}

export default SpotView
