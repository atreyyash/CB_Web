// If a variable is declared using let then the variable cannot be accessed before its defined.
// but variable defined with var is hoisted at top but the value will be undefined as only LHS goes up

// function Fun(v) {
//     console.log(x);
//     if (v > 5) {
//         var x = 10;
//     }
//     else {
//         var y = 100;
//     }
//     console.log(y);
// }

// If and Else block are conditional scope not functional so var x & var y will hoisted 
// but only x will be assigned value as else block will not run hence undefined.

// Fun(10);

// function Fun1(v) {
//     console.log(x);
//     if (v > 5) {
//         let x = 10;
//     }
//     else {
//         let y = 100;
//     }
//     console.log(y);
// }

// Fun1();
// It will give error as we cannot use variable defined before its defined.
// let variable can be accessed in its scope and its children scope.

/*
LET :- 
`let jo ha curly braces ke andar hi chalega matlab ek particular scope me koi x ban gaya toh wahi chalega 
aur kahin agar bahar bhi 'x' bana hua hai toh sirf andar vala hi chalega lekin agar kisi bhi block me 
'x' ko naya initialize nahi kara (i.e. let x = 100; nahi use kiya keval x = 100; kiya) hua toh apne parent 
scope me jaake dekhega aur value usme updation marega.
*/

function Fun2(v) {
    let x = 10
    if (v > 5) {
        let x = 1000;
        console.log(x);
    }
    else {
        let y = 100;
    }
    console.log(x);
}

Fun2(10);

function Fun3(v) {
    let x = 10
    if (v > 5) {
        x = 1000;
        console.log(x);
    }
    else {
        let y = 100;
    }
    console.log(x);
}

Fun3(10);