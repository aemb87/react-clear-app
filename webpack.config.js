const path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: [
        './main.jsx',
    ],
    output: {
        path: path.join(__dirname, 'www'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: ['babel-loader'],
        },],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.join(__dirname, 'node_modules'),
        ],
    },
};
