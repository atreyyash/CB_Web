// ()
// (()=>{}), (function(){})
// (()=>{})()

let details = (() => {
    let person = {
        name: 'Vaibhav',
        age: 20
    }

    function updateMarks(m) {
        person.marks = m;
    }

    updateMarks(90);
    console.log(person);
    function updateAge(a) {
        person.age = a;
    }

    return {
        "updateAge": updateAge,
        "person": person
    }
})();

details.updateAge(100);
console.log(details);