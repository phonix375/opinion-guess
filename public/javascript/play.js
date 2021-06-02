function joinedGame(game){

    socket.emit('joinGame', game);
}

function play(obj){
    if(obj.action == 'startGame'){
        alert('starting the game');
    }
}