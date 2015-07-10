var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('style', function() {
  gulp.src('assets/sass/**/*.scss')
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(minifyCSS())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('assets/css'));
})

//Watch task
gulp.task('default', function() {
  gulp.watch('assets/sass/**/*.scss', ['style']);
});
