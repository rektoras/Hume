'use strict';

// Importing necessary modules and services
var utils = require('../utils/writer.js');
var Alarm = require('../service/AlarmService');

// Controller function to get the alarm status for a specific zone
module.exports.get_alarm_status = function get_alarm_status (req, res) {
  // Extracting parameters from the request
  var username = req.swagger.params['username'].value;
  var zone_id = req.swagger.params['zone_id'].value;
  
  // Calling the corresponding service function
  Alarm.get_alarm_status(username, zone_id)
    .then(function (response) {
      // Writing the JSON response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Writing the JSON response in case of an error
      utils.writeJson(res, response);
    });
};

// Controller function to modify the alarm status for a specific zone
module.exports.modify_alarm_status = function modify_alarm_status (req, res) {
  // Extracting parameters from the request
  var alarm_status = req.swagger.params['alarm_status'].value;
  var username = req.swagger.params['username'].value;
  var zone_id = req.swagger.params['zone_id'].value;
  
  // Calling the corresponding service function
  Alarm.modify_alarm_status(alarm_status, username, zone_id)
    .then(function (response) {
      // Writing the JSON response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Writing the JSON response in case of an error
      utils.writeJson(res, response);
    });
};
