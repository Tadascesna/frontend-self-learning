module.exports = function () {
	const gulp = require('gulp');
	const clean = require('gulp-clean');
	const run = require('run-sequence');
	const config = require('./config')();

	return gulp.src(config.dist)
		.pipe(clean());
};