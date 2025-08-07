let comicLoading = document.getElementById("comic-container")
const img = document.createElement("img")
img.id = "comic-img"
img.addEventListener("click",() =>{
    console.log("Comic clicked!")
},)
comicLoading.innerHTML ="";
comicLoading.appendChild(img)
function loadComic(){
fetch(`https://xkcd.now.sh/?comic=latest`)
.then((response)=> {
    if (!response.ok){
        throw new Error ("Network is not responding")
    }
    return response.json()
})
.then((data) => {
    console.log(data)
    img.src = data.img; 
    img.alt = data.alt; 
    img.title = data.title; 
  })
  .catch((error) => {
    console.error("Failed to fetch comic:", error);
    comicLoading.textContent = "Oops! Failed to load comic.";
  });
}
loadComic()
