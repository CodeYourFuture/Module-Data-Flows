function getLatestComic() {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then(function (response) {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      
      // Cache the element to avoid repeating the selector
      const comicImg = document.getElementById("comic-img");
      
      // Guard clause to ensure the element exists before using it
      if (comicImg) {
        comicImg.src = data.img;
        comicImg.alt = data.title;
      }
    })
    .catch(function (error) {
      // Cache and guard check for the error element
      const errorElement = document.getElementById("error");
      
      if (errorElement) {
        errorElement.textContent = "Failed to load comic: " + error.message;
      }
    });
}

getLatestComic();
