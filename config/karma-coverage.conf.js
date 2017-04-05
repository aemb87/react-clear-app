var baseConf = require('./karma.conf');

/**
* Base Karma configuration for running a coverage analysis.
* Based on the base config, this one is an extension to add all data is needed for a coverage
* instrumentation. It is also a base config, as it will be reused in a local and a CI coverage task.
* @type {Object}
*/
var coverageConf = merge({}, baseConf, {
    webpack: {
        isparta: {
            embedSource: true,
            noAutoWrap: true,
            babel: {
                presets: ['es2015', 'react']
            }
        },
        module: {
            preLoaders: [
                {
                    test: /\.js$/,
                    include: path.resolve('src'),
                    loader: 'isparta-loader'
                }
            ]
        }
    },
    coverageReporter: {
        type: 'lcov',
        dir: 'test/coverage/'
    },

    reporters: ['coverage']
}, customizer);

module.exports = function(config) {
  coverageConf.logLevel = config.LOG_INFO;
  config.set(coverageConf);
}
