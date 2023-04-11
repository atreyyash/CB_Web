const lib2 = require("./lib2");
console.log("Inside lib1");

function add(a, b, ...args) {
    let sum = args.reduce((acc, val) => acc + val, 0);
    return a + b + sum;
}

let billi = 'Persian Cat';

module.exports.add = add;
module.exports.billi = billi;
module.exports.lib2 = lib2;

// The following method makes a map for the exports of the particular file and stores it.
// Isme export ka object replace hota hai but upar vale method me exort obj ka reference rakhte hai toh jo bhi change hota hai it get updated.

// module.exports = {
//     add,
//     billi,
//     lib2
// }