import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'

export function validateReview(data) {
  let errors = {}

  if(Validator.isEmpty(data.title)) {
    errors.title = 'This field cannot be empty!'
  }
  if(Validator.isEmpty(data.author)) {
    errors.author = 'This field cannot be empty!'
  }
  if(Validator.isEmpty(data.email)) {
    errors.email = 'This field cannot be empty!'
  }
  if(Validator.isEmpty(data.rating)) {
    errors.rating = 'This field cannot be empty!'
  }
  if(Validator.isEmpty(data.body)) {
    errors.body = 'This field cannot be empty!'
  }
  if(!Validator.isEmail(data.email)) {
    errors.email = 'This is not a valid email!'
  }
  if(!Validator.matches(data.rating, /^[0-9]{2}$/)) {
    errors.rating = 'Please enter a valid number between 1-10'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
