"use strict";

var webpack = require('webpack');

module.exports = {
    entry: "./frontend/js/app",
    output: {
        path: __dirname + "/public",
        filename: "build.js"
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300 // we can set this option to 10000 if we want to ensure that it works.
    },
    devtool: "source-map",

    module: {
        loaders: [{
            test: /\.js$/,
            loader: "babel?presets[]=es2015,plugins[]=transform-es2015-modules-commonjs"
        },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            }
        ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
            drop_console: true,
            unsafe: true
        }
      })
    ]
};