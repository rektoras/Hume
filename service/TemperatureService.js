'use strict';


/**
 * Retrieve temperature's value
 * FR-3 Τhe user must be able to modify temperature
 *
 * username String (Required) The username
 * zone_id Integer (Required) The ID of the zone
 * returns temp_response
 **/
exports.get_temp = function() {
  return new Promise(function(resolve) {
    var examples = {};
    examples['application/json'] = {
  "value" : 20
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Modify Temperature
 * FR-3 Τhe user must be able to modify temperature
 *
 * temperature_status Double (Required) The temperature given by the user
 * username String (Required) The username
 * zone_id Integer (Required) The ID of the zone
 * no response value expected for this operation
 **/
exports.modify_temp = function() {
  return new Promise(function(resolve) {
    resolve();
  });
}

