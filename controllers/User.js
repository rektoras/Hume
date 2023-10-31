'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.create_user = function create_user (req, res, next) {
  var body = req.swagger.params['Body'].value;
  User.create_user(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_user = function get_user (req, res, next) {
  var username = req.swagger.params['username'].value;
  User.get_user(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
