'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var config = {};
config.dbHost = process.env.dbHost || 'localhost';
config.dbPort = process.env.dbPort || '27017';
config.dbName = process.env.dbName || 'booksonline';
config.serverPort = process.env.serverPort || 3000;

exports.default = config;