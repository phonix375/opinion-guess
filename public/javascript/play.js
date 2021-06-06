function joinedGame(game) {

    myModal.show();
}

function submitAnswer() {
    let answer = document.querySelector('#myAnswer').value.trim()
    console.log("Your answer is " , answer);
    let game = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ].replaceAll('?','');
      let nick = localStorage.getItem('nickname')
    socket.emit('answer',{game:game,answer:answer,nickname:nick });
    document.querySelector('#myAnswer').disabled = true;
    document.querySelector('#answerSubmit').disabled = true;
    document.querySelector('.card-header').innerText = 'Waiting for other players to answer.';
}

function play(obj) {
    if(obj.action == 'startGame') {

        document.querySelector('.card-header').innerHTML = obj.question;
        document.querySelector('#answerSubmit').addEventListener('click',function(event) {
            event.preventDefault()
            submitAnswer();
        })
    }
    if(obj.action == 'nextQuestion') {
        document.querySelector('#myAnswer').disabled = false;
        document.querySelector('#myAnswer').value = '';
    document.querySelector('#answerSubmit').disabled = false;
    document.querySelector('.card-header').innerText = obj.question;
    }
    if(obj.action ==  'endGame') {

        document.querySelector('.card-header').innerText = 'The Game is over.';
        document.querySelector('.card-body').innerHTML = '';
        let main_div = document.createElement('div');
        main_div.classList = 'col-lg-10';
        let h2 = document.createElement('h2');
        h2.innerText = 'HighScores';


        let sec_div = document.createElement('div');
        sec_div.classList = 'col-sm-10';
        let table = document.createElement('table');
        table.classList = 'table table-dark table-striped';
        let thead = document.createElement('thead');
        let tr = document.createElement('tr');
        let th1 = document.createElement('th')
        let th2 = document.createElement('th')
        th2.classList = 'col';
        th2.innerText = 'Nickname';
        let th3 = document.createElement('th')
        th3.classList = 'col';
        th3.innerText = 'Highscore';
        let tbody = document.createElement('tbody');

        tr.appendChild(th2);
        tr.appendChild(th3);
        thead.appendChild(tr);

        for (const [key, value] of Object.entries(obj.score)) {
            let table_row = document.createElement('tr');
            let table_td1 = document.createElement('td');
            let table_td2 = document.createElement('td');
            table_td1.innerText = key;
            table_td2.innerText = value.score;
            table_row.appendChild(table_td1);
            table_row.appendChild(table_td2);
            tbody.appendChild(table_row);
          }

        main_div.appendChild(h2);
        let card_body = document.querySelector('.card-body');
        card_body.appendChild(main_div);


        table.appendChild(thead);
        table.appendChild(tbody);
        sec_div.appendChild(table);
        card_body.appendChild(sec_div);


    }
}

function saveNickName() {
    let nick = document.querySelector('#nick').value ;
    
    if(nick == ''){
        myModal.show();
        return;
    }
    var myModal = new bootstrap.Modal(document.getElementById("nickName"), {});
    window.localStorage.setItem('nickname', nick);


    console.log(nick);
    let game = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ].replaceAll('?','');
      console.log(game)
    socket.emit('joinGame', {game:game, nick:nick});
    return;
}


document.querySelector('#addNickName').addEventListener('click', function(event) {
    saveNickName()
    myModal.hide()
 
})

// // Modal for HighScores
// var myModal2 = new bootstrap.Modal(document.getElementById("HighScores"), {});
// var modal = document.getElementById("myModal");
// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   }

var myModal = new bootstrap.Modal(document.getElementById("nickName"), {});
