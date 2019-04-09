module.exports = function () {
	const gulp = require('gulp');
	const sassLint = require('gulp-sass-lint');
	const config = require('../config')();

	return gulp.src(config.styles.watch)
		.pipe(sassLint({
			configFile: config.styles.lintConfig
		}))
		.pipe(sassLint.format())
		.pipe(sassLint.failOnError())
};