const likeButton = document.querySelector('#like-button');
const iD = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
];

const addLike = async (e) =>{
    e.preventDefault();
   
    
    const response = await fetch(`/api/comment-like/post/${iD}/like`,{
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok){
        document.location.reload();
    }else{
        alert('problem');
    }
}

likeButton.addEventListener('click',addLike);