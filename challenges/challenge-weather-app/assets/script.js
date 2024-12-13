// script.js

const API_WEATHER = "https://api.openweathermap.org/data/2.5/weather";
const API_UNSPLASH = "https://api.unsplash.com/search/photos";
const WEATHER_KEY = "YOUR_OPENWEATHER_API_KEY"; // Replace with your OpenWeather API Key
const UNSPLASH_KEY = "YOUR_UNSPLASH_ACCESS_KEY"; // Replace with your Unsplash Access Key

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
  const response = await fetch(url);
  if (!response.ok) throw new Error("City not found");
  return response.json();
}

// Fetch Unsplash images
async function fetchImages(query) {
  const url = `${API_UNSPLASH}?query=${query}&client_id=${UNSPLASH_KEY}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Error fetching images");
  return response.json();
}

// Update UI with weather and photos
async function updateWeatherAndPhotos(city) {
  try {
    // Fetch weather
    const weatherData = await fetchWeather(city);
    const description = weatherData.weather[0].description;
    conditionsEl.textContent = `${description}, ${weatherData.main.temp}°C`;

    // Fetch images
    const imageData = await fetchImages(description);
    displayImages(imageData.results);

    // Update photographer credits
    updateCredits(imageData.results[0]);
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
}

// Display images
function displayImages(images) {
  if (!images.length) return;

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

  // Set active thumbnail
  setActiveThumbnail(0);
}

// Set the main image and update active thumbnail
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

// Handle form submission
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = searchInput.value.trim();
  if (city) {
    updateWeatherAndPhotos(city);
    searchInput.value = "";
  }
});

// Initial load
updateWeatherAndPhotos(currentCity);
