var webpack = require('webpack'),
    pkg = require('./package.json'),
    name = pkg.name,
    version = pkg.version;

module.exports = {
  devtool: 'source-map',
  entry: {
    'build': './src/js/app.jsx'
  },
  output: {
    filename: './public/js/[name].js',
    sourceMapFilename: './public/js/[name].map?[hash]',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015']
        }
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-runtime'],
          presets: ['react','es2015']
        }
      },
    ]
  }
};
