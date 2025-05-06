const fetchUrl="https://xkcd.now.sh/?comic=latest"
fetch(fetchUrl).then(response=>response.json())
.then(data=>{
    const image=document.getElementById("imageId")
    console.log(data)
    image.src=data.img
    
})
    
.catch(err=>console.log(err))

