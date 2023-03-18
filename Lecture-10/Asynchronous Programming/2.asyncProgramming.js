console.log("Hello");

setTimeout(function () {
    console.log("Order food");
}, 3000);

console.log("Watching Movie");

setTimeout(function () {
    console.log("Get some Drinks");
}, 2000);

console.log("Take a Bath");

console.log("Dancing");

// Asynch prog mei multiple tasks ko parallel mei perform kar sake aur jo kaam independent of each other hai it is done with the help of multi threads
// multi threads help to execute multiple tasks at same time JS is not multithreaded language but asynch prog is done with the help of setTimeout and setInterval

// ek thread=ek stack (kind of) (ek thread ek kaam karta hai)

// Synch prog mei ek kaam khatam hoga fir dusra hoga

// setTimeout() and setInterval() are 2 ways to execute asynch prog


// web api se jo kaam ham nhi kar skte vo api k through kisi aur ko de skte hai, api ek user aur browser k beech ki layer hai jo batata hai ki kya kar skte ho aur kya nahi