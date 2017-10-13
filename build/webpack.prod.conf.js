var webpack = require('webpack'),
    path = require("path"),
    config = require('./webpack.base.conf'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    UglifyJSPlugin = require('uglifyjs-webpack-plugin');

config.output.filename = '[name].[chunkhash:6].js';
config.output.chunkFilename = '[id].[chunkhash:6].js';

config.module.rules.push({
    test: /\.(less|css)$/,
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ["css-loader", "less-loader"]
    }) 
});

config.plugins.push(
    // new CleanWebpackPlugin(['dist']),
    new CleanWebpackPlugin('dist', {
        root: path.resolve(__dirname, '..'),
        verbose: false
    }),
    new CopyWebpackPlugin([ // 复制高度静态资源
        {
            context: path.join(__dirname, 'src/lib'),
            from: '**/*',
            ignore: ['*.md']
        }
    ]),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.optimize.CommonsChunkPlugin({
    //     // 公共代码分离打包
    //     names: ['vendor', 'mainifest']
    // }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.MinChunkSizePlugin({
        minChunkSize: 30000
    }),
    new ExtractTextPlugin('[name].[contenthash:6].css', {
        allChunks: true // 若要按需加载 CSS 则请注释掉该行
    })
  );

module.exports = config;
