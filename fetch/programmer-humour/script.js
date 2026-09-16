async function getComic() {
  try {
    const response = await fetch("https://xkcd.now.sh/?comic=latest");  
    if (!response.ok) {
      throw new Error("Failed to fetch comic");
    }
    const data = await response.json();
    console.log(data);
    const comic = document.querySelector("#comic");
    const image = document.createElement("img");
    image.src = data.img;
    image.alt = data.alt;
    comic.appendChild(image);
  } catch (error) {
    console.error("Error:", error);
  }
}
getComic();