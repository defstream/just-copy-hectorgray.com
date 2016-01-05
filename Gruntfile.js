'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({
  port: LIVERELOAD_PORT
});
var mountFolder = function(connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // configurable paths
  var config = {
    app: 'src',
    dist: 'build'
  };

  grunt.initConfig({
    hgWeb: config,
    watch: {
      options: {
        nospawn: true,
        livereload: {
          liveCSS: false
        }
      },
      livereload: {
        options: {
          livereload: true
        },
        files: [
          '<%= hgWeb.app %>/*.html',
          '{.tmp,<%= hgWeb.app %>}/css/{,*/}*.css',
          '<%= hgWeb.app %>/media/{,*/}*.*',
          '<%= hgWeb.app %>/vendor/{,*/}*.*',
          '<%= hgWeb.app %>/img/{,*/}*.{png,jpg,jpeg,gif,webp}'
        ]
      },
      js: {
        files: ['<%= hgWeb.app %>/scripts/{,*/}*.js'],
        tasks: ['eshint']
      },
      styles: {
        files: [
          '<%= hgWeb.app %>/css/{,*/}*.css'
        ],
        tasks: ['copy:styles', 'autoprefixer:server']
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      server: {
        files: [{
          expand: true,
          cwd: '.tmp',
          src: '**/*.css',
          dest: '.tmp'
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= hgWeb.dist %>',
          src: ['**/*.css', '!bower_components/**/*.css'],
          dest: '<%= hgWeb.dist %>'
        }]
      }
    },
    connect: {
      options: {
        port: 9000,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          middleware: function(connect) {
            return [
              //lrSnippet,
              mountFolder(connect, '.tmp'),
              mountFolder(connect, config.app)
            ];
          }
        }
      },
      test: {
        options: {
          open: {
            target: 'http://localhost:<%= connect.options.port %>/test'
          },
          middleware: function(connect) {
            return [
              mountFolder(connect, config.app)
            ];
          },
          keepalive: true
        }
      },
      dist: {
        options: {
          middleware: function(connect) {
            return [
              mountFolder(connect, config.dist)
            ];
          }
        }
      }
    },
    open: {
      server: {
        path: 'http://localhost:<%= connect.options.port %>'
      }
    },
    clean: {
      dist: ['.tmp', '<%= hgWeb.dist %>/*'],
      server: '.tmp'
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        '<%= hgWeb.app %>/scripts/{,*/}*.js',
        '!<%= hgWeb.app %>/scripts/vendor/*',
        'test/spec/{,*/}*.js'
      ]
    },
    useminPrepare: {
      html: '<%= hgWeb.app %>/index.html',
      options: {
        dest: '<%= hgWeb.dist %>'
      }
    },
    usemin: {
      html: ['<%= hgWeb.dist %>/{,*/}*.html'],
      css: ['<%= hgWeb.dist %>/css/{,*/}*.css'],
      options: {
        dirs: ['<%= hgWeb.dist %>']
      }
    },
    plato: {
      options: {
        jshint: grunt.file.readJSON('.jshintrc')
      },
      quality: {
        files: {
          'doc/analysis': ['<%= hgWeb.dist %>/{,*/}*.js']
        }
      }


    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= hgWeb.app %>/img',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%= hgWeb.dist %>/img'
        }]
      }
    },
    minifyHtml: {
      options: {
        quotes: true,
        empty: true
      },
      app: {
        files: [{
          expand: true,
          cwd: '<%= hgWeb.dist %>',
          src: '*.html',
          dest: '<%= hgWeb.dist %>'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= hgWeb.app %>',
          dest: '<%= hgWeb.dist %>',
          src: [
            '.htaccess',
            '!**/*.DS_Store',
            '*.{ico,txt}',
            '*.html',
            'css/**',
            'vendor/**',
            'media/**',
            '!css/**/*.scss',
            'img/{,*/}*.{webp,gif,png,jpg,jpeg}'
          ]
        }]
      }
    },
    // See this tutorial if you'd like to run PageSpeed
    // against localhost: http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/
    pagespeed: {
      options: {
        nokey: true
      },
      mobile: {
        options: {
          url: 'https://www.hectorgray.com',
          locale: 'en_US',
          strategy: 'mobile',
          threshold: 80
        }
      },
      desktop: {
        options: {
          url: 'https://www.hectorgray.com',
          locale: 'en_US',
          strategy: 'desktop',
          threshold: 80
        }
      }
    }
  });

  grunt.registerTask('server', function(target) {
    grunt.log.warn(
      'The `server` task has been deprecated. Use `grunt serve` to start a server.'
    );
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('serve', function(target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'copy:styles',
      'autoprefixer:server',
      'connect:livereload',
      'open',
      'watch'
    ]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'connect:test'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'useminPrepare',
    'imagemin',
    'autoprefixer',
    'usemin',
    'minifyHtml',
    'pagespeed',
    'copy'
  ]);

  grunt.registerTask('default', [
    'jshint',
    'build'
  ]);
};
