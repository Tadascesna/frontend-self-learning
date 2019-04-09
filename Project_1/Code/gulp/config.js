module.exports = function () {
	const src = 'src/';
	const dist = 'dist/';

	const config = {
		dist: `${dist}`,
		styles: {
			src: `${src}/styles/styles.scss`,
			dist: `${dist}/styles`,
			watch: `${src}/styles/**/*.scss`,
			lintConfig: `./gulp/lint/sass-lint-config.yml`,
			sourcemaps: `/`
		},
		html: {
			index: `${src}/views/pages/home.html`,
			src: [`${src}/views/pages/**/*.html`, `!${src}/views/pages/home.html`],
			dist: `${dist}/`,
			watch: `${src}/views/**/*.html`
		},
		js: {
			src: `${src}/scripts/main.js`,
			watch: `${src}/scripts/**/*.js`,
			dist: `${dist}/scripts`,
			sourcemaps: `/`
		},
		assets: {
			src: [`${src}/assets/**/*`, `!${src}/assets/sprites/**/*.*`],
			dist: `${dist}/assets`,
		},
		sprites: {
			src: `${src}/assets/sprites/**/*.svg`,
			dist: `${dist}/`,
			watch: `${src}/assets/sprites/**/*.svg`,
			config: {
				cssFile: `styles/sprites.css`,
				svg: {
					sprite: `assets/sprites.svg`
				},
				preview: false
			}
		}
	}

	return config;
};