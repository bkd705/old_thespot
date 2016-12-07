const express = require('express'),
      mongoose = require('mongoose')

const app = express(),
      db = mongoose.connection

const Review = require('../models/reviews')

app.get('/all', (req, res) => {
  Review.find({}, (err, reviews) => {
    err ? console.log(err) : res.send({ reviews })
  })
})

app.get('/:spotId', (req, res) => {
  const spotId = req.params.spotId
  Review.find({ "spotId": spotId }, (err, reviews) => {
    err ? console.log(err) : res.send({ reviews })
  })
})

app.post('/create', (req, res) => {
  const __review = req.body
  const newReview = Review({
    spotId: __review.spotId,
    author: __review.author,
    email: __review.email,
    rating: __review.rating,
    title: __review.title,
    body: __review.body
  })
  newReview.save(err => {
    err ? console.log(err) : res.send({ type: 'success', message: 'Review saved successfully!' })
  })
})

app.delete('/delete/:id', (req, res) => {
  const id = req.params.id
  Review.remove({'_id': req.params.id}, err => {
    err ? console.log(err) : res.send({ type: 'success', message: 'Review deleted successfully!' })
  })
})

module.exports = app
