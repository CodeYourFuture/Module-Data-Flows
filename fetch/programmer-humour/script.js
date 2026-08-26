const endpointAPI = "https://xkcd.now.sh/?comic=latest";
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.error("Could not fetch data", error);
  }
}

async function loadComic() {
  try {
    const data = await fetchData(endpointAPI);
    if (!data) {
      throw new Error("No data received from the API.");
    }
    const imgEl = document.querySelector("img");
    imgEl.src = data.img;
    imgEl.title = data.title;
    imgEl.alt = data.alt;
  } catch (error) {
    console.error("Error loading comic:", error);
    document.querySelector("h1").textContent =
      "Image failed loading. Please try again later";
  }
}

loadComic();
