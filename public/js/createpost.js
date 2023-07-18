const createPost = async () => {
    const title = document.querySelector('#title').value.trim();
    const caption = document.querySelector('#caption').value.trim();
    const location = document.querySelector('#location').value.trim();
    const img = document.querySelector('#img').value.trim();

    const response = await fetch ('/api/travelpost/',{
        method:'POST',
        body: JSON.stringify({title,caption,location,img}),
        headers: {'Content-Type': 'application/json'},
    });

    if(response.ok){
        document.location.replace('/');
    }else{
        alert('no bueno');
    }
}

document.querySelector('.newpost').addEventListener('submit',createPost);