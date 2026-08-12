function getLatestComic() {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then(function (response) {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      document.getElementById("comic-img").src = data.img;
      document.getElementById("comic-img").alt = data.title;
    })
    .catch(function (error) {
      document.getElementById("error").textContent =
        "Failed to load comic: " + error.message;
    });
}

getLatestComic();
