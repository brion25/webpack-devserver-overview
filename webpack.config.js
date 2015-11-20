var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

if(!global.PROD){
  global.PROD = false;
}

module.exports = {
  entry:'./app/app.js',
  output:{
    path:path.join(__dirname,'./public/'),
    filename:'bundle.js'
  },
  module:{
    loaders:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel?presets[]=es2015"
      },
      {
        test:/\.scss$/,
        loader : ExtractTextPlugin.extract('style-loader','css-loader!autoprefixer-loader?{browsers:["last 30 version", "Firefox 15"]}!sass-loader')
      }
    ]
  },
  plugins:[
    new webpack.optimize.UglifyJsPlugin({minimize:PROD}),
    new ExtractTextPlugin('bundle.css')
  ]
}
