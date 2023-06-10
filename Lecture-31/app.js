const express = require("express");
const path = require('path');
const PORT = 3000;
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => { 
    console.log(socket);
});

server.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
});