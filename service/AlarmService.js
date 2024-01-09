'use strict';


/**
 * Retrieve alarm's status
 * FR-5 Τhe user must be able to handle alarm system
 *
 * username String (Required) The username
 * zone_id Integer (Required) The ID of the zone
 * returns alarm_response
 **/
exports.get_alarm_status = function() {
  return new Promise(function(resolve) {
    var examples = {};
    examples['application/json'] = {
  "value" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Handle alarm's status
 * FR-5 Τhe user must be able to handle alarm system
 *
 * alarm_status Boolean (Required) The alarm's status given by the user
 * username String (Required) The username
 * zone_id Integer (Required) The ID of the zone
 * no response value expected for this operation
 **/
exports.modify_alarm_status = function() {
  return new Promise(function(resolve) {
    resolve();
  });
}

