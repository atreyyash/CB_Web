function nibbaBreakUp() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Nibba BreakUp");
        }, 8000);
    })
}

function nibbiBreakUp() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Nibbi BreakUp");
        }, 7000);
    })
}

function nipatGaye() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Nipat gaye toh ab kya Breakup");
        }, 3000);
    })
}


Promise.race(
    [nibbaBreakUp(), nibbiBreakUp(), nipatGaye()]
        .then((msg) => {
            console.log(msg);
        })
        .catch((err) => {
            console.log(err);
        })
);