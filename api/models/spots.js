/*This is a schema for a business spot object.
Each business will require a name, address, phone number and
an optional array of events they are hosting.*/
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var spotSchema = new Schema({

  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true
  },
  province: {
    type: String,
    required: true
  },
  postalCode: {
    type: String,
    required: true
  },
  features: {
    type: String,
    required: true
  },
  featured: {
    type: Boolean,
    required: true
  },
  events: []
});

var Spot = mongoose.model('spotSchema', spotSchema);

module.exports = Spot;
