'use strict';

var gulp = require('gulp'),
    args = require('yargs').argv,
    config = require('./gulp.config')(),
    del = require('del'),
    path = require('path'),
    $ = require('gulp-load-plugins')({lazy: true}),
    port = process.env.PORT || config.defaultPort;

gulp.task('help', $.taskListing);
gulp.task('default', ['help']);

gulp.task('bump', function () {
    var msg = 'Bumping versions',
        type = args.type,
        version = args.version,
        options = {};

    if (version) {
        options.version = version;
        msg += ' to ' + version;
    } else {
        options.type = type;
        msg += ' for a ' + type;
    }

    log(msg);

    return gulp
        .src(config.packages)
        .pipe($.print())
        .pipe($.bump(options))
        .pipe(gulp.dest(config.root));
});

gulp.task('clean', function (done) {
    var deleteConfig = [].concat(
        config.dist,
        config.temp
    );
    clean(deleteConfig, done);
});

gulp.task('clean-fonts', function (done) {
    clean(config.dist + 'fonts/**/*.*', done);
});

gulp.task('clean-images', function (done) {
    clean(config.dist + 'images/**/*.*', done);
});

gulp.task('clean-styles', function (done) {
    clean(config.temp + '**/*.css', done);
});

gulp.task('clean-code', function (done) {
    var files = [].concat(
        config.temp + '**/*.js',
        config.dist + '**/*.html',
        config.dist + 'js/**/*.js'
    );
    clean(files, done);
});

gulp.task('vet', function () {
    log('Analyzing source with JSHint and JSCS');

    return gulp
        .src(config.alljs)
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe($.jshint.reporter('fail'));
});

gulp.task('styles', ['clean-styles'], function () {
    log('Compiling LESS --> CSS');

    return gulp
        .src(config.less)
        .pipe($.plumber())  // Handle compile errors
        .pipe($.less())     // Compile to CSS
        .pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']})) // Add vendor prefixes
        .pipe(gulp.dest(config.temp));
});

gulp.task('fonts', ['clean-fonts'], function () {
    log('Copying fonts');

    return gulp
        .src(config.fonts)
        .pipe(gulp.dest(config.dist + 'fonts'));
});

gulp.task('images', ['clean-images'], function () {
    log('Copying and compressing images');

    return gulp
        .src(config.images)
        .pipe($.imagemin({optimizationLevel: 4}))
        .pipe(gulp.dest(config.dist + 'images'));
});

gulp.task('less-watcher', function () {
    gulp.watch([config.less], ['styles']);
});

gulp.task('wiredep', function () {
    log('Wire up the Bower CSS and js and also app js into the html');

    var wiredep = require('wiredep').stream,
        options = config.getWiredepDefaultOptions();

    return gulp
        .src(config.index)
        .pipe(wiredep(options))
        .pipe($.inject(gulp.src(config.js)))
        .pipe(gulp.dest(config.client));
});

gulp.task('inject', ['wiredep', 'styles'], function () {
    log('Wire up the app CSS into the html and call wiredep');

    return gulp
        .src(config.index)
        .pipe($.inject(gulp.src(config.css)))
        .pipe(gulp.dest(config.client));
});

///////////////

function clean(path, done) {
    log('Cleaning: ' + $.util.colors.blue(path));
    del(path, done);
}

function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}
