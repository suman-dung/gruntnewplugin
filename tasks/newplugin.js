/*
 * grunt-newplugin
 * https://github.com/sdung/gruntnewplugin
 *
 * Copyright (c) 2017 suman-dung
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  /*grunt.registerMultiTask('newplugin', 'The best Grunt plugin ever.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join(grunt.util.normalizelf(options.separator));

      // Handle options.
      src += options.punctuation;

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });*/


  grunt.registerMultiTask("newplugin", "Append JS/CSS assets to a file", function() {
    var paths = grunt.file.expand( this.data.paths ),
        out = this.data.output,
        contents = "";
		console.log("1",this.data);
		console.log("2",paths);
		console.log("3",out);
		var srcf = grunt.file.read(paths[0]);
			console.log("4",srcf);
    paths.forEach(function( path ) {
        if ( /\.js$/i.test( path ) ) {
            contents += '<script src="' + path + '"></script>';
        } else if ( /\.css$/i.test( path )) {
            contents += '<link rel="stylesheet" type="text/css" href=' + path + ' />';
        }
    });

    grunt.file.write( out, contents );
});

};
