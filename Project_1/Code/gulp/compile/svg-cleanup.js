module.exports = function () {
	const gulp = require('gulp');
	const replace = require('gulp-replace');
	const flatmap = require('gulp-flatmap');
	const plumber = require('gulp-plumber');
	const path = require('path');
	const config = require('../config')();

	return gulp.src(config.sprites.src)
		.pipe(plumber())
		.pipe(flatmap(function (stream, file) {
			var fileName = path.basename(file.path).replace(/\.[^/.]+$/, "");

			return stream
				.pipe(replace('cls-1', fileName))
		}))
		.pipe(gulp.dest('src/assets/sprites'));
};