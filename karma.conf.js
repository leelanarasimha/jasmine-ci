module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    files: ['./CustomMatcher.js', '*.js', '*.spec.js'],
    preprocessors: {
      '*.js': ['coverage']
    },
    plugins: ['karma-jasmine', 'karma-chrome-launcher', 'karma-coverage'],
    reporters: ['dots', 'coverage'],
    color: true,
    singleRun: true,
    browsers: ['ChromeHeadless'],
    coverageReporter: {
      dir: 'coverage/',
      subdir: 'html'
    }
  });
};
