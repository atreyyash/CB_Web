const MyCar = require("./myCar");

let { add } = require("./lib1");

const lib1 = require('./lib1');
const lib2 = require('./lib2');

console.log(add(10, 100));
console.log(lib1);
console.log(lib2);

MyCar.print();