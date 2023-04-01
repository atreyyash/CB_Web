function createPerson(name, hobby, age) {
    this.name = name;
    this.hobby = hobby;
    this.age = age;
}

let p1 = new createPerson("Vaibhav", "Tamil Gaane Sunna", 20);
let p2 = new createPerson("Kartikey", "Kuwara Baap", 24);

console.log(p1);
console.log(p2);

// createPerson("Vaibhav", "Tamil Gaane Sunna", 20);
// createPerson("Kartikey", "Kuwara Baap", 24);

// console.log(global);
// Sirf global(window) me hi update karega
// last wala part hi store hoga baaki sab update ho jayege.