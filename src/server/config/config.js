'use strict';

var path = require('path'),
    rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: '',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    dist: {
        db: '',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
};
