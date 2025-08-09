let comicLoading = document.getElementById("comic-container")
const img = document.createElement("img")
img.id = "comic-img"
img.addEventListener("click",() =>{
    console.log("Comic clicked!")
},)
comicLoading.innerHTML ="";
comicLoading.appendChild(img)
//using async await logic instead of fetch and then.
async function loadComic() {
  try {
    const response = await fetch(`https://xkcd.now.sh/?comic=latest`);
    if (!response.ok) {
      throw new Error("Network is not responding");
    }

    const data = await response.json();
    console.log(data);

    img.src = data.img;
    img.alt = data.alt;
    img.title = data.title;

  } catch (error) {
    console.error("Failed to fetch comic:", error);
    comicLoading.textContent = "Oops! Failed to load comic.";
  }
}

loadComic();