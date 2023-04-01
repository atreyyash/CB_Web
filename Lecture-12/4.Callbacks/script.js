function MainCourse(cb) {
    console.log("Khaana shuru");
    setTimeout(() => {
        console.log("Khaana Katm");
        cb(sweets);
    }, 3000);
}

function drinks(cb) {
    console.log("Drinks Peena Shuru");
    setTimeout(() => {
        console.log("Drinks Katm");
        cb(billBharo);
    }, 3000);
}

function sweets(cb) {
    console.log("Sweets shuru");
    setTimeout(() => {
        console.log("Sweets bhi katm");
        cb();
    }, 3000);
}

function billBharo() {
    console.log("Bill kaun bharega discussion shuru");
    setTimeout(() => {
        console.log("Bill paid");
    }, 3000);
}

MainCourse(drinks);