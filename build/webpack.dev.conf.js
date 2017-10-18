var webpack = require('webpack');
var config = require('./webpack.base.conf');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

config.entry.app.unshift(
    'eventsource-polyfill',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=100000&reload=true',
    'webpack/hot/only-dev-server'
)

config.devtool = 'source-map';
config.output.publicPath = '/';

config.module.rules.push({
    test: /\.(less|css)$/,
    use: ["style-loader", "css-loader", "less-loader"]
});

config.plugins.push(
    new ExtractTextPlugin('[name].css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new BrowserSyncPlugin({
      host: '127.0.0.1',
      port: 9090,
      proxy: 'http://127.0.0.1:3336/',
      logConnections: false,
      notify: false
    }, {
      reload: false
    })
)

module.exports = config;