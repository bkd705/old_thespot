import React from 'react'
import { getReviews } from '../../actions/reviewActions'
import ReviewsList from './ReviewsList'
import ReviewsForm from './ReviewsForm'
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

  render() {
    return (
      <div className="reviews-container">
        <ReviewsList reviews={this.state.reviews} />
        <ReviewsForm spotId={this.props.spotId}/>
      </div>
    )
  }
}

export default connect(null, { getReviews })(ReviewsContainer)
