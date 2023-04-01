function updatePersonCountry(country, age) {
    this.country = country;
    this.age = age;
}

let person = {
    name: 'Vaibhav',
    marks: 90,
    isPass: function () {
        if (this.marks > 40) {
            console.log("Pass Hai");
            this.certificate = true;
        }
        else {
            console.log("Fail Hai");
            this.certificate = false;
        }
    }
};

let person2 = {
    name: 'Nitish',
    marks: 50,
    isPass: function () {
        if (this.marks > 40) {
            console.log("Pass Hai");
            this.certificate = true;
        }
        else {
            console.log("Fail Hai");
            this.certificate = false;
        }
    }
};

// fun.call(obj, firstArguement, secondArguement, -- so on); this will point to obj inside fun
// Pahle this specify hota hai matlab obj specify hota hai and uske baad arguements pass hote hai.
updatePersonCountry.call(person, "India", 20);
console.log(person);
updatePersonCountry.call(person2, "Nigeria", 200);
console.log(person2);

// If we do not explicitly bind 'this' then we can not update country for a particular person. Hence explicit binding is needed
// it can be done by using 'call', 'apply', 'bind'

// Apply me array jata hai aur vo apne aap break ho jata hai parameters me orderwise.
// agar call me array bhej diya toh keval pahle parameter me pura arrya chala jayega.
updatePersonCountry.apply(person, ["India", 18]);
console.log(person);

updatePersonCountry.apply(person2, ["Argentina", 50]);
console.log(person2);