// BIND IS ALSO EXPLICIT IN NATURE.

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


// Bind me hum binding store karke rakh lete hai aur phir baad me call kar sakte hai need aane par.
// jab bind call kar rahe tab hum shuru ke arguement ko pass kar sakte jo hume lagta hai ki same rahege baaki ke 
// jab x ko call karenge tab pass kar sakte hai.
let x = updatePersonCountry.bind(person, "India");
x(23);

console.log(person);