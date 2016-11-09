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

/** GET REQUEST - Get All Spots **/
router.get('/all', function(req, res) {
    Spot.find({}, function(err, spots) {
        err ? console.log(err) : res.send({spots});
    });
}); //END OF GET

/** POST REQUEST - Create New Spot **/
router.post('/create', function(req, res) {
        //create spot from data sent
        var __spot = Spot({
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address,
            city: req.body.city,
            province: req.body.province,
            postalCode: req.body.postalCode,
            features: req.body.features,
            featured: req.body.featured
        });
        //save spot to db
        __spot.save(function(err) {
            if (err) {
                console.log(err);
                if (err.name === 'MongoError' && err.code === 11000) {
                    // Duplicate spot error
                    return res.status(500).send({
                        succes: false,
                        message: 'Spot already exists!'
                    });
                }
                // Some other error
                return res.status(500).send(err);
            } else {
                console.log('Spot Created!');
                res.send({
                    message: 'Spot added successfully'
                })
            }
        })
    }) //END OF POST


/* PUT REQUEST - Update Spot */
router.put('/update', function(req, res) {
    var __spot = req.body;
    Spot.findOne({
            "_id": __spot._id
        })
        .then(function(spot) {
            console.log(__spot);

            //update spot with new changes
            Spot.update({
                '_id': spot._id
            },
            {
                name: __spot.name,
                phoneNumber: __spot.phoneNumber,
                address: __spot.address,
                city: __spot.city,
                province: __spot.province,
                postalCode: __spot.postalCode,
                features: __spot.features,
                featured: __spot.featured
            },function(err) {
                if (err) {
                    console.log(err);
                    if (err.name === 'MongoError' && err.code === 11000) {
                        // Duplicate spot error
                        return res.status(500).send({
                            succes: false,
                            message: 'Spot already exists!'
                        });
                    }
                    // Some other error
                    return res.status(500).send(err);
                } else {
                    res.send({
                        message: __spot.name + " Updated successfully"
                    })
                    console.log(__spot.name + ' Updated!');
                }
            });
        });
});
//END OF PUT

/* DELETE REQUEST - Delete Spot */
router.delete('/delete', function(req,res){
    var __spot = req.body;

    Spot.remove({_id:__spot._id},function(err){
        if(err){
            console.log(err);
            return res.status(500).send(err);
        }else{
            res.send({
                message: __spot.name + " Deleted Successfully"
            })
        }
    })
});

//END OF DELETE
module.exports = router;
