const autoprefixer = require('autoprefixer');


module.exports = (grunt) => {
  grunt.loadNpmTasks('grunt-postcss');

  grunt.initConfig({
    postcss: {
      options: {
        map: true,
        processors: [autoprefixer,
        ],
      },
      dist: {
        src: './src/stylesheets/*.css',
      },
    },
  });

  grunt.registerTask('default', ['postcss:dist']);
};
