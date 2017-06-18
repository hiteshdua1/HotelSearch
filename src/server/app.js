'use strict';

var express = require('express');
var path = require('path');
var config = require('./config/app-config');

var searchController = require('./controllers/search-controller')

// Initiate Express App	
var app = express();

app.use(express.static(path.join(__dirname,'../client')));
app.get('/getHotel', searchController.fetchHotels);


// Start Express server
var port = process.env.PORT || config.app.port ;

var appserver = app.listen(port, function () {
    console.log("Running on PORT : " + port);
});

