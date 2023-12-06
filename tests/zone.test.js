const test = require('ava');
const got = require('got');
const http = require('http');
const listen = require('test-listen');

const { add_zone, delete_device, get_zone, get_zones } = require('../service/ZoneService');
const app = require('../index.js');

/**
 * Test ZoneService functions
 */


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