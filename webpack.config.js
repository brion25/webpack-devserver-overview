var path = require('path'),
    webpack = require('webpack');

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
      }
    ]
  },
  plugins:[
    new webpack.optimize.UglifyJsPlugin({minimize:PROD})
  ]
}
