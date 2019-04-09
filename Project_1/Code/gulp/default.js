module.exports = function () {
	const gulp = require('gulp');
	const run = require('run-sequence');
	const config = require('./config')();

	return run('clean', ['compile:html', 'compile:styles', 'compile:scripts', 'compile:assets', 'compile:svg-cleanup', 'compile:sprites', 'lint:styles']);
};