'use strict';

var utils = require('../utils/writer.js');
var Alarm = require('../service/AlarmService');

module.exports.get_alarm_status = function get_alarm_status (req, res, next) {
  var username = req.swagger.params['username'].value;
  var zone_id = req.swagger.params['zone_id'].value;
  Alarm.get_alarm_status(username,zone_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modify_alarm_status = function modify_alarm_status (req, res, next) {
  var alarm_status = req.swagger.params['alarm_status'].value;
  var username = req.swagger.params['username'].value;
  var zone_id = req.swagger.params['zone_id'].value;
  Alarm.modify_alarm_status(alarm_status,username,zone_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
