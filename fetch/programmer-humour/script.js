async function getLatestComic() {
  const url = "https://xkcd.now.sh/?comic=latest";
  const container = document.getElementById("comic-container");

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    container.innerHTML = "";

    const img = document.createElement("img");
    img.src = data.img;
    img.alt = data.title;

    container.appendChild(img);
  } catch (error) {
    console.error("Fetch error:", error);
    container.innerHTML = `<p>Something went wrong loading the comic.</p>`;
  }
}

getLatestComic();
