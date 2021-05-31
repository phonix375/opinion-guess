function joinGameHandler(event){
    alert('you clicked the join a game');
} 

function newGameHandler(event){
    alert('you clicked the new game btn');
}


document.querySelector('#joinGame').addEventListener('click', joinGameHandler);
document.querySelector('#newGame').addEventListener('click', newGameHandler);