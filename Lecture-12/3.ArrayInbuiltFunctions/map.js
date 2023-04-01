let arr = [1, 2, 3, 4, 5];

let newarr = arr.map((val, idx, ar) => {
    return val * 10;
})

let newarr1 = arr.map((val, idx, ar) => val * val);

console.log("arr: ", arr);
console.log("newarr: ", newarr);
console.log("newarr1", newarr1);

let newarr2 = arr.filter((val, idx, ar) => {
    if (val % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
});

console.log("newarr2:", newarr2);

// reduce
// pure array ki ek single value return karega jo bhi solve karke aayi hai like pure array ka sum ya product etc.
let sum = arr.reduce((accum, val, idx, ar) => {
    return accum + val;
});

console.log(sum);

// accumulator (accum) mei agar value di hai to vo ayegi array ki paheli bucket ki jo value hai vo jayegi usme
let product = arr.reduce((accum, val, idx, ar) => {
    return accum * val;
}, 0);
// we can assign default values to the parameters. After the arrow function closes then values that are specified 
// will be assigned in order they are given

console.log(product);