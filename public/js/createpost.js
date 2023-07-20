const myWidget = cloudinary.createUploadWidget(
    {
        cloudName: "dooaqiesv",
        uploadPreset: "images",
        folder: 'widgetUpload',
        cropping: true, //add a cropping step

    },
    (error, result) => {
        if (!error && result && result.event === "success") {
           console.log(result.info.url)

            const createPost = async (e) => {
                e.preventDefault();

                const title = document.querySelector('#title').value.trim();
                const caption = document.querySelector('#caption').value.trim();
                const location = document.querySelector('#location').value.trim();
                const img = result.info.url;



                const response = await fetch('/api/travelpost/', {
                    method: 'POST',
                    body: JSON.stringify({ title, caption, location, img }),
                    headers: { 'Content-Type': 'application/json' },
                });

                if (response.ok) {
                    document.location.replace('/');
                } else {
                    alert('no bueno');
                }
            }



            document.querySelector('.newpost').addEventListener('submit', createPost);

     }
    }
);
document.getElementById("upload_widget").addEventListener(
    "click",
    function (e) {
        myWidget.open();
    
    },
    false
);

const createPost = async (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const caption = document.querySelector('#caption').value.trim();
    const location = document.querySelector('#location').value.trim();
    
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

