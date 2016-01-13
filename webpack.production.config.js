var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
  entry: path.resolve(__dirname, 'app/app.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loaders: ['react-hot','babel-loader?presets[]=es2015&presets[]=react'],
        exclude: node_modules_dir
      },
      {
        test: /\.scss$/,
        loaders: ['style','css','sass']
      },
      {
        test: /\.css$/,
        loaders: ['style','css']
      },
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=1024000'}
    ]
  }
};

module.exports = config;
