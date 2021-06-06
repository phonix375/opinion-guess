function joingame(event){
    let gameNumber = document.querySelector('#gameNumber').value;
    window.location.href = '/game/play/' + gameNumber;
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

const socket = io();
document.querySelector('#play-btn').addEventListener('click', PlayPressHandeler);
document.querySelector('#join-btn').addEventListener('click', joingame);

