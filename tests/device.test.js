const test = require('ava');
const got = require('got');
const http = require('http');
const listen = require('test-listen');

const { get_devices, get_device, add_device, update_device, delete_device } = require('../service/DeviceService');
const app = require('../index.js');

/**
 * Test DeviceService functions
 */

test('Get all devices by function', async t => {
  const result = await get_devices('test_user');
  t.is(result.length, 4);
  t.is(result[0].name, 'dolore aliqua');
  t.is(result[result.length - 1].id, 73024196);
});

test('Get device by function', async t => {
  const result = await get_device('test_user', 1);
  t.is(typeof result, 'object');
  t.is(result.name, 'Ut sint');
});

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

test('Update device by function', async t => {
  const result = await update_device('active', 'test_user', {
    "name": "Ut sint",
    "deviceType": "mollit dolore",
    "brand": "pariatur veniam",
    "zone": "laboris do sint",
    "status": "ipsum amet nostrud consectetur",
    "id": 47256135
  });
  t.is(typeof result, 'object');
  t.is(result.name, 'Ut sint');
});

test('Delete device by function', async t => {
  const result = await delete_device('test_user', 1);
  t.is(result, undefined);
});

/**
 * Test device endpoints
 */

test.before(async (t) => {
  t.context.server = http.createServer(app);
  t.context.prefixUrl = await listen(t.context.server);
  t.context.got = got.extend({ prefixUrl: t.context.prefixUrl, responseType: 'json' });
});

test.after.always((t) => {
  t.context.server.close();
});

test('Get all devices', async (t) => {
  const { body, statusCode } = await t.context.got('user/test');
  console.log(body);
  console.log(statusCode);
});
