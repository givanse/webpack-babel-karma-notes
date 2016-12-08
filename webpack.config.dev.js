var webpackConfig = require('./webpack.config.js');

var webpackConfigDev = {

  displayChunks: true,

  profile: 'dependencies'

};

module.exports = Object.assign(webpackConfig, webpackConfigDev);
