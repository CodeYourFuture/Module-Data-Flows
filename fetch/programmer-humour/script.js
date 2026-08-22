const fallbackImg = "./assets/no_image.webp";
const endpointAPI = "https://xkcd.now.sh/?comic=latest";

const container = document.getElementById("comic-container");

const imgEl = document.createElement("img");
imgEl.src = fallbackImg;
imgEl.alt = "Loading comic...";

imgEl.onerror = () => {
  imgEl.src = fallbackImg;
  imgEl.alt = "Failed to load comic";
};

if (container) {
  container.appendChild(imgEl);
}

const fetchData = async () => {
  try {
    const response = await fetch(endpointAPI);
    if (!response.ok) {
      throw new Error(`Network response status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching data:", error);
    return null;
  }
};

const renderComic = async () => {
  if (!container) {
    console.error("Comic container not found in DOM");
    return;
  }

  const data = await fetchData();
  console.log(data);
  if (data && data.img) {
    imgEl.src = data.img;
    imgEl.alt = data.alt || data.title || "Programmer humour comic";
  } else {
    console.error("Image data not received");
    imgEl.src = fallbackImg;
    imgEl.alt = "No image available";
  }
};

renderComic();
