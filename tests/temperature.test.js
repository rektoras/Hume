const test = require('ava');
const got = require('got');
const http = require('http');
const listen = require('test-listen');

const { get_temp, modify_temp } = require('../service/TemperatureService');
const app = require('../index.js');

/**
 * Test TemperatureService functions
 */
test('Get temperature by function', async (t) => {
  const result = await get_temp('test_user', 'test_zone');
  t.is(typeof result, 'object');
  t.is(result.value, 20); 
});

test('Modify temperature by function', async (t) => {
  const result = await modify_temp('active', 'test_user', 'test_zone');
  t.is(typeof result, 'undefined'); // Since no response is expected, check for undefined
});

/**
 * Test temperature endpoints
 */
test.before(async (t) => {
  t.context.server = http.createServer(app);
  t.context.prefixUrl = await listen(t.context.server);
  t.context.got = got.extend({ prefixUrl: t.context.prefixUrl, responseType: 'json' });
});

test.after.always(t => {
  t.context.server.close();
});

test.serial('GET /user/{username}/temperature/{zone_id}', async (t) => {
  const { body, statusCode } = await t.context.got('user/test_user/temperature/test_zone');
  t.is(statusCode, 200);
  t.is(typeof body, 'object');
  t.is(body.value, 20); 
});

test.serial('PUT /user/{username}/temperature/{zone_id}/temperatureStatus', async (t) => {
    const { statusCode } = await t.context.got.put('user/test_user/temperature/test_zone/temperatureStatus', {
      searchParams: {
        temperature_status: 'active',
        username: 'test_user',
        zone_id: 'test_zone',
      },
      json: {},
    });
    t.is(statusCode, 200);
  });
  