import average from './average';
import c from 'chalk';
const chalk = new c.constructor({enabled: true});

const list = [2, 2, 5];
const a = average(list);
let m =  'average: ' + a;
m = chalk.cyan(m);
console.log(m);

export default function() {
  console.log('hello world');
};
