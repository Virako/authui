module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'scripts/vendor/angular/angular.js',
      'scripts/vendor/angular-route/angular-route.js',
      'scripts/vendor/angular-mocks/angular-mocks.js',
      'scripts/js/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome', 'Firefox'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
