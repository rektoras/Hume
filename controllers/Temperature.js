'use strict';

var utils = require('../utils/writer.js');
var Temperature = require('../service/TemperatureService');

module.exports.get_temp = function get_temp (req, res, next) {
  var username = req.swagger.params['username'].value;
  var zone_id = req.swagger.params['zone_id'].value;
  Temperature.get_temp(username,zone_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modify_temp = function modify_temp (req, res, next) {
  var temperature_status = req.swagger.params['temperature_status'].value;
  var username = req.swagger.params['username'].value;
  var zone_id = req.swagger.params['zone_id'].value;
  Temperature.modify_temp(temperature_status,username,zone_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
