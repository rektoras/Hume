const test = require('ava');
const got = require('got');
const http = require('http');
const listen = require('test-listen');

 const { create_user, get_user } = require('../service/UserService');
 const app = require('../index.js');

 /**
 * Test UserService functions
 */

 test('Add new user by function', async t => {
    const result = await create_user('test_user', {
      "fullname": "Nikola Tesla",
      "email": "nikt@gmail.com1",
      "address": "Septembriou 20",
      "phone": "52387447",
      "city": "Thessaloniki",
      "username": "nikolat",
      "password": "current"
    });
    t.is(result, undefined);
  });

/**
 * Test User endpoints
 */
  test.before(async (t) => {
    t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    t.context.got = got.extend({ prefixUrl: t.context.prefixUrl, responseType: 'json' });
  });
  
  test.after.always((t) => {
    t.context.server.close();
  });
  
  test.serial('POST /user', async (t) => {
    const { statusCode } = await t.context.got.post('user', {
      json: {
      "fullname": "Nikola Tesla",
      "email": "nikt@gmail.com1",
      "address": "Septembriou 20",
      "phone": "52387447",
      "city": "Thessaloniki",
      "username": "nikolat",
      "password": "current"
      }
    });
    t.is(statusCode, 200);
    
    try{
      await t.context.got.post('user');
    } catch(error){
      t.is(error.response.statusCode, 400);
    }
  
    try{
      await t.context.got.post('user/test_user/device', {
        json: {
            "fullname": "Nikola Tesla",
            "email": "nikt@gmail.com1",
            "address": "Septembriou 20",
            "phone": "52387447",
            "city": "Thessaloniki",
            "username": "nikolat",
            "password": "current",
        }
      });
    } catch(error){
      t.is(error.response.statusCode, 400);
    }
  });