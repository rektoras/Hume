'use strict';

var utils = require('../utils/writer.js');
var ContactDevs = require('../service/ContactDevsService');

module.exports.contact_devs = function contact_devs (req, res, next) {
  var fullname = req.swagger.params['fullname'].value;
  var email = req.swagger.params['email'].value;
  var text_message = req.swagger.params['text_message'].value;
  var username = req.swagger.params['username'].value;
  ContactDevs.contact_devs(fullname,email,text_message,username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
