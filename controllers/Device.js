'use strict';

// Importing necessary modules and services
var utils = require('../utils/writer.js');
var Device = require('../service/DeviceService');

// Controller function to add a new device
module.exports.add_device = function add_device (req, res, next) {
  // Extracting parameters from the request
  var username = req.swagger.params['username'].value;
  var body = req.swagger.params['Body'].value;
  
  // Calling the corresponding service function
  Device.add_device(username, body)
    .then(function (response) {
      // Writing the JSON response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Writing the JSON response in case of an error
      utils.writeJson(res, response);
    });
};

// Controller function to delete a device
module.exports.delete_device = function delete_device (req, res, next) {
  // Extracting parameters from the request
  var username = req.swagger.params['username'].value;
  var device_id = req.swagger.params['device_id'].value;
  
  // Calling the corresponding service function
  Device.delete_device(username, device_id)
    .then(function (response) {
      // Writing the JSON response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Writing the JSON response in case of an error
      utils.writeJson(res, response);
    });
};

// Controller function to get details of a specific device
module.exports.get_device = function get_device (req, res, next) {
  // Extracting parameters from the request
  var username = req.swagger.params['username'].value;
  var device_id = req.swagger.params['device_id'].value;
  
  // Calling the corresponding service function
  Device.get_device(username, device_id)
    .then(function (response) {
      // Writing the JSON response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Writing the JSON response in case of an error
      utils.writeJson(res, response);
    });
};

// Controller function to get all devices for a user
module.exports.get_devices = function get_devices (req, res, next) {
  // Extracting parameters from the request
  var username = req.swagger.params['username'].value;
  
  // Calling the corresponding service function
  Device.get_devices(username)
    .then(function (response) {
      // Writing the JSON response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Writing the JSON response in case of an error
      utils.writeJson(res, response);
    });
};

// Controller function to update the status of a device
module.exports.update_device = function update_device (req, res, next) {
  // Extracting parameters from the request
  var device_status = req.swagger.params['device_status'].value;
  var username = req.swagger.params['username'].value;
  var device_name = req.swagger.params['device_name'].value;
  var body = req.swagger.params['Body'].value;
  
  // Calling the corresponding service function
  Device.update_device(device_status, username, device_name, body)
    .then(function (response) {
      // Writing the JSON response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Writing the JSON response in case of an error
      utils.writeJson(res, response);
    });
};
