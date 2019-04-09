module.exports = function () {
  const gulp = require('gulp');
  const sass = require('gulp-sass');
  const plumber = require('gulp-plumber');
  const csso = require('gulp-csso');
  const sourcemaps = require('gulp-sourcemaps');
  const config = require('../config')();

  return gulp.src(config.styles.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(csso())
    .pipe(sourcemaps.write(config.styles.sourcemaps))
    .pipe(gulp.dest(config.styles.dist));
};