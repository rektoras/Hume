// Importing necessary modules and libraries
const test = require('ava');
const got = require('got');
const http = require('http');
const listen = require('test-listen');

// Importing functions from DeviceService and the main application
const { add_device, delete_device, get_device, get_devices, update_device } = require('../service/DeviceService');
const app = require('../index.js');

/**
 * Test DeviceService functions
 */

// Testing the function to get all devices
test('Get all devices by function', async t => {
  const result = await get_devices('test_user');
  t.is(result.length, 4);
  t.is(result[0].name, 'dolore aliqua');
  t.is(result[result.length - 1].id, 73024196);
});

// Testing the function to get a specific device
test('Get device by function', async t => {
  const result = await get_device('test_user', 1);
  t.is(typeof result, 'object');
  t.is(result.name, 'Ut sint');
});

// Testing the function to add a new device
test('Add new device by function', async t => {
  const result = await add_device('test_user', {
    "name": "Ut sint",
    "deviceType": "mollit dolore",
    "brand": "pariatur veniam",
    "zone": "laboris do sint",
    "status": "ipsum amet nostrud consectetur",
  });
  t.is(result, undefined);
});

// Testing the function to update a device
test('Update device by function', async t => {
  const result = await update_device('active', 'test_user', {
    "name": "Ut sint",
    "deviceType": "mollit dolore",
    "brand": "pariatur veniam",
    "zone": "laboris do sint",
    "status": "ipsum amet nostrud consectetur",
    "id": 47256135,
  });
  t.is(typeof result, 'object');
  t.is(result.name, 'Ut sint');
});

// Testing the function to delete a device
test('Delete device by function', async t => {
  const result = await delete_device('test_user', 1);
  t.is(result, undefined);
});

/**
 * Test device endpoints
 */

// Setting up server and prefixUrl for testing
test.before(async (t) => {
  t.context.server = http.createServer(app);
  t.context.prefixUrl = await listen(t.context.server);
  t.context.got = got.extend({ prefixUrl: t.context.prefixUrl, responseType: 'json' });
});

// Closing the server after testing
test.after.always((t) => {
  t.context.server.close();
});

// Testing GET request to retrieve all devices for a user
test.serial('GET /user/{username}/device', async (t) => {
  const { body, statusCode } = await t.context.got('user/test_user/device');
  t.is(statusCode, 200);
  t.is(body.length, 4);
  t.is(body[0].name, 'dolore aliqua');
  t.is(body[body.length - 1].id, 73024196);
});

// Testing POST request to add a new device for a user
test.serial('POST /user/{username}/device', async (t) => {
  const { statusCode } = await t.context.got.post('user/test_user/device', {
    json: {
      "name": "Ut sint",
      "deviceType": "mollit dolore",
      "brand": "pariatur veniam",
      "zone": "laboris do sint",
      "status": "ipsum amet nostrud consectetur",
      "id": 47256135,
    }
  });
  t.is(statusCode, 200);
  
  // Testing for missing JSON payload
  try {
    await t.context.got.post('user/test_user/device');
  } catch (error) {
    t.is(error.response.statusCode, 400);
  }

  // Testing for incomplete JSON payload
  try {
    await t.context.got.post('user/test_user/device', {
      json: {
        "brand": "pariatur veniam",
        "zone": "laboris do sint",
      }
    });
  } catch (error) {
    t.is(error.response.statusCode, 400);
  }
});

// Testing DELETE request to delete a specific device for a user
test.serial('DELETE /user/{username}/device/{device_id}', async (t) => {
  const { body, statusCode } = await t.context.got.delete('user/test_user/device/1');
  t.is(statusCode, 200);

  // Testing for an invalid device endpoint
  try {
    await t.context.got('user/test_user/device/string');
  } catch (error) {
    t.is(error.response.statusCode, 400);
  }
});

// Testing GET request to retrieve a specific device for a user
test.serial('GET /user/{username}/device/{device_id}', async (t) => {
  const { body, statusCode } = await t.context.got('user/test_user/device/1');
  t.is(statusCode, 200);
  t.is(typeof body, 'object');
  t.is(body.name, 'Ut sint');

  // Testing for an invalid device endpoint
  try {
    await t.context.got('user/test_user/device/string');
  } catch (error) {
    t.is(error.response.statusCode, 400);
  }
});

// Testing PUT request to update the device status for a user
test.serial('PUT /user/{username}/device/{device_id}/deviceStatus', async (t) => {
  const { body, statusCode } = await t.context.got.put('user/test_user/device/test_device/deviceStatus?device_status=status', {
    json: {
      "name": "Ut sint",
      "deviceType": "mollit dolore",
      "brand": "pariatur veniam",
      "zone": "laboris do sint",
      "status": "ipsum amet nostrud consectetur",
      "id": 47256135,
    },
  });
  t.is(statusCode, 200);
  t.is(typeof body, 'object');
  t.is(body.name, 'Ut sint');
  
  // Testing for missing JSON payload
  try {
    await t.context.got.put('user/test_user/device/test_device/deviceStatus?device_status=status');
  } catch (error) {
    t.is(error.response.statusCode, 400);
  }

  // Testing for incomplete JSON payload
  try {
    await t.context.got.put('user/test_user/device/test_device/deviceStatus?device_status=status', {
      json: {
        "brand": "pariatur veniam",
        "zone": "laboris do sint",
      },
    });
  } catch (error) {
    t.is(error.response.statusCode, 400);
  }

  // Testing for an invalid device endpoint
  try {
    await t.context.got.put('user/test_user/device/test_device/deviceStatus', {
      json: {
        "name": "Ut sint",
        "deviceType": "mollit dolore",
        "brand": "pariatur veniam",
        "zone": "laboris do sint",
        "status": "ipsum amet nostrud consectetur",
        "id": 47256135,
      },
    });
  } catch (error) {
    t.is(error.response.statusCode, 400);
  }
});
