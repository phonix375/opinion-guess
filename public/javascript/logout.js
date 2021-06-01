async function logout() {
    console.log('IM here');
    const response = await fetch('/api/user/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      window.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#logout').addEventListener('click', logout);
  