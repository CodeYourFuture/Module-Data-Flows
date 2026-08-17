function getImage() {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then((response) => response.json())
    .then((comicImages) => {
      console.log(comicImages);
      const comicImage = document.getElementById("comic-image");
      comicImage.src = comicImages.img;
    })
    .catch((error) => {
      console.log("Error fetching image:", error);
    });
}
getImage();
