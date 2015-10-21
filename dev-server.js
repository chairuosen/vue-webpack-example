var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var config = require('./webpack.config.js');

[
  "webpack-dev-server/client?http://localhost:5000",
  "webpack/hot/dev-server",
].forEach(function(one){
  config.entry.main.unshift(one);
})
config.plugins.unshift(new webpack.HotModuleReplacementPlugin());
config.output.path = "/";
config.debug = true;
var server = new WebpackDevServer(webpack(config), {
  contentBase: "./",

  hot: true,

  historyApiFallback: true,

  filename: config.entry.main[0],
  publicPath: config.output.publicPath,
  stats: { colors: true },
});
server.listen(5000, "localhost", function() {});
// server.close();