
var socket = io();

function createGame(uuid,players) {

    socket.emit('startGame', {uuid:uuid,players:players});

};


