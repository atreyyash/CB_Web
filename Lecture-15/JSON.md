# JSON

************************JAVASCRIPT OBJECT NOTATION************************

- It is basically used to send data from api’s.
- It converts JS objects into string for transferring and then at receiver’s end it will again parse as JS Object.

```jsx
let obj = {
    a: "Hello",
    b: true,
    c: 1021121,
    e: [1, 2, 3, 4],
    f: {
        "picnic": true
    }
}

// JSON: JavaScript Object Notation
console.log(JSON.stringify(obj));

let obj_json = JSON.stringify(obj)
console.log(JSON.parse(obj_json));
```

JSON.stringify(object) will convert JS object to string 

And then to parse it JSON.parse(object) is used.