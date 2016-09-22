module.exports = function(grunt)  {
    "using strict";

    // Project configuration.
    grunt.initConfig({
        distdir: 'dist',
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                unused: true,
                newcap: true,
                noarg: true,
                debug: true,
                boss: true,
                eqnull: true,
            },
            files: ["app_client/**/*.js", "app_client/app.js", "shared/**/*.js"]
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint']);

};