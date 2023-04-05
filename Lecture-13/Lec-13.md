# Lecture-13

# Promises

Promise has 3 states pending, fulfilled and rejected.

Pending is the initial state

Fulfilled is completed state

Rejected is failed operation

```jsx
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
```

- Promise requires two parameters 1st is resolve(for successfull execution) 2nd is reject(failed operation)
- Reject shows the erroe msg silently on the console and does not stop the working of the whole program.

![https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png)

```jsx
kalMilneAaungi.then((msg) => {
    console.log(msg);
    return "Everything is done";
}).then((newMsg) => {
    console.log(newMsg);
}).catch((err) => {
    console.log(err);
})
```

- .then( ( ) ⇒ { } ) defines the resolve function and always returns a promise in return of promise.
- .catch( ( ) ⇒ { } ) catches errors that are thrown by the promises
- catch is common for all promises

```jsx
download('http://movies.com/singham.mp4')
    .then(compress)
    .then(upload)
    .then(() => {
        console.log("All Done!");
    })
    .catch(() => {
        console.log(err);
    })
```

- .then( ) me agar function banakar aage compress ko call kar rahe the toh phir se vahi callback vali cheez ho jaati.
- Yaha par direct compress pass kar diya, ab jo bhi then return karega vo as a parameter pass ho jayega to compress. This is how we sequentialize the asynchronous codes.

```jsx
Promise.race(
    [nibbaBreakUp(), nibbiBreakUp(), nipatGaye()]
        .then((msg) => {
            console.log(msg);
        })
        .catch((err) => {
            console.log(err);
        })
);
```