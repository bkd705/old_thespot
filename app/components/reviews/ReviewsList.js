import React from 'react'

export default function ReviewsList({ reviews }) {

  const noReviews = (
    <p>No reviews for this spot! If you've been, you should add one!</p>
  )

  const reviewsList = reviews.map((review, key) => {
    return (
      <li className="review-item" key={key} style={{listStyle: 'none'}}>
        <h6 style={{fontSize: 18, color: '#2c2c2c'}}>{review.title}</h6>
        <p><strong>Rating: </strong> {review.rating}<span>/10</span></p>
        <p><strong>Author: </strong> {review.author}</p>
        <p>{review.body}</p>
      </li>
    )
  })

  return (
    <ul className="reviews-list">
      { reviews.length === 0 ? noReviews : reviewsList }
    </ul>
  )
}
