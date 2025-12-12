const API_URL = "https://xkcd.now.sh/?comic=latest";

async function getLatestComic() {
  const container = document.getElementById("comic-container");

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    if (!data.img) {
      throw new Error("API did not return an image");
    }

    container.innerHTML = "";

    const img = document.createElement("img");
    img.src = data.img;
    img.alt = data.alt || data.title || "XKCD comic";

    container.appendChild(img);
  } catch (error) {
    console.error("Fetch error:", error);
    container.innerHTML = `<p>Could not load the comic. Please try again later.</p>`;
  }
}

getLatestComic();
