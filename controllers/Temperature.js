'use strict';

// Importing necessary modules and services
var utils = require('../utils/writer.js');
var Temperature = require('../service/TemperatureService');

// Controller function to get the temperature for a specific zone
module.exports.get_temp = function get_temp (req, res, next) {
  // Extracting parameters from the request
  var username = req.swagger.params['username'].value;
  var zone_id = req.swagger.params['zone_id'].value;
  
  // Calling the corresponding service function
  Temperature.get_temp(username, zone_id)
    .then(function (response) {
      // Writing the JSON response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Writing the JSON response in case of an error
      utils.writeJson(res, response);
    });
};

// Controller function to modify the temperature status for a specific zone
module.exports.modify_temp = function modify_temp (req, res, next) {
  // Extracting parameters from the request
  var temperature_status = req.swagger.params['temperature_status'].value;
  var username = req.swagger.params['username'].value;
  var zone_id = req.swagger.params['zone_id'].value;
  
  // Calling the corresponding service function
  Temperature.modify_temp(temperature_status, username, zone_id)
    .then(function (response) {
      // Writing the JSON response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Writing the JSON response in case of an error
      utils.writeJson(res, response);
    });
};
