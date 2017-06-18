'use strict';

var https = require('https');

var config = require('./../config/app-config');
var customHotels = require('../sample-data/hotel-data').hotels;

exports.fetchHotels = fetchHotels;

function fetchHotels(req, res) {

  var key = process.env.API_KEY;
  var type = config.placesAPI.type;
  var searchQuery = req.query.place;

  var url = config.placesAPI.baseUrl + "?key=" + key + "&input=" + searchQuery + "&types=" + type;

  https.get(url, function (response) {
    var body = '';

    response.on('data', function (chunk) {
      body += chunk;
    });

    response.on('end', function () {
      var places = JSON.parse(body);
      var predictions = places.predictions;
      
      var googlePlacesHotels = predictions.map(function (ele) {
        return ele.structured_formatting.main_text;
      });
     

      var customHotelsList = findCustomHotel(searchQuery)
      console.log(customHotelsList);
      var hotelsList = googlePlacesHotels.concat(customHotelsList); // Merges both arrays

      res.send(hotelsList);

    });
  }).on('error', function (e) {
    console.log("Got error: " + e.message);
  });
};

function findCustomHotel(key){
  console.log(key);
  var results = [];
  for (var i = 0; i < customHotels.length; i++) {
    if (customHotels[i].indexOf(key) != -1) {
      results.push(customHotels[i]);
    }
  }
  return results;
}