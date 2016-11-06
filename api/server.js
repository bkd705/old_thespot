'use strict';

var express = require('express');
var port = 3000;
var app = express();

app.use(express.static(_dirname + './../app/'));

//Routes
var place_routes = require('./routes/place_routes.js');
var event_routes = require('./routes/event_routes.js');
//Host connection
app.listen(port, function(){
  console.log('Listening on Port: ' + port);
  console.log('Stop Server with CTRL + C');
})
