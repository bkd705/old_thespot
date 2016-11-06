/*This file is for all CRUD routing for business places*/

'use strict';

//express router
var express = require('express');
var router = express.Router();

//Schema requirements
var Spot = require('../models/spots.js');
var Event = require('../models/events.js');

//db requirements
var mongoose = require('mongoose');
var db = mongoose.connection;


//
// Spot.findById("581ea8c31e1b6f034c615cfe", function(err, spot){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(spot);
//   }
// });

//test Event
var testEvent1 = Event({
    spotId: '581eaddf814d403274cd6fcf',
    title: 'Bobby Playing Bass ',
    description: 'Bobby will come in and rock the bass',
    cost: '0.00',
    date: 'Saturday, January 21, 2017'
});

testEvent1.save(function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Event Added!');
        Spot.findOne({
                "_id": testEvent1.spotId
            })
            .then(function(spot) {
                spot.events.push(testEvent1);
                console.log(spot);
                Spot.update({"_id": testEvent1.spotId}, spot, {}, function(err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Event added to spot!');
                    }
                });
            });
    }
});
// creating an event
//post request will have the spot ID in the URL and I will find the spot with that ID then save the event to that spots array of events

/********************FOR BRENNEN ************************/
//don't forget pass data for event object as req.body
//Create an Event
router.post('/create', function(req, res) {
    console.log('-----Event Creation Endpoint------');
    var __event = req.body;

    Spot.findOne({
        "_id": req.body._spotId
    }).then(function(spot) {
        var newEvent = Event({
            spotId: __event.spotId,
            title: __event.title,
            description: __event.description,
            cost: __event.cost,
            date: __event.date
        });

        newEvent.save(function(err) {
            err ? console.log(err) : console.log('Event Added!');
        });
    });
});

module.exports = router;
