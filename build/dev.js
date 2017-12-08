var webpack = require('webpack')
var express = require('express')
var proxy = require('express-http-proxy');
var fs = require('fs')
var path = require('path')
var app = express();

var config = require('./webpack.dev.conf')
var proxyConf = require('../src/consts/config')
var mockRoutes = require('../mock/route')
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: false,
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
      chunks: false
    }
}));

app.use(require('webpack-hot-middleware')(compiler));

if (proxyConf.MOCK) {
    for (var name in mockRoutes) {
        var s = name.split(' ')
        var method = s[0].toLowerCase()
        var url = s[1]
        var mockFile = mockRoutes[name]
        app[method](url, (function (mockFile) {
          return function (req, res) {
            res.setHeader('Content-Type', 'application/json')
            res.send(fs.readFileSync(path.join(__dirname, '../mock/', mockFile)))
          }
        })(mockFile))
    }
} else {
    const { HOST  = '线上地址' } = proxyConf
    app.use('/', proxy(proxyConf.HOST));
}

app.listen(3336, "localhost", function(err) {
    err && console.log(err);
});
