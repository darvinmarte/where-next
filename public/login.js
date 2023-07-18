const login = async(e) =>{
    e.preventDefault();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    const response = await fetch ('/api/users/login',{
        method:'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
    });
    if(response.ok){
        document.location.replace('/');
    }else{
        alert('no good')
    }
}

document.querySelector('.login-form').addEventListener('submit',login)