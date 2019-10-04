var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel')
sass.compiler = require('node-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-clean-css');
gulp.task('sass', function () {
  return gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minify())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('default', () =>
  gulp.src('src/js/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
);

gulp.task('watch', function () {
  gulp.watch('src/sass/**/*.scss', gulp.series('sass'));
  gulp.watch('src/js/*.js', gulp.series('default'));

});