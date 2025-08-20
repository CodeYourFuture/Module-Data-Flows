const addDogBtn = document.getElementById("add-dog");
const clearGalleryBtn = document.getElementById("clear-gallery");
const gallery = document.getElementById("dog-gallery");

async function fetchDogImage() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    // Create elements
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = data.message;
    img.alt = "Cute Dog";

    // Append to list
    li.appendChild(img);
    gallery.appendChild(li);

  } catch (error) {
    console.error("Error fetching dog image:", error);
    alert("🐶 Oops! Failed to fetch a dog image. Try again.");
  }
}

// Event listeners
addDogBtn.addEventListener("click", fetchDogImage);
clearGalleryBtn.addEventListener("click", () => {
  gallery.innerHTML = "";
});
