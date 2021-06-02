function joinedGame(game){
  

    myModal.show();
    
    socket.emit('joinGame', game);
}

function submitAnswer(){
    let answer = document.querySelector('.myAnswer').value.trim()
    console.log("your answer is " , answer);
}

function play(obj){
    if(obj.action == 'startGame'){
        alert('starting the game');
        document.querySelector('.card-header').innerHTML = obj.question;
        let form = document.createElement('form');
        let input = document.createElement('input');
        input.classList.add("myAnswer")
        let btn = document.createElement('button');
        btn.innerText = "Submit";
        btn.classList.add("answerSubmit")
        form.appendChild(input)
        form.appendChild(btn)
        document.querySelector('.card-body').innerHTML = '';
        document.querySelector('.card-body').appendChild(form);
        document.querySelector('.answerSubmit').addEventListener('click',function(event){
            event.preventDefault()
            submitAnswer();
        })
    }
}

function saveNickName(){
    let nick = document.querySelector('#nick').value ;
    
    if(nick == ''){
        myModal.show();
        return;
    }
    var myModal = new bootstrap.Modal(document.getElementById("nickName"), {});
    window.localStorage.setItem('nickname', nick);

    console.log(nick);
    return;
}


document.querySelector('#addNickName').addEventListener('click', function(event){
    saveNickName()
    myModal.hide()
 
})

var myModal = new bootstrap.Modal(document.getElementById("nickName"), {});
