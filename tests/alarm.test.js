const test = require('ava');
const got = require('got');
const http = require('http');
const listen = require('test-listen');

// Importing necessary functions from the AlarmService module
const { get_alarm_status, modify_alarm_status } = require('../service/AlarmService.js');
const app = require('../index.js');

/**
 * Test AlarmService functions
 */
test('Get Alarm Status by function', async (t) => {
    // Testing the get_alarm_status function with specific parameters
    const result = await get_alarm_status('test_user', 47256135);
    t.is(result.value, true);
});

test('Update alarm status by function', async (t) => {
    // Testing the modify_alarm_status function with specific parameters
    const result = await modify_alarm_status(false, 'test_user', 47256135);
    t.is(result, undefined);
});

/**
 * Test device endpoints
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

test.serial('GET /user/{username}/zone/{zone_id}/alarm_status', async (t) => {
    // Testing the GET endpoint for getting alarm status
    const { body, statusCode } = await t.context.got('user/test_user/zone/47256135/alarm_status');
    t.is(statusCode, 200);
    t.is(body.value, true);

    // Testing with invalid zone_id parameter
    try {
        await t.context.got('user/test_user/zone/myID/alarm_status');
    } catch (error) {
        t.is(error.response.statusCode, 400);
    }
});

test.serial('PUT /user/{username}/zone/{zone_id}/alarm_status', async (t) => {
    // Testing the PUT endpoint for updating alarm status
    const { body, statusCode } = await t.context.got('user/test_user/zone/47256135/alarm_status?alarm_status=true');
    t.is(statusCode, 200);

    // Testing with invalid zone_id and alarm_status parameters
    try {
        await t.context.got('user/test_user/zone/string/alarm_status?alarm_status=true');
    } catch (error) {
        t.is(error.response.statusCode, 400);
    }
});
