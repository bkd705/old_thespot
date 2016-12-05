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


/** GET REQUEST - Get all Events **/
router.get('/all', function(req, res) {
    Event.find({}, function(err, events) {
        err ? console.log(err) : res.send({
            events
        });
    });
}); //END OF GET

/** GET REQUEST - Get all Events by spot ID **/
router.get('/spot/:id', function(req, res) {
    Event.find({
        'spotId': '58237a7830c9f66ecbe4ad74' // Fix this, its hardcoded ayylmao
    }, function(err, events) {
        err ? console.log(err) : res.send({
            events
        });
    });
}); //END OF GET


/** GET REQUEST - Get specific event by event ID**/
router.get('/:id', function(req, res) {
    Event.findById(req.params.id, function(err, event) {
        err ? console.log(err) : res.send({
            event
        });
    })
});

/** POST REQUEST - Create New Event **/
router.post('/create', function(req, res) {
    console.log('-----Event Creation Endpoint------');
    var __event = req.body;
    Spot.findOne({
        "_id": __event.spotId
    }, function(err, spot) {
        if (err) {
            console.log(err);
        }
        if (spot) {
            var newEvent = Event({
                spotId: __event.spotId,
                title: __event.title,
                description: __event.description,
                cost: __event.cost,
                date: __event.date
            });
            newEvent.save(function(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Event Added!');
                    res.send({
                        message: "Event: " + newEvent.title + " added to " + spot.name + " successfully"
                    })
                }
            });
        } else {
            console.log("Error - Unable to find matching spot ID");
            res.send({
                message: "Error - Unable to find matching spot ID"
            })
        }
    });

}); //END OF POST

/** PUT REQUEST - Update an Event **/
router.put('/update', function(req, res) {
            var __event = req.body;
            console.log(__event);
            Event.update({
                    "_id": __event._id
                }, __event,function(err) {
                    if (err) {
                        console.log(err);
                        if (err.name === 'MongoError' && err.code === 11000) {
                            // Duplicate spot error
                            return res.status(500).send({
                                succes: false,
                                message: 'Event already exists!'
                            });
                        }
                        // Some other error
                        return res.status(500).send(err);
                    } else {
                        console.log(__event.title + " updated successfully");
                        res.send({
                            message: __event.title + " updated successfully"
                        })
                    }
                })
            })
        //END OF PUT

        /** DELETE REQUEST - Delete an Event **/
router.delete('/delete/:id',function(req,res){

    Event.remove({"_id":req.params.id}, function(err){
        err ? console.log(err) : res.send({
            message: 'Event deleted successfully'
        });
    })
})
        //END OF DELETE

        module.exports = router;
