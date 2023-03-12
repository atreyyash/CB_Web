// Functions are also the data types in JS
// Similar to Number, String, Boolean.

let a = 10; // I can store Number in variable

let str = "Hello World"; // I can store string in variable

let x = function add(a, b) {
    return a + b;
}

console.log(x(10, 20));

// Jaise ki har varible ko access karne ke liye uska naam chahiye aise hi
// agar function ko variable me store kia hua hai toh vo variable ki need hogi

console.log(x);

// A function that does not have name that type of function is called anonymous function.
let cat = function () {
    console.log("Cat says Meoww!");
}

console.log(cat);
console.log(cat.toString());