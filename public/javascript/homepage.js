function joinGameHandler(event){
    alert('you clicked the join a game');
} 


function PlayPressHandeler(event){
    const players = document.querySelector('#players').value.trim();
    console.log(typeof players)
    console.log(players)
    console.log(isNaN(players))
    if(parseInt(players) === NaN){
        alert('Please enter just numbers');
        return;
    }
    if(parseInt(players) <= 0){
        alert('The number must be bigger then 0');
        return;
    }
    document.location.replace(`/game/${players}`);
}


document.querySelector('#joinGame').addEventListener('click', joinGameHandler);
document.querySelector('#play-btn').addEventListener('click', PlayPressHandeler);

