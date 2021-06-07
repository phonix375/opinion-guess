async function submitLoginForm(event) {
    event.preventDefault();
    console.log('click');

    const email = document.querySelector('#email').value.trim();
    
    const password = document.querySelector('#password').value.trim();
    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) {
        alert('please enter a valid Email address');
        return;
    }
    if(!password){
        alert('Please enter a password')
    }
    console.log(email,password);

    const response = await fetch('/api/user/login', {
        method: 'post',
        body: JSON.stringify({
            email,
            password,
        }),
        headers:{ 'Content-Type': 'application/json' }
    });

    if(response.ok) {
        document.location.reload()
    }else{
        alert('Something went wrong, please try again.');
    }
}
async function submitregisterForm(event) {
    event.preventDefault();

    const email = document.querySelector('#registerEmail').value.trim();
    const password = document.querySelector('#registerPassword').value.trim();
    const username = document.querySelector('#registerUsername').value.trim();
    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))){
        alert('Please enter a valid Email address');
        return;
    }
    if(!password) {
        alert('Please enter a password');
        return;
    }
    if(!username) {
        alert('Please enter a username');
        return;
    }

    const response = await fetch('/api/user', {
        method: 'post',
        body: JSON.stringify({
            email,
            password,
            username
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if(response.ok) {
        document.location.reload()
    }else{
        alert(response.statusText);
    }
    console.log(email,password, username);
}

    document.querySelector('#registerSubmit').addEventListener('click', submitregisterForm);
    document.querySelector('#loginSubmit').addEventListener('click', submitLoginForm);
