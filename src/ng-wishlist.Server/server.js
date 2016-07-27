// call the packages we need
var express = require('express');       //call express
var app = express();                   //define our app using express
var bodyParser = require('body-parser');
var config = require('./config');
var data = require('./data');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

data.init(config);

// get an instance of the express Router
var router = express.Router();

// call the controllers
var controllers = require("./api/controllers");
// map the routes
controllers.init(router);

// register our routes -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// start the server -------------------------------
app.listen(config.port);
console.log('favLister Server is running on port ' + config.port);

