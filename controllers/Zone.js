'use strict';

// Importing necessary modules and services
var utils = require('../utils/writer.js');
var Zone = require('../service/ZoneService');

// Controller function to add a new zone
module.exports.add_zone = function add_zone (req, res) {
  // Extracting parameters from the request
  var username = req.swagger.params['username'].value;
  var body = req.swagger.params['Body'].value;
  
  // Calling the corresponding service function
  Zone.add_zone(username, body)
    .then(function (response) {
      // Writing the JSON response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Writing the JSON response in case of an error
      utils.writeJson(res, response);
    });
};

// Controller function to delete a zone
module.exports.delete_zone = function delete_zone (req, res) {
  // Extracting parameters from the request
  var username = req.swagger.params['username'].value;
  var zone_id = req.swagger.params['zone_id'].value;
  
  // Calling the corresponding service function
  Zone.delete_zone(username, zone_id)
    .then(function (response) {
      // Writing the JSON response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Writing the JSON response in case of an error
      utils.writeJson(res, response);
    });
};

// Controller function to get details of a specific zone
module.exports.get_zone = function get_zone (req, res) {
  // Extracting parameters from the request
  var username = req.swagger.params['username'].value;
  var zone_id = req.swagger.params['zone_id'].value;
  
  // Calling the corresponding service function
  Zone.get_zone(username, zone_id)
    .then(function (response) {
      // Writing the JSON response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Writing the JSON response in case of an error
      utils.writeJson(res, response);
    });
};

// Controller function to get all zones for a user
module.exports.get_zones = function get_zones (req, res) {
  // Extracting parameters from the request
  var username = req.swagger.params['username'].value;
  
  // Calling the corresponding service function
  Zone.get_zones(username)
    .then(function (response) {
      // Writing the JSON response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Writing the JSON response in case of an error
      utils.writeJson(res, response);
    });
};
