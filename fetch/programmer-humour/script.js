async function fetchXKCDComic() {
  const url = "https://xkcd.now.sh/?comic=latest";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  return response.json();
}

async function displayComic() {
  const comicDisplay = document.querySelector("img");
  const errorDisplay = document.querySelector("p");

  try {
    const data = await fetchXKCDComic();
    console.log(data);
    comicDisplay.src = data.img;
    comicDisplay.alt = data.alt;
    comicDisplay.title = data.title;
  } catch (error) {
    errorDisplay.textContent = error.message;
  }
}

document.addEventListener("DOMContentLoaded", displayComic);
