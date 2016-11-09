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


/** GET REQUEST - Get all Spots **/
router.get('/all', function(req, res) {
    Event.find({}, function(err, events) {
        err ? console.log(err) : res.send({events});
    });
});//END OF GET


/** POST REQUEST - Create New Event **/
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

        //Save newEvent to Events collection
        newEvent.save(function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log('Event Added!');
                //Find the spot with the spotId value from newEvent
                Spot.findOne({
                        "_id": newEvent.spotId
                    })
                    .then(function(spot) {
                        //add new event to the spot found's array of events
                        spot.events.push(newEvent);
                        //update spot with new changes
                        Spot.update({
                            "_id": newEvent.spotId
                        }, spot, {}, function(err) {
                            if (err) {
                                console.log(err);
                            } else {
                                res.send({
                                    message: "Event added to spot successfully"
                                })
                                console.log('Event added to spot!');
                            }
                        });
                    });
            }
        });
    });
});//END OF POST

/** PUT REQUEST - Update an Event **/

//END OF PUT

/** DELETE REQUEST - Delete an Event **/

//END OF DELETE

module.exports = router;
