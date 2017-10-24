var webpack = require('webpack')
var express = require('express')
var app = express();

var config = require('./webpack.dev.conf')
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
  
app.listen(3336, "localhost", function(err) {
    err && console.log(err);
});
