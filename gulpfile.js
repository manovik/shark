const gulp          = require('gulp'),
      browserSync   = require('browser-sync'),
      sass          = require('gulp-sass'),
      cleanCSS      = require('gulp-clean-css'),
      autoprefixer  = require('gulp-autoprefixer'),
      rename        = require("gulp-rename"),
      htmlmin       = require('gulp-htmlmin'),
      uglify        = require('gulp-uglify-es').default,
      imagemin      = require('gulp-imagemin'),
      concat        = require('gulp-concat'),
      sourcemaps    = require('gulp-sourcemaps');


gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: "dist"
        }
    });
    gulp.watch("dist/*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src('src/scss/**/*.scss')
          .pipe(sourcemaps.init())
          .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) 
          .pipe(rename({suffix: '.min', prefix: ''}))
          .pipe(autoprefixer({
            overrideBrowserslist: ['last 5 versions']
          }))
          .pipe(cleanCSS({compatibility: 'ie8'}))
          .pipe(sourcemaps.write('maps'))
          .pipe(gulp.dest('dist/css'))
          .pipe(browserSync.stream());
});

gulp.task('addStyles', function() {
  return gulp.src([
    'node_modules/normalize.css/normalize.css',
    'node_modules/slick-carousel/slick/slick.css'
  ])
  .pipe(concat('libs.min.css'))
  .pipe(cleanCSS())
  .pipe(gulp.dest('dist/css'))
});

gulp.task('addScripts', function() {
  return gulp.src([
    'node_modules/slick-carousel/slick/slick.js'
  ])
  .pipe(concat('libs.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'))
});

gulp.task('minHtml', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('script', function () {
  return gulp.src('src/js/**/*.js')
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});

gulp.task('compressImages', function(){
  return gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});

gulp.task('watch', function() {
  gulp.watch('src/*.html', gulp.parallel('minHtml'));
  gulp.watch('src/scss/**/*.scss', gulp.parallel('sass'));
  gulp.watch('src/js/**/*.js', gulp.parallel('script'));
  gulp.watch('src/images/**/*', gulp.parallel('compressImages'));
})

gulp.task('default', gulp.parallel('watch', 'server', 'sass','addStyles', 'addScripts', 'minHtml', 'script', 'compressImages'));