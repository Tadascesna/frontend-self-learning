module.exports = function () {
	const gulp = require('gulp');
  const browserify = require('browserify');
  const source = require('vinyl-source-stream');
  const buffer = require('vinyl-buffer');
  const uglify = require('gulp-uglify');
  const sourcemaps = require('gulp-sourcemaps');
  const log = require('gulplog');
  const babel = require('gulp-babel');
	const concat = require('gulp-concat');
	const babelify = require('babelify');
  const config = require('../config')();
  
  var b = browserify({
    entries: config.js.src,
    debug: true,
  });

  return b.transform(babelify).bundle()
    .pipe(source(config.js.src))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(babel({
          presets: ['@babel/env']
        }))
        .pipe(uglify())
        .on('error', log.error)
        .pipe(concat('bundle.min.js'))
    .pipe(sourcemaps.write(config.js.sourcemaps))
    .pipe(gulp.dest(config.js.dist));
};