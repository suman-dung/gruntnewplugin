/*
 * grunt-newplugin
 * https://github.com/sdung/gruntnewplugin
 *
 * Copyright (c) 2017 suman-dung
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Configuration to be run (and then tested).
    newplugin: {
		js: {
			paths: ["js/**/*.js"],
			output: "head.js"
		},
		css: {
			paths: ["css/**/*.css"],
			output: "head.css"
		}
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['newplugin']);

};
