const loadComic = document.getElementById("comic-loading");
const imgComic = document.getElementById("img-id");

loadComic.addEventListener("click", getComicData);

async function getComicData() {
  try {
    const response = await fetch("https://xkcd.now.sh/?comic=latest");

    if (!response.ok) {
      throw new Error(`Comic not available (status: ${response.status})`);
    }
    const data = await response.json();
    console.log(data);

    imgComic.src = data.img;
    imgComic.alt = data.alt;
  } catch (error) {
    console.error("Error fetching comic:", error);
    alert("Could not load the comic. Please try again later.");
  }
}
