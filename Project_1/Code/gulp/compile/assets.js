module.exports = function () {
  const gulp = require('gulp');
  const imagemin = require('gulp-imagemin');
  const config = require('../config')();

  return gulp.src(config.assets.src)
    .pipe(imagemin())
    .pipe(gulp.dest(config.assets.dist));
};