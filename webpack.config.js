module.exports = {

  entry: './src/index.js',
 
  output: {
    path: __dirname + '/dist',
    filename: 'index.js'
  },

  module: {
    loaders: [
    ]
  },

  //https://webpack.github.io/docs/list-of-plugins.html
  //occurrenceOrder: true,
  //dedupe: true,
  //maxChunks: 2,
  //minChunkSize: 1

};
