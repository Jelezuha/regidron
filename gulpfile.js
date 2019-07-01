'use strict'

const gulp = require('gulp');
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')
const gulpIf = require('gulp-if')
const del = require('del')

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const resultFolder = 'dist'

gulp.task('default', function () {
  console.log('test')
})

gulp.task('fonts', () => {
  return gulp.src(['src/css/fonts/*'], {base: 'src'})
    .pipe(gulp.dest(resultFolder));
})

gulp.task('images', () => {
  return gulp.src(['src/img/*'], {base: 'src'})
    .pipe(imagemin())
    .pipe(gulp.dest(resultFolder));
})

gulp.task('styles', () => {
  return gulp.src('src/css/*.sass')
    .pipe(gulpIf(isDevelopment, sourcemaps.init()))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(concat('styles.css'))
    .pipe(gulpIf(isDevelopment, sourcemaps.write()))
    .pipe(cssmin())
    .pipe(gulp.dest(`${resultFolder}/css`));

})

gulp.task('js', () => {
  return gulp.src(['src/js/*.js'])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest(`${resultFolder}/js`));
})

gulp.task('php', () => {
  return gulp.src(['src/*.php'])
    .pipe(gulp.dest(resultFolder));
})

gulp.task('clean', () => {
  return del(resultFolder)
})

gulp.task('build', gulp.series(
  'clean',
  gulp.parallel('fonts', 'images', 'styles', 'js', 'php')
))

gulp.task('watch', function () {
  gulp.watch('src/css/**/*.sass', gulp.series('styles'))
  gulp.watch('src/*.php', gulp.series('php'))
  gulp.watch('src/js/*.js', gulp.series('js'))
})

gulp.task('dev', gulp.series('build', 'watch'))
