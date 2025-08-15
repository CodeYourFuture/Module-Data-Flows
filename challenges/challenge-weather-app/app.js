// OpenWeather API key and endpoint
const openWeatherAPIKey = config.openWeatherAPIKey;
const openWeatherEndpoint = "http://api.openweathermap.org/data/2.5/weather";

// Unsplash API key and endpoint
const unsplashAccessKey = config.unsplashAccessKey;
const unsplashEndpoint = "https://api.unsplash.com/search/photos";

// Default city
const defaultCity = "London";

// Function to get weather data for a city
async function getWeatherData(city) {
  const url = `${openWeatherEndpoint}?q=${city}&appid=${openWeatherAPIKey}&units=metric`; // Celsius units
  const response = await fetch(url);
  const data = await response.json();

  // Extracting weather description (this will be used to search for images)
  const description = data.weather[0].description;

  // Displaying the weather in the UI
  document.getElementById(
    "conditions"
  ).textContent = `Weather in ${city}: ${description}`;

  // Return the weather description for the Unsplash search
  return description;
}

// Function to get matching images from Unsplash
async function getUnsplashImages(description) {
  const url = `${unsplashEndpoint}?query=${description}&client_id=${unsplashAccessKey}`;
  const response = await fetch(url);
  const data = await response.json();

  // Displaying the images as thumbnails
  const thumbsContainer = document.getElementById("thumbs");
  thumbsContainer.innerHTML = ""; // Clear previous thumbnails

  // Loop through the images and create clickable thumbnails
  data.results.forEach((image) => {
    const thumb = document.createElement("img");
    thumb.src = image.urls.thumb; // Small thumbnail
    thumb.alt = image.alt_description;
    thumb.dataset.fullImageUrl = image.urls.full; // Full-size image URL (used for main image)
    thumb.classList.add("thumb");
    thumbsContainer.appendChild(thumb);

    // Add click event to load the full image
    thumb.addEventListener("click", (event) => {
      const fullImageUrl = event.target.dataset.fullImageUrl;
      loadMainImage(fullImageUrl);
    });
  });
}

// Function to load the main image
function loadMainImage(imageUrl) {
  const mainImageElement = document.getElementById("photo");
  mainImageElement.innerHTML = `<img src="${imageUrl}" alt="Weather Image">`;
}

// Search form and input element
const searchForm = document.getElementById("search");
const searchInput = document.getElementById("search-tf");

// Event listener for the search form
searchForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent form submission
  const city = searchInput.value.trim();

  if (city) {
    const description = await getWeatherData(city);
    await getUnsplashImages(description);
  }
});

// Fetch default city data on page load
window.onload = async () => {
  const description = await getWeatherData(defaultCity);
  await getUnsplashImages(description);
};
