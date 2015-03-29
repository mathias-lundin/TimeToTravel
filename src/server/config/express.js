(function (expressConfig) {
    var express = require('express'),
        cookieParser = require('cookie-parser'),
        bodyParser = require('body-parser');

    /**
     * Return the content from the content.json file
     * @param app
     * @param config
     * @param env
     */
    expressConfig.init = function (app, config, env) {
        app.use(cookieParser());

        // parse application/x-www-form-urlencoded
        app.use(bodyParser.urlencoded({extended: true}));
        // parse application/json
        app.use(bodyParser.json());

        switch (env) {
            case 'build':
                console.log('** BUILD **');
                app.use(express.static('./build/'));
                app.use('/*', express.static('./build/index.html'));
                break;
            default:
                console.log('** DEV **');
                app.use(express.static('./src/client/'));
                app.use(express.static('./'));
                app.use(express.static('./tmp'));
                app.use('/*', express.static('./src/client/index.html'));
                break;
        }
    }
}(module.exports));