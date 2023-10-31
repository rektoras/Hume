'use strict';


/**
 * Create user account
 * FR1 - The user must be able to enter user information
 *
 * body Create_user_request 
 * no response value expected for this operation
 **/
exports.create_user = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get user account
 * FR1 - The user must be able to enter user information
 *
 * username String 
 * returns user_response
 **/
exports.get_user = function(username) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "fullname" : "Dimitris Papadopoulos",
  "email" : "dpapad@email.com",
  "address" : "Papadopoulou 5",
  "phone" : "6948753784",
  "city" : "Thessaloniki",
  "username" : "dPapadopoulos",
  "password" : "password1234"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

