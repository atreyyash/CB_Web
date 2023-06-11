const socket = io();
const btn = document.querySelector('#btn');
const msg = document.querySelector('#msg');
const msgList = document.querySelector('.msgList');
const userDetails = document.querySelector(".userDetails");
const chatbox = document.querySelector(".chatbox");
const username = document.querySelector("#username");
const btn1 = document.querySelector("#btn1");

chatbox.classList.add('hide');

btn.addEventListener('click', (ev) => {
    socket.emit('sendmessage', {
        msg: msg.value,
        id: socket.id
    });
});

btn1.addEventListener("click", (ev) => {
    socket.emit('signup', {
        username: username.value
    })
});

socket.on('signupSuccess', (msg) => {
    chatbox.classList.remove('hide');
    userDetails.classList.add('hide');
});

socket.on('loggedIn', (msg) => {
    console.log(msg);
});

socket.on('msgreceived', (msg) => {
    console.log(msg);
});

socket.on('reply', (msg) => {
    console.log(msg);

    let div = document.createElement('div');
    div.innerText = `${msg.senderId} : ${msg.msg.msg}`;
    msgList.appendChild(div);
});

// socket.on('Hello', (msg) => {
//     console.log(msg);
//     socket.emit('Hello', "Haa batao");
// });