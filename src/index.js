var chalk = require('chalk');
var average = require('./average');

var list = [2, 2, 5];
var a = average(list);
var m =  'average: ' + a;
console.log(chalk.cyan(m)); // 3

module.exports = function() {
  console.log('hello world');
};
