var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use("/public", express.static(__dirname + "/public"));

io.on('connection', function(socket){
  socket.on('checkVictory', function(symbol){
    socket.broadcast.emit(symbol);
  });
});

http.listen(3000, function(){
  console.log("listening on *:3000");
});
