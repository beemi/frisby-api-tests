'use strict';

const frisby = require('frisby');

describe('Postcode api test', function () {


    it('should check status code 200', function (doneFn) {

        return frisby
            .get('http://api.postcodes.io/postcodes/RM17 6EY')
            .inspectRequest() // Request print for debugging
            .inspectJSON()  // Pretty print JSON
            .expect('status', 200)
            .done(doneFn)
    });

    it('should check lat long values', function (doneFn) {

        frisby.get('http://api.postcodes.io/postcodes/RM17 6EY')
            .expect('status', 200)
            .then(function (response) {
                let json = response.json;

                expect(json.result.postcode).toBe('RM17 6EY')

            })
            .done(doneFn);
    });

});
