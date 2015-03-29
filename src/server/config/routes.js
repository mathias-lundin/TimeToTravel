(function (routesConfig) {

    'use strict';

    routesConfig.init = function (app) {

        app.get('/ping', function (req, res, next) {
            console.log(req.body);
            res.send('pong');
        });

        // Catch all route
        app.all('/api/*', function (req, res) {
            res.sendStatus(404);
        });
    };

}(module.exports));
