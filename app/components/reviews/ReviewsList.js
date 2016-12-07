import React from 'react'

export default function ReviewsList({ reviews }) {

  const noReviews = (
    <p>No reviews for this spot! If you've been, you should add one!</p>
  )

  const reviewsList = reviews.map((review, key) => {
    return (
      <li className="review-item" key={key}>
        <h6 style={{fontSize: 14, color: '#2c2c2c'}}>{review.title}</h6>
        <p>{review.body}</p>
      </li>
    )
  })

  return (
    <div>
      { reviews.length === 0 ? noReviews : reviewsList }
    </div>
  )
}
