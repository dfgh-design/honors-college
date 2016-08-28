var gulp         = require('gulp'),
    postcss = require('gulp-postcss'),
    config       = require('../config'),
    sass         = require('gulp-sass'),
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    handleErrors = require('../lib/handleErrors');

// Standard Sass compiling for development
gulp.task('styles', function() {
    return gulp.src(config.styles.src + "/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({includePaths: '/'}))
        .on('error', handleErrors)
        .pipe(autoprefixer({
            browsers: ['last 2 version']
        }))
        .pipe(postcss([ require('postcss-flexibility') ]) )
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.styles.dest));
});

// Standard Sass compiling for production
gulp.task('styles:production', function() {
    return gulp.src(config.styles.src + "/*.scss")
        .pipe(sass({
            includePaths: '/',
            outputStyle: 'compressed'
        }))
        .on('error', handleErrors)
        .pipe(autoprefixer({
            browsers: ['last 2 version']
        }))
        .pipe(postcss([ require('postcss-flexibility') ]) )
        .pipe(gulp.dest(config.styles.dest));
});
