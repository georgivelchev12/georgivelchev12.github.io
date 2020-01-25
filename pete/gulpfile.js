var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel')
sass.compiler = require('node-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
// var semi = require('gulp-semi').add;
// var semi = require('gulp-semi').remove;
 
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

gulp.task('images', function (cb) {
  gulp.src(
    ['dist/uploads/**/*.png', 'dist/uploads/**/*.jpg', 'dist/uploads/**/*.gif', 'dist/uploads/**/*.jpeg'])
    .pipe(imagemin())
    .pipe(gulp.dest('uploadsConverted/')).on('end', cb).on('error', cb);
});

gulp.task('pages', function () {
  return gulp.src(['./src/**/*.html'])
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./'));
});
gulp.task('watch', function () {
  gulp.watch('src/sass/**/*.scss', gulp.series('sass'));
  gulp.watch('./src/**/*.html', gulp.series('pages'));
  gulp.watch('src/js/*.js', gulp.series('default'));
  // gulp.watch('src/js/*.js', gulp.series('semi'));
});


// gulp.task('semi', function() {
//   return gulp.src('src/js/*.js')
//     .pipe(semi({ leading: true }))
//     .pipe(gulp.dest('dist/js'));
// });