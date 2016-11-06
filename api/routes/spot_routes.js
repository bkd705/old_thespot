/*This file is for all CRUD routing for business Spots*/
'use strict';

//express router
var express = require('express');
var router = express.Router();

//Schema requirements
var Spot = require('../models/spots.js');

//db requirements
var mongoose = require('mongoose');
var db = mongoose.connection;

//tester spot creation
var testSpot = Spot({
  name: 'Kenzingtons',
  phoneNumber: '1(705)705-7055',
  address: '1 Dunlop St East',
  city: 'Barrie',
  province: 'Ontario',
  postalCode: 'L4M4ML',
  features: ['Bar', 'Band', 'Patio'],
  featured: false
});

//tester spot creation
var testSpot2 = Spot({
  name: 'Kings Arms',
  phoneNumber: '1(905)905-9055',
  address: '1 Lakeshre Rd East',
  city: 'Oakville',
  province: 'Ontario',
  postalCode: 'L6L-6L6',
  features: ['Bar', 'Occassional Band', 'Pool Table', 'Patio'],
  featured: false
});

// testSpot2.save(function(err){
//     if(err){
//     console.log(err)
//   }else{
//     console.log('Business Spot Added!');
//   }
// });

//Get All Spots
router.get('/all', function(req, res){
  Spot.find({}, function(err, spots){
    err ? console.log(err) : res.json(spots);
  });
});



module.exports = router;
