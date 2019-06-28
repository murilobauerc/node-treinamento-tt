const { sum, sub, division,multiply } = require('./calculadora')
const upperCase = require('upper-case')

console.log(`1 + 2 = ${sum(1,2)}`);
console.log(`4 - 2 = ${sub(4,2)}`);
console.log(`5 / 1 = ${division(5,1)}`);
console.log(`2 * 2 = ${multiply(2,2)}`);

console.log(upperCase('Hello,world'))
