var gulp = require('gulp');
var webserver = require('gulp-webserver');
var config       = require('../config');

gulp.task('webserver', function() {
  gulp.src('public')
    .pipe(webserver({
      livereload: true,
      open: true,
      //host: config.webserver.host,
      //host: '127.0.0.1',
      port: 3000,
      path: '/'
    }));
});
