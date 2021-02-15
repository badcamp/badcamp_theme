// Load plugins.
const autoprefixer = require('autoprefixer');
const browsersync = require('browser-sync').create();
const cssnano = require('cssnano');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglifyjs');

// Configuration.
var config = {};
config.sass = {
  srcFiles: 'sass/main.scss',
  watchFiles: ['sass/main.scss', 'sass/**/*.scss'],
  destDir: 'css',
};
config.js = {
  srcFiles: [
    './node_modules/foundation-sites/dist/js/foundation.js',
    'js/behaviors/**/*.js',
  ],
  watchFiles: 'js/behaviors/**/*.js',
  destDir: 'js',
};

// CSS task.
function css(done) {
  return gulp
    .src(config.sass.srcFiles)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.sass.destDir))
    .pipe(browsersync.stream());
  done();
}

// JS task.
function js(done) {
  return gulp
    .src(config.js.srcFiles)
    .pipe(uglify('main.js'))
    .pipe(gulp.dest(config.js.destDir));
  done();
}

// Compile theme task.
const compile = gulp.series(css, js);

// Watch files.
function watch() {
  gulp.watch(config.sass.watchFiles, gulp.series(css));
  gulp.watch(config.js.watchFiles, gulp.series(js));
}

// Default task
const start = gulp.series(compile, watch);

exports.css = css;
exports.js = js;
exports.compile = compile;
exports.watch = watch;
exports.default = start;
