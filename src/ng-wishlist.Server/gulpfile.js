var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

// start our server and listen for changes
gulp.task('default', function () {
    // configure nodemon
    nodemon({
        // the script to run the app
        script: 'server.js',
        ext: 'js',
        watch: ["server.js", "models/", "api/*", 'data/', 'config/'],
        env: {
            PORT: 8000
        },
        ignore: ['./node_modules/**']
    })
   .on('restart', function () {
        console.log('favLister Server restarted!');
    });
});