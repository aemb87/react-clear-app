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
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: ['babel-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    { 
                        loader: "style-loader" // creates style nodes from JS strings 
                    }, 
                    {
                        loader: "css-loader" // translates CSS into CommonJS 
                    }, 
                    {
                        loader: "sass-loader" // compiles Sass to CSS 
                    }
                ]
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.join(__dirname, 'node_modules'),
        ],
    },
};
