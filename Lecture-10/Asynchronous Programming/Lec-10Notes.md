# Lecture - 10

* For Asynchronous Programming in JS, if we want to make a delay of 'x' seconds or we want that if some function is taking time in executing then other should not stop working while waiting for it.

```
// This function creates a delay of 1 second
function waitASec() {
    let startTime = new Date().getTime();

    while (startTime + 1000 > new Date().getTime()) {
        
    }
}
```

* To create a delay of 'n' second

```
<!-- call unit delay funtion 'n' times -->
function waitNSec(n) {
    for (let i = 0; i < n; i++){
        waitASec();
    }
}

waitNSec(3);
```

**2. Async Programming**

* Aynchronous Programming me multiple tasks ko parallel me run kar sakte hai and it is done with the help of multiple threads

* Multiple threads help to execute several programs at a time.

* JS is not a multi-threaded language.

* JS me multi-threading web api ke through achieve hoti hai.

* JS me single thread hota hai and async program me hum delay vala kaam browser ko de dete hai

* web api se jo kaam ham nhi kar skte vo api k through kisi aur ko de skte hai, api ek user aur browser k beech ki layer hai jo batata hai ki kya kar skte ho aur kya nahi.

**3. Set Interval  & Set Timeout**

```
1. setInterval(() => {
    console.log('Naa');
});
```