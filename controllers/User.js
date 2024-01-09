'use strict';

// Importing necessary modules and services
var utils = require('../utils/writer.js');
var User = require('../service/UserService');

// Controller function to create a new user
module.exports.create_user = function create_user (req, res) {
  // Extracting parameters from the request
  var body = req.swagger.params['Body'].value;
  
  // Calling the corresponding service function
  User.create_user(body)
    .then(function (response) {
      // Writing the JSON response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Writing the JSON response in case of an error
      utils.writeJson(res, response);
    });
};

// Controller function to get details of a specific user
module.exports.get_user = function get_user (req, res) {
  // Extracting parameters from the request
  var username = req.swagger.params['username'].value;
  
  // Calling the corresponding service function
  User.get_user(username)
    .then(function (response) {
      // Writing the JSON response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Writing the JSON response in case of an error
      utils.writeJson(res, response);
    });
};
