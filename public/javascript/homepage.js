function joinGameHandler(event){
    alert('you clicked the join a game');
} 

function newGameHandler(event){
    alert('you clicked the new game btn');
}

async function submitLoginForm(event){
    event.preventDefault();

    const email = document.querySelector('#email').value.trim();
    
    const password = document.querySelector('#password').value.trim();
    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))){
        alert('please enter a valid Email address');
        return;
    }
    if(!password){
        alert('Please enter a password')
    }
    console.log(email,password);
}


document.querySelector('#joinGame').addEventListener('click', joinGameHandler);
document.querySelector('#newGame').addEventListener('click', newGameHandler);
document.querySelector('#loginSubmit').addEventListener('click', submitLoginForm);
