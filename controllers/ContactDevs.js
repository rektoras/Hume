'use strict';

// Importing necessary modules and services
var utils = require('../utils/writer.js');
var ContactDevs = require('../service/ContactDevsService');

// Controller function to contact developers
module.exports.contact_devs = function contact_devs (req, res, next) {
  // Extracting parameters from the request
  var fullname = req.swagger.params['fullname'].value;
  var email = req.swagger.params['email'].value;
  var text_message = req.swagger.params['text_message'].value;
  var username = req.swagger.params['username'].value;
  
  // Calling the corresponding service function
  ContactDevs.contact_devs(fullname, email, text_message, username)
    .then(function (response) {
      // Writing the JSON response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Writing the JSON response in case of an error
      utils.writeJson(res, response);
    });
};
