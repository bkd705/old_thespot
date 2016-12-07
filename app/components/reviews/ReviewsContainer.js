import React from 'react'
import { getReviews } from '../../actions/reviewActions'
import ReviewsList from './ReviewsList'
import { connect } from 'react-redux'

class ReviewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
  }

  componentWillMount() {
    this.props.getReviews(this.props.spotId).then(res => {
      this.setState({
        reviews: res
      })
    }).catch(err => {
      console.log(err)
    })
  }

  render(){
    return(
      <div className="reviews-container">
        <ul className="reviews">
          <ReviewsList reviews={this.state.reviews} />
        </ul>
      </div>
    )
  }
}

export default connect(null, { getReviews })(ReviewsContainer)
