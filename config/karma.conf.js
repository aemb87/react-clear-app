// Karma configuration
// Generated on Fri Mar 31 2017 15:52:20 GMT-0300 (UYT)

const path = require('path');
const webpack = require('webpack');

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

    webpack: {
        context: [path.resolve('src'), path.resolve('tests')],
        // plugins: [
        //     new CaseSensitivePathsPlugin(),
        //     new ExtractTextPlugin('style.css'),
        //     new webpack.DefinePlugin({
        //         '__ENVIRONMENT__': '"DEV"',
        //         '__DEBUG_MODE__': true,
        //         '__BASE_HOST__': JSON.stringify(process.env.BASE_HOST || '') ,
        //         '__MOCK_ALL_ENDPOINTS__': JSON.stringify(process.env.MOCK_ALL_ENDPOINTS || ''),
        //         '__MOCKED_ENDPOINTS__': JSON.stringify(process.env.MOCKED_ENDPOINTS || ''),
        //         '__PUBLIC_URL__': JSON.stringify(process.env.PUBLIC_URL || ''),
        //         '__REDIRECTED_ENDPOINTS__': JSON.stringify(process.env.REDIRECTED_ENDPOINTS || ''),
        //         '__LOG_API_ERRORS_REMOTELY__': JSON.stringify(process.env.LOG_API_ERRORS_REMOTELY || ''),
        //         '__SHOW_API_ERRORS__': JSON.stringify(process.env.SHOW_API_ERRORS || '')
        //     })
        // ],
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    exclude: /(node_modules)/,
                    loader: 'babel',
                    query: {
                        presets: ['react', ["es2015", {"loose": true}]],
                        plugins: ['array-includes'],
                        cacheDirectory: true
                    }
                },
                // {
                //     test: /\.?css$/,
                //     loader: ExtractTextPlugin.extract(
                //         "style",
                //         "css!sass")
                // },
                // {
                //     test: /\.(png|jpg|gif)$/,
                //     loader: 'url-loader?limit=8192'
                // },
                // {
                //     test: /\.(otf|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                //     loader: 'file-loader'
                // },
                // {
                //     test: /\.json$/,
                //     loader: 'json'
                // }

            ]
        },
        resolve: {
            modules: ['node_modules'],
        },

        // externals: {
        //     'react/addons': true,
        //     'react/lib/ExecutionEnvironment': true,
        //     'react/lib/ReactContext': true
        // },

        // babelPreprocessor: {
        //     options: {
        //         presets: ['airbnb']
        //     }
        // }
    },

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
