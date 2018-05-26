// Dependencies
var path = require('path');
var express = require('express');
var bodyParser = require("body-parser");

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Router
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Listener
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});
