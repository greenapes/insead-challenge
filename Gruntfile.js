module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        'http-server': {
            'dev': {
                    // the server root directory
                    root: "./",
                    port: 8080,
                    host: "localhost",
                    showDir : true,
                    autoIndex: true,
                    defaultExt: "html",
                    //wait or not for the process to finish
                    runInBAckground: false    
                }
        }
    });
    grunt.loadNpmTasks('grunt-http-server');
    grunt.registerTask('s', ['http-server']);
};

