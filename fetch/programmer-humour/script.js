const btn = document.getElementById("getComicBtn");
const container = document.getElementById("comicContainer");

async function getLatestComic() {
  try {
    const response = await fetch("https://xkcd.now.sh/?comic=latest");
    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    console.log(data); // log received JSON

    // Clear previous comic
    container.innerHTML = "";

    // Create image element
    const img = document.createElement("img");
    img.src = data.img;
    img.alt = data.title;

    container.appendChild(img);

  } catch (error) {
    console.error("Failed to fetch comic:", error);
    container.textContent = "Failed to load comic. Please try again later.";
  }
}

// Event listener
btn.addEventListener("click", getLatestComic);
