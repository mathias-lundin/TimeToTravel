var express = require('express'),
    app = express();

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config')[env],
    config_express = require('./config/express'),
    config_routes = require('./config/routes');

console.log('About to crank up the server...');

config_express.init(app, config, env);
config_routes.init(app);

app.listen(config.port);

if (env === 'development') {
    console.log('Listening on port ' + config.port + '...');
    console.log('env = ' + app.get('env') +
                '\n__dirname = ' + __dirname +
                '\nprocess.cwd = ' + process.cwd());
}