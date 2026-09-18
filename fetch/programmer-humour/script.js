// get the json using Fetch
const endPoint = "https://xkcd.now.sh/?comic=latest";
async function fetchComic() {
  const response = await fetch(endPoint);
  // incorporating handling error
  if (!response.ok) {
    throw new Error(`request failed: ${response.status}`);
  }
  return await response.json();
}

async function setup() {
  try {
    const data = await fetchComic();
    console.log(data);

    const comicImage = document.getElementById("comic");
    comicImage.src = data.img;
    comicImage.title = data.title;
    comicImage.alt = data.alt;
  } catch (error) {
    console.error(error);
    document.getElementById("error-message").textContent =
      "Sorry, something went wrong loading the comic. Please try again later.";
  }
}

window.onload = setup;
