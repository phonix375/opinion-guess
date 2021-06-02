function joinedGame(game){

    socket.emit('joinGame', game);
}

function play(obj){
    alert('im here');
    if(obj.action == 'startGame'){
        alert('starting the game');
        document.querySelector('.card-header').innerHTML = obj.question;
        let form = document.createElement('form');
        let input = document.createElement('input');
        form.appendChild(input)
        document.querySelector('.card-body').innerHTML = '';
        document.querySelector('.card-body').appendChild(form);
    }
}