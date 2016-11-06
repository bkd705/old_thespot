import React from 'react'
import { reviews } from '../../../data/data'

class Reviews extends React.Component {
  render(){
    const review = reviews.map((review, key) => {
      if(review.business_id == this.props.id) {
        return (
          <div className="place-review">
            <p>Author: <strong>{review.author}</strong></p>
            <p>{review.description}</p>
          </div>
        )
      }
    })
    return(
      <div className="place-reviews">
        {review}
      </div>
    )
  }
}

export default Reviews
