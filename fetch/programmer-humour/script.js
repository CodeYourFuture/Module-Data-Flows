async function fetchLatestComic() {
  const endpoint = "https://xkcd.now.sh/?comic=latest";
  const forImg = document.getElementById("forImg");
  const message = document.querySelector(".message");

  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    const img = document.createElement("img");
    img.src = data.img;
    img.alt = data.alt;

    forImg.appendChild(img);

    message.textContent = "";
  } catch (error) {
    console.error("Error fetching the comic:", error);

    message.textContent = ":( Please try again later.";
  }
}

fetchLatestComic();
