/*This is a schema for a business places hosted event.
Each event will contain a title, business ID, brief description, cost and date */
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  spotId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true
  }

});

var Event = mongoose.model('eventSchema', eventSchema);

module.exports = Event;
