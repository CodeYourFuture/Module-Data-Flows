// script.js

const API_WEATHER = "https://api.openweathermap.org/data/2.5/weather";
const API_UNSPLASH = "https://api.unsplash.com/search/photos";
const WEATHER_KEY = "2af3ef06b75eef48a72ed617a00dad79"; // Replace with your valid OpenWeather API Key
const UNSPLASH_KEY = "LxKeC1occOPs3F2utkGVSjjUSb0Irq6mzvzWuG7vNS0"; // Replace with your valid Unsplash Access Key

// DOM Elements
const photoEl = document.getElementById("photo");
const thumbsEl = document.getElementById("thumbs");
const conditionsEl = document.getElementById("conditions");
const creditUserEl = document.getElementById("credit-user");
const creditPlatformEl = document.getElementById("credit-platform");
const searchForm = document.getElementById("search");
const searchInput = document.getElementById("search-tf");

// Default city
let currentCity = "London";

// Fetch weather data
async function fetchWeather(city) {
  const url = `${API_WEATHER}?q=${city}&appid=${WEATHER_KEY}&units=metric`;
  try {
    const response = await fetch(url);
    console.log("Fetching weather data from:", url);
    if (!response.ok) {
      throw new Error(`City "${city}" not found`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}

// Fetch Unsplash images
async function fetchImages(query) {
  const url = `${API_UNSPLASH}?query=${query}&client_id=${UNSPLASH_KEY}`;
  try {
    const response = await fetch(url);
    console.log("Fetching Unsplash images from:", url);
    if (!response.ok) {
      throw new Error("Error fetching images from Unsplash");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching Unsplash images:", error);
    throw error;
  }
}

// Update UI with weather and photos
async function updateWeatherAndPhotos(city) {
  try {
    // Display loading state
    conditionsEl.textContent = "Loading weather data...";
    thumbsEl.innerHTML = "";
    photoEl.style.backgroundImage = "";

    // Fetch weather
    const weatherData = await fetchWeather(city);
    const description = weatherData.weather[0].description;
    const temp = weatherData.main.temp;
    conditionsEl.textContent = `${description}, ${temp}°C`;

    // Fetch images based on weather description
    const imageData = await fetchImages(description);
    if (imageData.results.length === 0) {
      throw new Error("No images found for this weather condition");
    }
    displayImages(imageData.results);

    // Update photographer credits
    updateCredits(imageData.results[0]);
  } catch (error) {
    console.error("Error updating weather and photos:", error);
    conditionsEl.textContent = "Error: " + error.message;
    alert(error.message);
  }
}

// Display images in main photo area and thumbnails
function displayImages(images) {
  if (!images.length) {
    conditionsEl.textContent = "No images available for this weather.";
    return;
  }

  // Set main image
  photoEl.style.backgroundImage = `url(${images[0].urls.regular})`;

  // Populate thumbnails
  thumbsEl.innerHTML = "";
  images.forEach((image, index) => {
    const thumb = document.createElement("div");
    thumb.classList.add("thumb");
    thumb.style.backgroundImage = `url(${image.urls.thumb})`;
    thumb.dataset.index = index;

    thumb.addEventListener("click", () => setMainImage(images, index));
    thumbsEl.appendChild(thumb);
  });

  // Highlight the first thumbnail as active
  setActiveThumbnail(0);
}

// Set the main image and highlight the active thumbnail
function setMainImage(images, index) {
  photoEl.style.backgroundImage = `url(${images[index].urls.regular})`;
  updateCredits(images[index]);
  setActiveThumbnail(index);
}

// Update photographer credits
function updateCredits(image) {
  creditUserEl.textContent = image.user.name;
  creditUserEl.href = image.user.links.html;
  creditPlatformEl.href = "https://unsplash.com";
}

// Highlight the active thumbnail
function setActiveThumbnail(activeIndex) {
  const thumbs = document.querySelectorAll(".thumb");
  thumbs.forEach((thumb, index) => {
    thumb.classList.toggle("active", index === activeIndex);
  });
}

// Handle form submission for searching a city
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = searchInput.value.trim();
  if (city) {
    updateWeatherAndPhotos(city);
    searchInput.value = "";
  }
});

// Initial load with default city
updateWeatherAndPhotos(currentCity);
