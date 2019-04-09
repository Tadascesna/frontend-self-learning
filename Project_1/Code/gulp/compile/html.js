module.exports = function () {
  const gulp = require('gulp');
  const fileinclude = require('gulp-file-include');
  const plumber = require('gulp-plumber');
  const rename = require("gulp-rename");
  const config = require('../config')();

  return gulp.src(config.html.src)
    .pipe(plumber())
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(config.html.dist)),
    gulp.src(config.html.index)
    .pipe(plumber())
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(rename(function (path) {
      path.basename = "index";
      path.extname = ".html";
    }))
    .pipe(gulp.dest(config.html.dist));

};