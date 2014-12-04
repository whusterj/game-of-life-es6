module.exports = function (grunt) {

  'use strict';

  var _ = grunt.util._;

  grunt.initConfig({

    // directories
    src_dir:   'src/',
    build_dir: 'dist/',
    app_files: {
      js: {
        src: [
          '<%= src_dir %>**/*.js'
        ],
        dest: [
          '<%= build_dir %>'
        ]
      }
    },

    //
    '6to5': {
      options: {
          modules: 'amd'
      },
      build: {
        files: [{
          expand: true,
          cwd: '<%= src_dir %>/',
          src: ['**/*.js'],
          dest: 'dist/',
        }],
      }
    },

    // clean out build destination files when `grunt clean` is executed.
    clean: {
      js: ['<%= app_files.js.dest %>*'],
    },

    // watch our source files for changes and re-build as necessary
    watch: {
      '6to5': {
        files: ['<%= app_files.js.src %>'],
        tasks: ['default']
      }
    }

  });

  var external_tasks = [
    'grunt-contrib-watch',
    'grunt-contrib-clean',
    'grunt-6to5'
  ];

  _.forEach(external_tasks, function (task) {
    grunt.loadNpmTasks(task);
  });

  grunt.registerTask('default', [
    'clean',
    '6to5',
    // 'watch'
  ]);

}