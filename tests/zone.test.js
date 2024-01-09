// Importing necessary modules and libraries
const test = require('ava');
const got = require('got');
const http = require('http');
const listen = require('test-listen');

// Importing functions from ZoneService and the main application
const { add_zone, delete_zone, get_zone, get_zones } = require('../service/ZoneService');
const app = require('../index.js');

/**
 * Test ZoneService functions
 */

// Testing the function to get all zones
test('Get all zones by function', async t => {
  const result = await get_zones('test_user');
  t.is(result.length, 2);
  t.is(result[0].zone_id, 16419109);
  t.is(result[0].zone_name, 'Hallway1');
  t.is(result[1].zone_id, 97527035);
  t.is(result[1].zone_name, 'Living Room');
});

// Testing the function to get a specific zone
test('Get zone by function', async t => {
  const result = await get_zone('test_user', 1);
  t.is(typeof result, 'object');
  t.is(result.zone_id, 43908941);
  t.is(result.zone_name, 'Hallway2');
  t.is(result.zone_alarm, true);
  t.is(result.zone_temp, 21.4);
});

// Testing the function to delete a zone
test('Delete zone by function', async t => {
  const result = await delete_zone('test_user', 1);
  t.is(result, undefined);
});

// Testing the function to add a new zone
test('Add new zone by function', async t => {
  const result = await add_zone('test_user', {
    "zone_id": 16419109,
    "zone_name": "Hallway1",
    "zone_alarm": true,
    "zone_temp": 19.5
  });
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

// Testing GET request to retrieve all zones for a user
test.serial('GET /user/{username}/zone', async (t) => {
  const { body, statusCode } = await t.context.got('user/test_user/zone');
  t.is(statusCode, 200);
  t.is(body.length, 2);
  t.is(body[0].zone_id, 16419109);
  t.is(body[0].zone_name, 'Hallway1');
  t.is(body[1].zone_id, 97527035);
  t.is(body[1].zone_name, 'Living Room');
});

// Testing GET request to retrieve a specific zone for a user
test.serial('GET /user/{username}/zone/{zone_id}', async (t) => {
  const { body, statusCode } = await t.context.got('user/test_user/zone/1');
  t.is(statusCode, 200);
  t.is(typeof body, 'object');
  t.is(body.zone_name, 'Hallway2');

  // Testing for an invalid device endpoint
  try {
    await t.context.got('user/test_user/device/string');
  } catch (error) {
    t.is(error.response.statusCode, 400);
  }
});

// Testing DELETE request to delete a specific zone for a user
test.serial('DELETE /user/{username}/zone/{zone_id}', async (t) => {
  const { body, statusCode } = await t.context.got.delete('user/test_user/zone/1');
  t.is(statusCode, 200);

  // Testing for an invalid zone endpoint
  try {
    await t.context.got('user/test_user/zone/string');
  } catch (error) {
    t.is(error.response.statusCode, 400);
  }
});

// Testing POST request to add a new zone for a user
test.serial('POST /user/{username}/zone', async (t) => {
  const { statusCode } = await t.context.got.post('user/test_user/zone', {
    json: {
      "zone_id": 16419109,
      "zone_name": "Hallway1",
      "zone_alarm": true,
      "zone_temp": 19.5
    }
  });
  t.is(statusCode, 200);

  // Testing for missing JSON payload
  try {
    await t.context.got.post('user/test_user/zone');
  } catch (error) {
    t.is(error.response.statusCode, 400);
  }

  // Testing for incomplete JSON payload
  try {
    await t.context.got.post('user/test_user/zone', {
      json: {
        "zone_id": 16419109,
        "zone_name": "Hallway1",
      }
    });
  } catch (error) {
    t.is(error.response.statusCode, 400);
  }
});
