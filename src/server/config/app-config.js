'use-strict'

var config = {
    app: {
        port: 8080
    },
    placesAPI: {
        type: "geocode",
        baseUrl : "https://maps.googleapis.com/maps/api/place/autocomplete/json"
    }
};

module.exports = config;