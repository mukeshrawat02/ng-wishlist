﻿var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    jshint = require('gulp-jshint'),
    gulpMocha = require('gulp-mocha'),
    gutil = require('gulp-util');

gulp.task('lint', function () {
    return gulp.src(['./*.js', './*/*.js', './*/*/*.js'])
               .pipe(jshint())
               .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('test', function () {
    return gulp.src('tests/*.js', { read: false })
        .pipe(gulpMocha({ reporter: 'list' }))
        .on('error', gutil.log);
});

gulp.task('set-dev-node-env', function () {
    return process.env.NODE_ENV = 'development';
});

gulp.task('set-prod-node-env', function () {
    return process.env.NODE_ENV = 'production';
});

// start our server and listen for changes
gulp.task('dev', ['set-dev-node-env'], function () {
    // configure nodemon
    nodemon({
        // the script to run the app
        script: 'server.js',
        ext: 'js',
        watch: ["server.js", "models/", "api/*", 'data/', 'config/'],
        env: {
            PORT: 8000
        },
        tasks:['lint'],
        ignore: ['./node_modules/**']
    }).on('restart', function () {
            console.log('favLister Server restarted!');
    });
});
