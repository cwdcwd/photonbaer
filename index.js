'use strict';

var request = require("request");

var PhotonBaer = function(bearerToken) {
    this.photonBaseURL = 'https://api.particle.io';
    this.apiV = '1';
    this.bearerToken = bearerToken;
};

PhotonBaer.prototype.fetchDevices = function(cb) {
    var self = this;
    var url = self.photonBaseURL + '/v' + self.apiV + '/devices';

    var options = {
        method: 'GET',
        url: url,
        headers: {
            'cache-control': 'no-cache',
            authorization: 'Bearer ' + self.bearerToken,
            'content-type': 'application/json'
        }
    };

    request(options, function(error, response, body) {
        //if (error) throw new Error(error);
        cb(error, response, body);
    });
};


PhotonBaer.prototype.fetchDevice = function(deviceId, cb) {
    var self = this;
    var url = self.photonBaseURL + '/v' + self.apiV + '/devices/' + deviceId;

    var options = {
        method: 'GET',
        url: url,
        headers: {
            'cache-control': 'no-cache',
            authorization: 'Bearer ' + self.bearerToken,
            'content-type': 'application/json'
        }
    };

    request(options, function(error, response, body) {
        //if (error) throw new Error(error);
        cb(error, response, body);
    });
};


PhotonBaer.prototype.fetchVariable = function(deviceId, varName, cb) {
    var self = this;
    var url = self.photonBaseURL + '/v' + self.apiV + '/devices/' + deviceId + '/' + varName;

    var options = {
        method: 'GET',
        url: url,
        headers: {
            'cache-control': 'no-cache',
            authorization: 'Bearer ' + self.bearerToken,
            'content-type': 'application/json'
        }
    };

    request(options, function(error, response, body) {
        //if (error) throw new Error(error);
        cb(error, response, body);
    });
}

PhotonBaer.prototype.executeFunction = function(deviceId, funcName, params, cb) {
    var self = this;
    var url = self.photonBaseURL + '/v' + self.apiV + '/devices/' + deviceId + '/' + funcName;

    var options = {
        method: 'POST',
        url: url,
        headers: {
            'cache-control': 'no-cache',
            authorization: 'Bearer ' + self.bearerToken,
            'content-type': 'application/json'
        }
    };

    request(options, function(error, response, body) {
        //if (error) throw new Error(error);
        cb(error, response, body);
    });
}


module.exports = PhotonBaer;
