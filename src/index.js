var chalk = require('chalk');
chalk = new chalk.constructor({enabled: true});
var average = require('./average');

var list = [2, 2, 5];
var a = average(list);
var m =  'average: ' + a;
 m = chalk.cyan(m);
console.log(m);

module.exports = function() {
  console.log('hello world');
};