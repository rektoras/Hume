'use strict';


/**
 * Add new zone
 * FR-3 Τhe user must be able to modify temperature FR-5 Τhe user must be able to handle alarm system
 *
 * username String (Required) The username
 * body Add_zone_request 
 * no response value expected for this operation
 **/
exports.add_zone = function(username,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete zone
 * FR-3 Τhe user must be able to modify temperature FR-5 Τhe user must be able to handle alarm system
 *
 * username String (Required) The username
 * zone_id Integer (Required) The ID of zone
 * no response value expected for this operation
 **/
exports.delete_zone = function(username,zone_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve zone
 * FR-3 Τhe user must be able to modify temperature FR-5 Τhe user must be able to handle alarm system
 *
 * username String (Required) The username
 * zone_id Integer (Required) The ID of the zone
 * returns zone_response
 **/
exports.get_zone = function(username,zone_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "zone_id" : 43908941,
  "zone_name" : "Hallway2",
  "zone_alarm" : true,
  "zone_temp" : 21.4
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all smart zones
 * FR3 - Τhe user must be able to modify temperature >- FR5 - Τhe user must be able to handle alarm system
 *
 * username String (Required) The username
 * returns List
 **/
exports.get_zones = function(username) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "zone_id" : 16419109,
  "zone_name" : "Hallway1",
  "zone_alarm" : true,
  "zone_temp" : 22
}, {
  "zone_id" : 97527035,
  "zone_name" : "Living Room",
  "zone_alarm" : true,
  "zone_temp" : 23.1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

