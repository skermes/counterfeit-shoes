var gulp = require('gulp'),
    gutil = require('gulp-util'),
    less = require('gulp-less'),
    path = require('path'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    reactify = require('reactify'),
    source = require('vinyl-source-stream');

var logAndEnd = function(taskName) {
  return function(error) {
    gutil.log(error);
    notify.onError(taskName + ' failed, see logs')(error);
    this.end();
  }
};

gulp.task('styles', function() {
  return gulp.src('src/counterfeit-shoes.less')
    .pipe(less({paths: [ path.join(__dirname, 'src') ]}))
    .on('error', logAndEnd('LESS'))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('dist'));
});

var buildScripts = function(watch) {
  var bundler, rootFile = './src/counterfeit-shoes.js';
  if (watch) {
    bundler = watchify(rootFile);
  } else {
    bundler = browserify(rootFile);
  }

  bundler.transform(reactify);

  var rebundle = function() {
    gutil.log('Building js with browserify');

    var stream = bundler.bundle({debug: true});
    stream.on('error', logAndEnd('Browserify'));

    stream = stream.pipe(source('counterfeit-shoes.js'));
    return stream.pipe(gulp.dest('dist'));
  }
  bundler.on('update', rebundle);
  return rebundle();
}

gulp.task('scripts', function() {
  buildScripts(false);
});

gulp.task('scriptsWatch', function() {
  buildScripts(true);
});

gulp.task('htmls', function() {
  gulp.src('src/index.html')
      .pipe(rename('404.html'))
      .pipe(gulp.dest('dist'));
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('fonts', function(){
  return gulp.src('src/web-fonts/*')
  .pipe(gulp.dest('dist/fonts'));
});

var imgExts = ['png', 'jpg', 'jpeg', 'gif', 'ico'];
gulp.task('images', function() {
  // browserconfig.xml defines how the favicon works on ms devices.
  gulp.src('src/browserconfig.xml')
      .pipe(gulp.dest('dist'));
  return gulp.src(imgExts.map(function(ext) { return 'src/**/*' + ext }))
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
  return gulp.src(['dist'], {read: false})
    .pipe(clean());
});

gulp.task('build', ['styles', 'scripts', 'htmls', 'fonts', 'images']);

gulp.task('watch', ['styles', 'scriptsWatch', 'htmls', 'fonts', 'images'], function() {
  gulp.watch('src/**/*.less', ['styles']);
  gulp.watch('src/**/*.html', ['htmls']);
});

gulp.task('default', ['clean']);
