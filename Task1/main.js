var i = 1;
var j = {};

var k = j;

console.log(j == k);

k.name = 'Alex';

console.log(j,k);
