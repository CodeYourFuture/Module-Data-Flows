// ====================
// Mini-weather App JS
// ====================

// Your working API keys
const WEATHER_API_KEY = "13940029dbb0ac27fa8e76f770798f71"; 
const UNSPLASH_ACCESS_KEY = "1EkJLQ64exkT3BxWkvtunY6nGsyoUpmmVOIycUfobC4";

// DOM elements
const photoEl = document.getElementById("photo");
const thumbsEl = document.getElementById("thumbs");
const conditionsEl = document.getElementById("conditions");
const creditUserEl = document.getElementById("credit-user");
const searchForm = document.getElementById("search");
const searchInput = document.getElementById("search-tf");

// Fetch weather data from OpenWeather
async function getWeather(city = "London") {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Invalid API key or city");
    const data = await res.json();
    return data;
}

// Fetch images from Unsplash
async function getImages(query) {
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}&per_page=5`;
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
}

// Display main photo and thumbnails
function displayImages(images) {
    if (!images.length) return;

    const mainImage = images[0];
    photoEl.style.backgroundImage = `url(${mainImage.urls.regular})`;
    creditUserEl.textContent = mainImage.user.name;
    creditUserEl.href = mainImage.user.links.html;

    thumbsEl.innerHTML = "";

    images.forEach((img, index) => {
        const thumb = document.createElement("div");
        thumb.classList.add("thumb");
        if (index === 0) thumb.classList.add("active");
        thumb.style.backgroundImage = `url(${img.urls.thumb})`;
        thumb.dataset.full = img.urls.regular;
        thumb.dataset.userName = img.user.name;
        thumb.dataset.userLink = img.user.links.html;

        thumb.addEventListener("click", () => {
            photoEl.style.backgroundImage = `url(${img.urls.regular})`;
            creditUserEl.textContent = img.user.name;
            creditUserEl.href = img.user.links.html;

            document.querySelectorAll(".thumb").forEach(t => t.classList.remove("active"));
            thumb.classList.add("active");
        });

        thumbsEl.appendChild(thumb);
    });
}

// Display weather info
function displayWeather(weatherData) {
    const description = weatherData.weather[0].description;
    const temp = Math.round(weatherData.main.temp);
    const cityName = weatherData.name;
    conditionsEl.textContent = `${description}, ${temp}°C in ${cityName}`;
}

// Update city
async function updateCity(city) {
    try {
        const weather = await getWeather(city);
        displayWeather(weather);
        const images = await getImages(weather.weather[0].description);
        displayImages(images);
    } catch (err) {
        console.error(err);
        conditionsEl.textContent = "Error fetching weather or images!";
    }
}

// Load default city
updateCity("London");

// Handle search form
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = searchInput.value.trim();
    if (city) updateCity(city);
    searchInput.value = "";
});
