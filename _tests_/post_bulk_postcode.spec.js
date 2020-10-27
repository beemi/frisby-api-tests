'use strict';

const config = require('config');
const frisby = require('frisby');

const postcodeHost = config.get('Postcode.host');

// Do setup first
frisby.globalSetup({
    request: {
        headers: {
            'Content-Type': 'application/json'
        }
    }

});

describe('Postcode bulk lookup postcode', function () {

    test('should return 200 ok and all postcode result details', function () {

        frisby.post(postcodeHost + '/postcodes', {

            postcodes: ["OX49 5NU", "M32 0JG", "NE30 1DP"]
        })
            .inspectJSON()
            .expect('status', 201);
    });

});