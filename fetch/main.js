
 // Get references to the elements
const joke = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

// Function to fetch data from the XKCD API
function fetchComic() {
  fetch("https://xkcd.now.sh/?comic=latest") // API endpoint
    .then((response) => {
      // Check if the response is OK
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Convert response to JSON
    })
    .then((data) => {
      // Clear the previous comic (if any)
      joke.innerHTML = "";

      // Create an <img> element
      const img = document.createElement("img");
      img.src = data.img; // Set the image source to the img property
      img.alt = data.alt; // Set alt text for accessibility
      img.style.maxWidth = "100%"; // Make the image responsive

      // Append the <img> to the joke div
      joke.appendChild(img);
    })
    .catch((error) => {
      // Handle errors (e.g., network issues)
      joke.innerHTML = "Oops! Something went wrong.";
      console.error("Fetch error:", error);
    });
}

// Add an event listener to the button
jokeBtn.addEventListener("click", fetchComic);

