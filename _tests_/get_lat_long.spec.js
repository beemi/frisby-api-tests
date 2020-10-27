'use strict';

const frisby = require('frisby');
const config = require('config');

const postcodeHost = config.get('Postcode.host');

describe.skip('Postcode api test', function () {


    test('should check status code 200', function (doneFn) {

        return frisby
            .get(postcodeHost + '/postcodes/RM17 6EY')
            .inspectRequest() // Request print for debugging
            .inspectJSON()  // Pretty print JSON
            .expect('status', 200)
            .done(doneFn)
    });

    test('should check lat long values', function (doneFn) {

        frisby.get(postcodeHost + '/postcodes/RM17 6EY')
            .expect('status', 200)
            .then(function (response) {
                let json = response.json;

                expect(json.result.postcode).toBe('RM17 6EY')

            })
            .done(doneFn);
    });

    test('should NOT error with missing key', function (doneFn) {

        frisby.get(postcodeHost + '/postcodes/RM17 6EY')
            .expect('status', 200)
            .expect('json', {
                status: 200,
                result: {
                    postcode: "RM17 EY"
                }
            })
            .done(doneFn);
    });

    test.skip('should throw pending test error', function (doneFn) {

    });

    test.skip('should throw todo test error', function (doneFn) {

    });

});
