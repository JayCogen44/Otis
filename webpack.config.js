const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './client/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
    },
    devServer: {
        historyApiFallback: true,
        open: true,
        contentBase: './',
        publicPath: '/build/',
        proxy: {
            '/dev-server': {
                target: 'http://localhost:3300',
                pathRewrite: { '^/dev-server': '' }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ]
            }
        ]
    }
};