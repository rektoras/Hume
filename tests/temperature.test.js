const test = require('ava');
const got = require('got');
const http = require('http');
const listen = require('test-listen');

// Importing necessary functions from the TemperatureService module
const { get_temp, modify_temp } = require('../service/TemperatureService');
const app = require('../index.js');

/**
 * Test TemperatureService functions
 */
test('Retrieve temperature by function', async t => {
  // Testing the get_temp function with specific parameters
  const result = await get_temp('test_user', 1);
  t.is(typeof result, 'object');
  t.is(result.value, 20);
});

test('Modify temperature by function', async t => {
  // Testing the modify_temp function with specific parameters
  const result = await modify_temp(25, 'test_user', 1);
  t.is(result, undefined);
});

/**
 * Test temperature endpoints
 */
test.before(async (t) => {
  // Setting up a server and creating a context for testing
  t.context.server = http.createServer(app);
  t.context.prefixUrl = await listen(t.context.server);
  t.context.got = got.extend({ prefixUrl: t.context.prefixUrl, responseType: 'json' });
});

test.after.always((t) => {
  // Closing the server after testing
  t.context.server.close();
});

test.serial('GET /user/{username}/zone/{zone_id}/temperature_status', async (t) => {
  // Testing the GET endpoint for retrieving temperature status
  const { body, statusCode } = await t.context.got('user/test_user/zone/1/temperature_status');
  t.is(statusCode, 200);
  t.is(typeof body, 'object');
  t.is(body.value, 20);

  // Testing with invalid zone_id parameter
  try {
    await t.context.got('user/test_user/zone/string/temperature_status');
  } catch (error) {
    // Asserting the status code of the error response
    t.is(error.response.statusCode, 400);
  }
});

test.serial('PUT /user/{username}/zone/{zone_id}/temperature_status', async (t) => {
  // Testing the PUT endpoint for updating temperature status
  const payload = {
    temperature_status: 20,  
  };

  try {
    const { body, statusCode } = await t.context.got.put(`user/test_user/zone/1/temperature_status?temperature_status=${payload.temperature_status}`, {
      json: payload,
    });

    // Asserting the status code and response body
    t.is(statusCode, 200); 
    t.deepEqual(body, ''); 

  } catch (error) {
    // Handling potential errors and failing the test with appropriate messages
    if (error.response) {
      t.fail(`Failed to update temperature. Status Code: ${error.response.statusCode}, Response: ${JSON.stringify(error.response.body)}`);
    } else {
      t.fail(`Failed to update temperature: ${error.message}`);
    }
  }
});
