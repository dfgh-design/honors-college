var gulp        = require('gulp'),
    config      = require('../config');

gulp.task('default', ['build:development', 'webserver'], function() {
    gulp.watch(config.watch.styles, ['styles'])
    gulp.watch(config.watch.scripts, ['scripts'])
    gulp.watch(config.watch.images, ['images'])
    gulp.watch(config.watch.svg, ['svg'])
    gulp.watch(config.watch.fonts, ['fonts'])
    gulp.watch(config.watch.html, ['html']);
});
