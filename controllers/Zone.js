'use strict';

var utils = require('../utils/writer.js');
var Zone = require('../service/ZoneService');

module.exports.add_zone = function add_zone (req, res, next) {
  var username = req.swagger.params['username'].value;
  var body = req.swagger.params['Body'].value;
  Zone.add_zone(username,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.delete_zone = function delete_zone (req, res, next) {
  var username = req.swagger.params['username'].value;
  var zone_id = req.swagger.params['zone_id'].value;
  Zone.delete_zone(username,zone_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_zone = function get_zone (req, res, next) {
  var username = req.swagger.params['username'].value;
  var zone_id = req.swagger.params['zone_id'].value;
  Zone.get_zone(username,zone_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_zones = function get_zones (req, res, next) {
  var username = req.swagger.params['username'].value;
  Zone.get_zones(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
