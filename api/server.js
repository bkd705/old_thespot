'use strict';

var express = require('express');
var port = 3000;
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var webpack = require('webpack')
var webpackMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var webpackConfig = require('./../webpack.config.dev')

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//Webpack middleware
app.use(express.static(path.join(__dirname, 'public/')));

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}))

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

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
})

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
