const { src, watch, parallel } = require('gulp'),
	browsersync = require('browser-sync').create();

function scripts() {
	return src([
		'src/js/bundle.js'
	])
		.pipe(browsersync.stream());
}

function styles() {
	return src([
		'src/css/style.css'
	])
		.pipe(browsersync.stream());
}

function browserSync() {
	browsersync.init({
		server: {
			baseDir: 'src/'
		}
	});
}

function watching() {
	watch(['src/css/style.css'], styles);
	watch(['src/js/bundle.js', 'src/js/main.js'], scripts);
	watch(['src/*.html']).on('change', browsersync.reload);
}

exports.watching = watching;
exports.browserSync = browserSync;
exports.styles = styles;
exports.scripts = scripts;

exports.default = parallel(watching, browserSync, styles, scripts);
