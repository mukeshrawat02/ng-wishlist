
// call the packages we need
var express = require('express');       //call express
var app = express();                   //define our app using express
var port = process.env.PORT || 8080;  //set our port

// call the controllers
var controllers = require("./api/controllers");
controllers.init(app);

// START THE SERVER
app.listen(port);
console.log('favLister Server is running on port ' + port);

