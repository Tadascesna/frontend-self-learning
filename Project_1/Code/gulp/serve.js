module.exports = function () {
	const gulp = require('gulp');
	const run = require('run-sequence');
	const browserSync = require('browser-sync').create();
	const config = require('./config')();

	return browserSync.init({
			server: {
				baseDir: "./dist"
			}
		}),
		gulp.watch(config.styles.watch, ['lint:styles', 'compile:styles']),
		gulp.watch(config.html.watch, ['compile:html']),
		gulp.watch(config.js.watch, ['compile:scripts']),
		gulp.watch(config.sprites.watch, ['compile:svg-cleanup', 'compile:sprites']),
		gulp.watch('./dist/**/*').on('change', browserSync.reload);
};