'use strict';


/**
 * Contact developers
 * FR10 - Τhe user must be able to contact with developers
 *
 * fullname String (Required) The user's fullname
 * email String (Required) The user's email
 * text_message String (Required) The user's message for the developers
 * username String (Required) The username
 * no response value expected for this operation
 **/
exports.contact_devs = function(fullname,email,text_message,username) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

