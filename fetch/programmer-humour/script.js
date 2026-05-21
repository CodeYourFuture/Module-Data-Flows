function fetchComic() {
  const container = document.getElementById("comic-container");

  fetch("https://xkcd.now.sh/?comic=latest")
    .then(response => {
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      return response.json();
    })
    .then(data => {
      console.log(data);

      // CLEAR OLD CONTENT
      container.innerHTML = "";

      // SAFE ELEMENTS (NO innerHTML)
      const title = document.createElement("h2");
      title.textContent = data.title;

      const img = document.createElement("img");
      img.src = data.img;
      img.alt = data.alt;

      const desc = document.createElement("p");
      desc.textContent = data.alt;

      container.appendChild(title);
      container.appendChild(img);
      container.appendChild(desc);
    })
    .catch(error => {
      container.innerHTML = "";

      const errorMsg = document.createElement("p");
      errorMsg.textContent = "Error loading comic 😢";

      container.appendChild(errorMsg);

      console.error(error);
    });
}

window.addEventListener("load", fetchComic);