const createComment = async (e) =>{
  const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
  ];
    e.preventDefault();
    const comment = document.querySelector('#comment').value.trim();
    
    const response = await fetch(`/api/comment-like/post/${id}`,{
        method: 'POST',
        body: JSON.stringify({comment}),
        headers: { 'Content-Type': 'application/json' },
  });

  if(response.ok){
    document.location.replace(`/post/${id}`);
  }else{
    alert('not good');
  }
}

document.querySelector('.create-comment').addEventListener('submit',createComment);