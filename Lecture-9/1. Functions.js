function add(a, b) {
    return a + b;
}

let ans = add(10, 30);
console.log(ans);

console.log(add(10, 20));

function HelloWorld() {
    console.log("Hello World");
}

HelloWorld();


let ans1 = HelloWorld();
console.log(ans1);  // Jo bhi HelloWorld return karega vo print ho jayega lekin agar kuch return nahi karta toh undefined return hoga by default.
