'use strict';


/**
 * Add new smart device
 * FR2 - The user must be able to add smart devices in the system 
 *
 * username String (Required) The user adds a new smart device
 * body Add_device_request 
 * no response value expected for this operation
 **/
exports.add_device = function() {
  return new Promise(function(resolve) {
    resolve();
  });
}


/**
 * Delete smart device
 * FR4 - Τhe user must be able handle operation of smart devices
 *
 * username String (Required) The username
 * device_id Integer (Required) The ID of the smart device
 * no response value expected for this operation
 **/
exports.delete_device = function() {
  return new Promise(function(resolve) {
    resolve();
  });
}


/**
 * Retrieve smart device
 * FR4 - Τhe user must be able handle operation of smart devices
 *
 * username String (Required) The username
 * device_id Integer (Required) The ID of the smart device
 * returns successful_device_get
 **/
exports.get_device = function() {
  return new Promise(function(resolve) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Ut sint",
  "deviceType" : "mollit dolore",
  "brand" : "pariatur veniam",
  "zone" : "laboris do sint",
  "status" : "ipsum amet nostrud consectetur",
  "id" : 47256135
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all smart devices
 * FR4 - Τhe user must be able handle operation of smart devices
 *
 * username String (Required) The username
 * returns List
 **/
exports.get_devices = function() {
  return new Promise(function(resolve) {
    var examples = {};
    examples['application/json'] = [{
  "name" : "dolore aliqua",
  "deviceType" : "Ut in dolore",
  "brand" : "nisi culpa ut anim",
  "zone" : "sun",
  "status" : "dolo",
  "id" : -97710446
}, {
  "name" : "occaecat mollit",
  "deviceType" : "laboris",
  "brand" : "qui in eu esse",
  "zone" : "voluptate ut in ut amet",
  "status" : "aliquip ullamco sunt",
  "id" : 56769003
}, {
  "name" : "id ullamco",
  "deviceType" : "nostru",
  "brand" : "ad sed ullamco nostrud Lorem",
  "zone" : "Duis commodo sunt",
  "status" : "aliqua in",
  "id" : 87202422
}, {
  "name" : "est incididunt do elit",
  "deviceType" : "anim sit laboris do aliquip",
  "brand" : "",
  "zone" : "proident minim amet",
  "status" : "et tempor",
  "id" : 73024196
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update smart device
 * FR4 - Τhe user must be able handle operation of smart devices
 *
 * device_status String (Required) The new smart device's operation that is given by the user
 * username String (Required) The username
 * device_name String (Required) The name of the smart device
 * body Update_device_request  (optional)
 * returns successful_device_update
 **/
exports.update_device = function() {
  return new Promise(function(resolve) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Ut sint",
  "deviceType" : "mollit dolore",
  "brand" : "pariatur veniam",
  "zone" : "laboris do sint",
  "status" : "ipsum amet nostrud consectetur",
  "id" : 47256135
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

