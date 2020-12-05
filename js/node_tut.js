var rs = require('readline-sync');
var sm = require('./add');

var x  = 10;
var y = 20;
var res = x + y;

console.log(res);

var name = rs.question('Yo gimme ur name');
console.log('You are ' +  name);
sm(10,10);
