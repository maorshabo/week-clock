var path = require('path');
var webpack = require('webpack');
var config = {
  entry: './app/app.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: "/assets/"
  },
  devtool: "source-map",
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint-loader'],
        include: path.join(__dirname,'app')
      }
    ],
    loaders: [
      {
        test: /.jsx?$/,
        loaders: ['react-hot','babel-loader?presets[]=es2015&presets[]=react'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style','css','sass']
      },
      {
        test: /\.css$/,
        loaders: ['style','css']
      }
    ]
  }
};

if (process.env.NODE_ENV && process.env.NODE_ENV == 'production') {
  config.devtol = 'cheap-module-source-map';
  config.plugins.concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]);
}

module.exports = config;
