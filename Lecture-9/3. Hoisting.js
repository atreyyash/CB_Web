add(10, 20);
substract(100, 20);

function substract(a, b) {
    console.log(a - b);
}

function add(a, b) {
    console.log(a + b);
}

// Hoisting in JS
// all the functions that are declared in JS file will be taken at the top of the file and
// can be accessed anywhere in the file.

// VAR AND FUNCTION ARE HOISTED AT THE TOP OF THE FILE.

// let is not hoisted.
let x = function (a, b) {
    return a + b;
}

let y = function (a, b) {
    return a - b;
}

// If a variable is declared using let then the variable cannot be accessed before its defined.
// but variable defined with var is hoisted at top but the value will be undefined as only LHS goes up.