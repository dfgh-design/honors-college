var gulp = require('gulp');

gulp.task('build:development', [
    'styles',
    'headerScripts',
    'scripts',
    'images',
    'svg',
    'fonts',
    'html'
]);

gulp.task('build:production', [
    'styles:production',
    'scripts:production',
    'images',
    'svg',
    'fonts',
    'html',
    'webserver'
]);
