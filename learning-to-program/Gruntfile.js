module.exports = functions(grunt) {
  //Project config
  grunt.initConfig({
    // Configure tasks here
    concat: {
      release: {
        src: {'js/values.js','js/prompt.js'},
        dest: {'release/main.js'}
      }
    },
    copy: {
      release: {
        src: 'mainfest.json',
        dest: 'release/manifest.json'
      }
    },
    jshint: {
      files: {'js/values.js','js/prompt.js'}
    }
  });

  // Load G-Plugins here
  grunt.loadNpmtasks('grunt-contrib-concat');
  grunt.loadNpmtasks('grunt-contrib-copy');
  grunt.loadNpmtasks('grunt-contrib-jshint');
  // Register tasks here
  grunt.registerTask('default',['jshint','concat','copy']);
}
