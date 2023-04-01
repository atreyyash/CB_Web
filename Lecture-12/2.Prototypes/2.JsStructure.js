let a = 10;

let person = {
    name: 'Kartikey',
    hobby: 'Kuwara Baap Movie'
}

function hello() {
    console.log("Hello");
}

console.log("a.__proto__ == Number.prototype:", a.__proto__ == Number.prototype);
console.log("a.__proto__.__proto__ == Object.prototypes:", a.__proto__.__proto__ == Object.prototype);

console.log("person.__proto__ == Object.prototype: ", person.__proto__ == Object.prototype);
console.log("hello.__proto__ == Function.prototypes: ", hello.__proto__ == Function.prototype);

// We can functions in prototypes so that its objects or child object can access it.
Object.prototype.sayHello = function () {
    console.log("Hello!!");
}

hello.sayHello();
person.sayHello();
a.sayHello();