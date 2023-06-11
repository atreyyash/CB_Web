const express = require("express");
const path = require('path');
const PORT = 3000;
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
app.use(express.static(path.join(__dirname, 'public')));

let userMap = {};

io.on('connection', (socket) => { 
    socket.emit('loggedIn', 'loggedIn');
    socket.on('sendmessage', (msg) => {
        console.log(msg);
        io.emit('reply', {
            msg,
            senderId: userMap[socket.id]
        });
    });

    socket.on('signup', (msg) => {
        userMap[socket.id] = msg.username;
        console.log(userMap);
        socket.emit('signupSuccess', "OK");
    });
});

server.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
});