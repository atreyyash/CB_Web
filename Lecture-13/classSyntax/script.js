class Person{
    constructor(name, age, hobby, income) {
        this.name = name;
        this.age = age;
        this.hobby = hobby;
        this.taxable = function () {
            return income >= 7;
        }
    }

    printName() {
        console.log("Name : ", this.name);
    }

    static country() {
        console.log("Country: India");
    }

    get getAge() {
        return this.age;
    }

    set setAge(v) {
        this.age = v;
    }
}

const p1 = new Person("Kartikey", 40, "Kuwara Baap Returns", 10);
console.log(p1);
p1.printName();
console.log(p1.getAge);
p1.setAge = 45;
console.log(p1.getAge);
console.log(p1.taxable());
// console.log(p1.income); // undefined

Person.country();