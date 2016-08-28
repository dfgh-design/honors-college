var gulp     = require('gulp'),
	config   = require('../config'),
	changed  = require('gulp-changed'),
	imagemin = require('gulp-imagemin'),
	svgmin   = require('gulp-svgmin');

gulp.task('html', function() {
    return gulp.src(config.pipeline.html.src)
        .pipe(changed(config.pipeline.html.dest))
        .pipe(gulp.dest(config.pipeline.html.dest));
});

gulp.task('fonts', function() {
    return gulp.src(config.pipeline.fonts.src)
        .pipe(changed(config.pipeline.fonts.dest))
        .pipe(gulp.dest(config.pipeline.fonts.dest));
});

gulp.task('images', function() {
    return gulp.src(config.pipeline.images.src)
        .pipe(imagemin())
        .pipe(changed(config.pipeline.images.dest))
        .pipe(gulp.dest(config.pipeline.images.dest));
});

gulp.task('svg', function() {
    return gulp.src(config.pipeline.svg.src)
        .pipe(svgmin({
            plugins: [
                {cleanupIDs: false},                  // don't remove  ids
                {removeViewBox: false},               // don't remove the viewbox atribute from the SVG
                {removeUselessStrokeAndFill: false},  // don't remove Useless Strokes and Fills
                {removeEmptyAttrs: false}
            ]
        }))
        .pipe(changed(config.pipeline.svg.dest))
        .pipe(gulp.dest(config.pipeline.svg.dest));
});