'use strict';

var utils = require('../utils/writer.js');
var Device = require('../service/DeviceService');

module.exports.add_device = function add_device (req, res, next) {
  var username = req.swagger.params['username'].value;
  var body = req.swagger.params['Body'].value;
  Device.add_device(username,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.delete_device = function delete_device (req, res, next) {
  var username = req.swagger.params['username'].value;
  var device_id = req.swagger.params['device_id'].value;
  Device.delete_device(username,device_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_device = function get_device (req, res, next) {
  var username = req.swagger.params['username'].value;
  var device_id = req.swagger.params['device_id'].value;
  Device.get_device(username,device_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_devices = function get_devices (req, res, next) {
  var username = req.swagger.params['username'].value;
  Device.get_devices(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.update_device = function update_device (req, res, next) {
  var device_status = req.swagger.params['device_status'].value;
  var username = req.swagger.params['username'].value;
  var device_name = req.swagger.params['device_name'].value;
  var body = req.swagger.params['Body'].value;
  Device.update_device(device_status,username,device_name,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
