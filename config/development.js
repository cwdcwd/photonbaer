'use strict';

/**
 * Config file for NODE_ENV=dev
 */
var config = {};

config.PHOTON_BEARERTOKEN=process.env.PHOTON_BEARERTOKEN || '5db09e2c1f9e4a4e84da2649028b4443f98daef3';
config.PHOTO_DEVICEID=process.env.PHOTO_DEVICEID || '1c0038000a47343432313031';


module.exports = config;
