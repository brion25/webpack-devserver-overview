global.PROD = true;

var WebpackDevServer = require('webpack-dev-server'),
    webpack = require('webpack'),
    config = require('./webpack.config.js');

var compiler = webpack(config);

var server = new WebpackDevServer(compiler,{
  contentBase:'./public/',
  noInfo:false,
  stats:{
    colors:true
  }
});

server.listen(3000,"localhost",function(){
  console.log("Server is listen at: http://localhost:3000");
})
