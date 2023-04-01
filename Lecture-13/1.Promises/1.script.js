let freeHai = true;

let kalMilneAaungi = new Promise((resolve, reject) => {
    console.log("Starting to Wait");
    setTimeout(() => {
        if (freeHai) {
            resolve("Milne aa gaye");
        }
        else {
            // throw will stop the working of whole program. And Put the error on the console.
            // throw new Error("Katt gaya");

            // Reject will handle the error silently and will not stop working of whole, just it will show the error msg from catch
            reject("Katt gaya");
        }
    }, 3000);
})

// .then returns a promise only.
kalMilneAaungi.then((msg) => {
    console.log(msg);
    return "Everything is done";
}).then((newMsg) => {
    console.log(newMsg);
}).catch((err) => {
    console.log(err);
})