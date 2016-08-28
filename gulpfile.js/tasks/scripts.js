var gulp         = require('gulp'),
    config       = require('../config'),
    browserify   = require('browserify'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify'),
    util         = require('gulp-util'),
    source       = require('vinyl-source-stream'),
    sourcemaps   = require('gulp-sourcemaps'),
    handleErrors = require('../lib/handleErrors'),
    stylish      = require('jshint-stylish'),
    jshint       = require('gulp-jshint');

// Standard transpiling of detection scripts
gulp.task('headerScripts', function() {
    return browserify(config.scripts.dir.src + '/' + config.scripts.source.header, {debug: true})
        .bundle()
        .on('error', handleErrors)
        .pipe(source(config.scripts.source.header))
        .pipe(gulp.dest(config.scripts.dir.dest));
});

// Lint Javascript for errors and best practices
gulp.task('scripts:lint', function() {
    return gulp.src(config.scripts.dir.src + '/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

// Standard transpiling of custom scripts for development
gulp.task('scripts', function() {
    return browserify(config.scripts.dir.src + '/' + config.scripts.source.theme, {debug: true})
        .bundle()
        .on('error', handleErrors)
        .pipe(source(config.scripts.source.theme))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.scripts.dir.dest));
});

// Minification for production deployment
gulp.task('scripts:production', ['headerScripts', 'scripts'], function() {
    return gulp.src(config.scripts.dir.dest + '/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(config.scripts.dir.dest));
});
