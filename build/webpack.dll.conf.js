const webpack = require('webpack');
const path = require('path');
const vendors = [
    "antd",
    "axios",
    "less",
    "react",
    "react-dom",
    "react-redux",
    "react-router",
    "react-router-dom",
    "react-router-redux",
    "redux",
    "redux-thunk"
];
module.exports = {
    output: {
        path: path.resolve(__dirname, '../dist/asset'),
        filename: '[name].js',
        library: '[name]',
    },
    entry: {
        "lib": vendors,
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.resolve(__dirname, '../manifest.json'),
            name: '[name]',
            context: path.resolve(__dirname, '../'),
        }),
    ],
};