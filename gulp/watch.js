'use strict'; /*jslint node: true */

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();
var cssToJs = require('gulp-css-to-js');
var merge = require('gulp-merge');
var concat = require('gulp-concat');
var html2js = require('gulp-html-js-template');





/* --------------------------------------- */
/* WATCH TASK                              */

/* Checks If any changes to SASS files     */
/* via compass and If so runs task STYLES  */
/* It also runs the SERVE task             */
/* --------------------------------------- */

gulp.task('watch',['serve'], function () {

    gulp.watch('app/src/sass/**/*', ['styles']);

});

/* --------------------------------------- */
/* STYLES TASK */

/* It compiles the css using compass       */
/* --------------------------------------- */

gulp.task('styles', function () {
  console.log("======= > STYLES TASK"); 
  return gulp.src(['app/src/sass/**/*.scss'])
    .pipe($.compass({
      css: 'app/dev/reportpages/css',
      sass: 'app/src/sass'
    })).pipe(gulp.dest('.tmp/styles'));
});




