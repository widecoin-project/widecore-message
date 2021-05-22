'use strict';

var gulp = require('gulp');
var widecoreTasks = require('widecore-build');

widecoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
