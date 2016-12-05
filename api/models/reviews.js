const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
  spotId: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
})

const Review = mongoose.model('reviewSchema', reviewSchema);

module.exports = Review
