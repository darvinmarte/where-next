const deletePost = async (e)=>{

    e.preventDefault();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/travelpost/${id}`,{
        method : 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
    if(response.ok){
        document.location.replace('/');
    }else{
        alert('Failed');
    }

}

document.querySelector('#deleteButton').addEventListener('click',deletePost);

