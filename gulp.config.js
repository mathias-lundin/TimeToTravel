module.exports = function () {

    'use strict';

    var root = './',
        client = './src/client/',
        clientApp = client + 'app/',
        server = './src/server/',
        temp = './.tmp/';

    var config = {
        /**
         *  File paths
         */
        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        client: client,
        css: temp + 'styles.css',
        dist: './dist/',
        fonts: './bower_components/materialize/font/**/*.*',
        html: clientApp + '**/*.html',
        images: client + 'images/**/*.*',
        index: client + 'index.html',
        js: [
            clientApp + '**/*.module.js',
            clientApp + '**/*.js',
            '!' + clientApp + '**/*.spec.js' //Excluded
        ],
        less: client + 'styles/styles.less',
        root: root,
        server: server,
        temp: temp,

        /**
         * Optimized files
         */
        optimized: {
            app: 'app.js',
            lib: 'lib.js'
        },

        /**
         * Browser sync
         */
        browserReloadDelay: 0,

        /**
         * Bower and NPM locations
         */
        bower: {
            json: require('./bower.json'),
            directory: './bower_components',
            ignorePath: '../..'
        },
        packages: [
            './package.json',
            './bower.json'
        ],

        /**
         * Node settings
         */
        defaultPort: 3030,
        nodeServer: './src/server/server.js'
    };

    config.getWiredepDefaultOptions = function () {
        return {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
    };

    return config;

};
