// We can pass function as ans argument.

function Vehicle(Fortuner) {
    Fortuner();
}

Vehicle(function Fortuner() {
    console.log("Inside Fortuner");
});


function FunGen() {
    function fun() {
        console.log("Having fun with JS!");
    }
    return fun;
}

x = FunGen();

x();

console.log(x);

function movies() {
    
    function KuwaraBaap() {
        console.log("Kuwara Baap!");
    }

    function jabWeMet() {
        console.log("Jab We Met!");
    }

    return KuwaraBaap;
}

let movie = movies();
movie();