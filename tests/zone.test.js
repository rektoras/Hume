const test = require('ava');
const got = require('got');
const http = require('http');
const listen = require('test-listen');

const { add_zone, delete_device, get_zone, get_zones } = require('../service/ZoneService');
const app = require('../index.js');

/**
 * Test ZoneService functions
 */

test('Get all zones by function', async t => {
  const result = await get_zones('test_user');
  // t.is(result.length, 4);
  t.is(result[0].zone_id, 16419109);
  t.is(result[1].zone_name, 'Hallway1');
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

  test.serial('GET /user/{username}/zone', async (t) => {
    const { body, statusCode } = await t.context.got('user/test_user/zone');
    t.is(statusCode, 200);
    // t.is(body.length, 4);
    t.is(body[0].zone_id, 16419109);
    t.is(body[1].zone_name, 'Hallway1');
  });
  