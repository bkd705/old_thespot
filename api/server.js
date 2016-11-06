'use strict';

var express = require('express');
var port = 3000;
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//use app for frontend of application
app.use(express.static(__dirname + './../app/'));

//Database
mongoose.connect('mongodb://localhost/data/db/');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected to db at /data/db/");
});



//Routes
var spot_routes = require('./routes/spot_routes.js');
app.use('/spots', spot_routes);

var event_routes = require('./routes/event_routes.js');
app.use('/events', event_routes);

app.on('close', function() {
    console.error('dropping db');
    db.db.dropDatabase(function() {
        console.error('closing db connection');
        mongoose.connection.close();
    })
})

//Host connection
app.listen(port, function(){
  console.log('Listening on Port: ' + port);
  console.log('Stop Server with CTRL + C');
})
