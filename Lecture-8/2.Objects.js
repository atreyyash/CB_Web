let obj = {
    a: true,
    b: "Hello",
    c: 110.11,
    'movie name': 'Bahubali',
    '': 'Empty String',
    ' ': 'Space hai'
};

// console.log(obj.a);
// console.log(obj.b);
// console.log(obj.c);

// console.log(obj['a']);
// console.log(obj['b']);
// console.log(obj['c']);

// console.log(obj.movie name);
// console.log(obj["movie name"]);
// console.log(obj['']);
// console.log(obj[' ']);

// isme array Linked List se banta hai
let arr = ["Jello", 1, 2, true, "abc"];
// console.log("Arr :- " + arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

arr[10] = 'Meri marzi';
console.log(arr);

arr.push("Mei kuch bhi karu");
arr.pop();
console.log(arr);


for (let i in obj) {
    console.log(i,  ": ", obj[i]);
}