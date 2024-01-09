const test = require('ava');
const got = require('got');
const http = require('http');
const listen = require('test-listen');

// Importing necessary function from the ContactDevsService module
const { contact_devs } = require('../service/ContactDevsService.js');
const app = require('../index.js');

/**
 * Test ContactDevsService functions
 */
test('Contact developers by function', async t => {
    // Testing the contact_devs function with specific parameters
    const result = await contact_devs('Test User', 'example@gmail.com', 'Great job developers!', 'test_username');
    t.is(result, undefined);
});

/**
 * Test contact endpoint
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

test.serial('POST /user/{username}/contact', async (t) => {
    // Testing the POST endpoint for contacting developers
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

    // Asserting the status code of the response
    t.is(response.statusCode, 200);

    // Testing with missing parameters
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
        // Asserting the status code of the error response
        t.is(error.response.statusCode, 400);
    }
});
