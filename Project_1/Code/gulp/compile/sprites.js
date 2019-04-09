module.exports = function () {
  const gulp = require('gulp');
  const svgSprite = require("gulp-svg-sprites");
  const plumber = require('gulp-plumber');
  const config = require('../config')();

  return gulp.src(config.sprites.src)
    .pipe(plumber())
    .pipe(svgSprite(config.sprites.config))
    .pipe(gulp.dest(config.sprites.dist));
};