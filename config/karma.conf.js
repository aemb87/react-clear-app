const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');


webpackConfig.resolve.alias = {
    actions:    path.resolve(webpackConfig.context, 'actions/'),
    constants:  path.resolve(webpackConfig.context, 'constants/'),
    reducers:   path.resolve(webpackConfig.context, 'reducers/'),
    containers: path.resolve(webpackConfig.context, 'containers/'),
    components: path.resolve(webpackConfig.context, 'components/'),
    routes:     path.resolve(webpackConfig.context, 'routes/')
}


module.exports = function(config) {
  config.set({
    plugins: [
        'karma-coverage',
        'karma-webpack',
        'sass-loader',
        'karma-chrome-launcher',
        // 'karma-phantomjs-launcher',
        'karma-mocha-reporter',
        'karma-mocha'
    ],

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
        'tests/react-throw-on-error.js',
        'tests/allTests.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'tests/allTests.js': ['webpack']
    },

    client: {
        captureConsole: true
    },

    webpack: webpackConfig,

    webpackMiddleware: {
        noInfo: true,
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
