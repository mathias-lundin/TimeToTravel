(function (expressConfig) {

    'use strict';

    var express = require('express'),
        favicon = require('serve-favicon'),
        cookieParser = require('cookie-parser'),
        bodyParser = require('body-parser');

    /**
     * Return the content from the content.json file
     * @param {Object} app
     * @param {Object} config
     * @param {string} env
     */
    expressConfig.init = function (app, config, env) {
        console.log(__dirname);
        app.use(favicon('./src/server/favicon.ico'));
        app.use(cookieParser());
        // parse application/x-www-form-urlencoded
        app.use(bodyParser.urlencoded({ extended: true }));
        // parse application/json
        app.use(bodyParser.json());

        switch (env) {
            case 'dist':
                console.log('** DIST **');
                app.use(express.static('./dist/'));
                app.use('/*', express.static('./dist/index.html'));
                break;
            default:
                console.log('** DEV **');
                app.use(express.static('./src/client/'));
                app.use(express.static('./'));
                app.use(express.static('./tmp'));
                app.use('/*', express.static('./src/client/index.html'));
                break;
        }
    };
} (module.exports));
