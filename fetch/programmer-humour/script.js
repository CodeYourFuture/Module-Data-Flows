const title = document.getElementById("title");
const image = document.getElementById("image");
const alt = document.getElementById("alt");

async function getImg() {
  const url = "https://xkcd.now.sh/?comic=latest";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    title.textContent = result.safe_title;
    image.src = result.img;
    alt.textContent = result.alt;
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}
getImg();
