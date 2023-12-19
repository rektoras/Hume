const test = require('ava');
const got = require('got');
const http = require('http');
const listen = require('test-listen');

const { contact_devs } = require('../service/ContactDevsService.js');
const app = require('../index.js');

/**
 * Test ContactDevsService functions
 */
test('Contact developers by function', async t => {
    const result = await contact_devs('Test User', 'example@gmail.com', 'Great job developers!', 'test_username');
    t.is(result, undefined);
});

/**
 * Test contact endpoint
 */
test.before(async (t) => {
    t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    t.context.got = got.extend({ prefixUrl: t.context.prefixUrl, responseType: 'json' });
});

test.after.always((t) => {
    t.context.server.close();
});

test.serial('POST /user/{username}/contact', async (t) => {
    const response = await t.context.got.post('user/user/contact?fullname=users&email=example&text_message=Greatjob', {
        json: {
            fullname: 'users users',
            email: 'example',
            text_message: 'Great job',
        },
        headers: {
            'Content-Type': 'application/json',
        },
    });

    t.is(response.statusCode, 200);

    try {
        await t.context.got.post('user/user/contact?fullname=users&email=example&text_message=Greatjob', {
            json: {
                email: 'example',
                text_message: 'Great job',
            },
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        t.is(error.response.statusCode, 400);
    }
});
