const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');


gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: "dist"
        }
    });
    gulp.watch("dist/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src('src/scss/**/*.scss')
          .pipe(sourcemaps.init())
          .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) 
          .pipe(rename({suffix: '.min', prefix: ''}))
          .pipe(autoprefixer())
          .pipe(cleanCSS({compatibility: 'ie8'}))
          .pipe(sourcemaps.write('dist/css/maps'))
          .pipe(gulp.dest('dist/css'))
          .pipe(browserSync.stream());
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
  gulp.watch('src/scss/**/*.scss', gulp.parallel('styles'));
  gulp.watch('src/js/**/*.js', gulp.parallel('script'));
})

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'minHtml', 'script', 'compressImages'));