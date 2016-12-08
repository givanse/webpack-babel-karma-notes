var webpack = require('webpack');

module.exports = {

  entry: './src/index.js',
 
  output: {
    path: __dirname + '/dist',
    filename: 'index.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [/src/, /test/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },

  plugins: []

  //https://webpack.github.io/docs/list-of-plugins.html
  //occurrenceOrder: true,
  //dedupe: true,
  //maxChunks: 2,
  //minChunkSize: 1

};
