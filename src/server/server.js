/// <reference path="../../typings/node/node.d.ts"/>

'use strict';

var express = require('express'),
    app = express();

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config')[env],
    expressConfig = require('./config/express'),
    routesConfig = require('./config/routes');

console.log('About to crank up the server...');

expressConfig.init(app, config, env);
routesConfig.init(app);

app.listen(config.port);

if (env === 'development') {
    console.log('Listening on port ' + config.port + '...');
    console.log('env = ' + app.get('env') +
                '\n__dirname = ' + __dirname +
                '\nprocess.cwd = ' + process.cwd());
}
