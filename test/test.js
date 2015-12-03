'use strict';

var assert = require('assert');
var config = require('config');
var PhotonBaer = require('../index.js');

describe('PhotonBaer', function() {

    describe('#fetchDevices()', function() {
        it('return devices on accoutn', function(done) {
            var pb = new PhotonBaer(config.PHOTON_BEARERTOKEN);
            pb.fetchDevices(function(err, res, body) {
                if (err) throw err;

                assert.equal(body.length, null, "No error");

                console.log(body);
                done();
            });
        });
    });


    describe('#fetchDevice())', function() {
        it('return device details', function(done) {
            var pb = new PhotonBaer(config.PHOTON_BEARERTOKEN);
            pb.fetchDevice(config.PHOTO_DEVICEID, function(err, res, body) {
                if (err) throw err;

                console.log(body);
                done();
            });
        });
    });


    describe('#fetchVariable()', function() {
        it('return a value', function(done) {
            var pb = new PhotonBaer(config.PHOTON_BEARERTOKEN);
            pb.fetchVariable(config.PHOTO_DEVICEID, 'state', function(err, res, body) {
                if (err) throw err;

                console.log(body);
                done();
            });
        });
    });

    describe('#executeFunction()', function() {
        it('return a value', function(done) {
            var pb = new PhotonBaer(config.PHOTON_BEARERTOKEN);
            pb.executeFunction(config.PHOTO_DEVICEID, 'openDoor', null, function(err, res, body) {
                if (err) throw err;

                console.log(body);
                done();
            });
        });
    });
});
