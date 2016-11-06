/*This is a schema for a business place object.
Each business will require a name, address, phone number and
an optional array of events they are hosting.*/
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var placeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
  }
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true
  },
  postalCode: {
    type: String,
    required: true
  },
  events: []
});

var Place = mongoose.model('placeSchema', placeSchema);

module.exports = Place;
