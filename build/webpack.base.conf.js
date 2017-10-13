const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(path.join(__dirname, './index.html'))

module.exports = {
    entry: {
        app: [path.resolve(__dirname, '../src/index.js')]
        ,
        vendor: [
            // 'history',
            // 'lodash',
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'react-router-redux',
            'redux',
            'redux-thunk'
          ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist/asset'),
        publicPath: '/asset/',
        chunkFilename: '[name].js'
    }, 
    resolve: {
        modules: [
            path.join(__dirname, '../src'),
            'node_modules'
        ]
    },
    module: {
        rules: [
            {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: 'babel-loader'
        }, 
        {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: ['file-loader?limit=1000&name=files/[md5:hash:base64:10].[ext]']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '统一运维管理',
            filename: 'index.html',
            template: path.join(__dirname, '../index.html'),
            hash: true
        })
        ,
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ],
};
