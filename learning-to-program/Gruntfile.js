
module.exports = function(grunt){
    // project configuration
    grunt.initConfig({

        concat:{
            release: {
                src: ['js/values.js', 'js/prompt.js'],
                dest:'release/main.js'
            }
        },
        copy: {
            release: {
                src: 'manifest.json',
                dest: 'release/manifest.json'
            }
        },
        jshint: {
            files: ['js/values.js', 'js/prompt.js']
        }
    });
    // we will load grunt plugins here
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // we will register tasks here
    grunt.registerTask('default', ['jshint', 'concat', 'copy']);

};
