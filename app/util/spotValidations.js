import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'

export function validateNewSpot(data) {
  let errors = {}
  console.log('new spot validator')

  if(Validator.isEmpty(data.name)) {
    errors.name = 'Field cannot be empty!'
  }
  if(Validator.isEmpty(data.phoneNumber)) {
    errors.phoneNumber = 'Field cannot be empty!'
  }
  if(Validator.isEmpty(data.address)) {
    errors.address = 'Field cannot be empty!'
  }
  if(Validator.isEmpty(data.city)) {
    errors.city = 'Field cannot be empty!'
  }
  if(Validator.isEmpty(data.province)) {
    errors.province = 'Field cannot be empty!'
  }
  if(Validator.isEmpty(data.postalCode)) {
    errors.postalCode = 'Field cannot be empty!'
  }
  if(Validator.isEmpty(data.features)) {
    errors.features = 'Field cannot be empty!'
  }
  if(!Validator.matches(data.phoneNumber, /^(\+\d{1,2}\s)?\(?\d{3}\)?\d{3}?\d{4}$/)) {
    errors.phoneNumber = 'Not a valid phone number, please enter 9 digit number with no special characters! (ie. 1112223333)'
  }
  if(!Validator.matches(data.postalCode, /[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]\d[ABCEGHJKLMNPRSTVWXYZ]\d/)) {
    errors.postalCode = 'Not a valid postal code, please enter all uppercase, no spaces or special characters! (ie. L9Y4N7)'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
