// API URLs and Keys
const API_WEATHER = "https://api.openweathermap.org/data/2.5/weather";
const API_UNSPLASH = "https://api.unsplash.com/search/photos";
const WEATHER_KEY = "2af3ef06b75eef48a72ed617a00dad79"; // Replace with your OpenWeather API Key
const UNSPLASH_KEY = "LxKeC1occOPs3F2utkGVSjjUSb0Irq6mzvzWuG7vNS0"; // Replace with your Unsplash Access Key

// DOM Elements
const photoEl = document.getElementById("photo");
const thumbsEl = document.getElementById("thumbs");
const conditionsEl = document.getElementById("conditions");
const temperatureEl = document.getElementById("temperature");
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
    console.log(`Fetching weather data for: ${city}`);
    const response = await fetch(url);
    if (!response.ok) throw new Error(`City "${city}" not found`);
    const data = await response.json();
    console.log("Weather Data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}

// Fetch Unsplash images
async function fetchImages(query) {
  const url = `${API_UNSPLASH}?query=${query}&client_id=${UNSPLASH_KEY}`;
  try {
    console.log(`Fetching images for: ${query}`);
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error fetching images from Unsplash");
    const data = await response.json();
    console.log("Unsplash Image Data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
}

// Update the UI with weather and photos
async function updateWeatherAndPhotos(city) {
  try {
    // Fetch weather data
    const weatherData = await fetchWeather(city);
    const description = weatherData.weather[0].description;
    const temperature = weatherData.main.temp;

    // Update weather conditions and temperature
    conditionsEl.textContent = `${description}`;
    temperatureEl.textContent = `${temperature}°C`;  // Updated line for temperature

    // Fetch images based on weather description
    const imageData = await fetchImages(description);

    if (imageData.results.length > 0) {
      displayImages(imageData.results);
      updateCredits(imageData.results[0]);
    } else {
      console.warn("No images found for the weather description.");
      photoEl.style.backgroundImage = "";
      thumbsEl.innerHTML = "";
      creditUserEl.textContent = "No images available";
      creditUserEl.href = "#";
    }
  } catch (error) {
    console.error("Error updating weather and photos:", error);
    alert(error.message);
    conditionsEl.textContent = "Error: Unable to fetch weather data.";
  }
}

// Display images in the main photo section and thumbnails
function displayImages(images) {
  if (!images || images.length === 0) return;

  // Set the main photo
  photoEl.style.backgroundImage = `url(${images[0].urls.regular})`;

  // Clear thumbnails and repopulate
  thumbsEl.innerHTML = "";
  images.forEach((image, index) => {
    const thumb = document.createElement("div");
    thumb.classList.add("thumb");
    thumb.style.backgroundImage = `url(${image.urls.thumb})`;
    thumb.dataset.index = index;

    // Add click event to update main photo and credits
    thumb.addEventListener("click", () => setMainImage(images, index));

    thumbsEl.appendChild(thumb);
  });

  // Highlight the first thumbnail as active
  setActiveThumbnail(0);
}

// Set the main photo and update active thumbnail
function setMainImage(images, index) {
  const image = images[index];
  photoEl.style.backgroundImage = `url(${image.urls.regular})`;
  updateCredits(image);
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

// Handle the search form submission
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = searchInput.value.trim();
  if (city) {
    updateWeatherAndPhotos(city);
    searchInput.value = ""; // Clear the input field
  }
});

// Initial load
updateWeatherAndPhotos(currentCity);
