
let city = "London";
const myWeatherApiKey = "6e49ae8965cb6f613d911543030f6a21";
const myUnsplashApiKey = "9g7Ek1p5R0VH2oqrNqOmgA9ndGUzh_2YIfYqOhazMB8";

// Fetch weather data
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myWeatherApiKey}`)
    .then(response => response.json())
    .then(dataWeather => {
        // Extract weather condition
        const condition = dataWeather.weather[0].description;

        // Fetch Unsplash images based on weather condition
        const myUnsplashApi = `https://api.unsplash.com/search/photos?query=${condition}&client_id=${myUnsplashApiKey}`;
        return Promise.all([Promise.resolve(dataWeather), fetch(myUnsplashApi).then(response => response.json())]);
    })
    .then(([dataWeather, dataUnsplash]) => {
        // Process the results together
        console.log("Data from API 1:", dataWeather);
        console.log("Data from API 2:", dataUnsplash);

        // Update the DOM with weather and images
        mainImageFun(dataWeather, dataUnsplash);

        weatherImage(dataWeather, dataUnsplash);
    })
    .catch(error => {
        // Handle errors
        console.error("Error fetching one or both APIs:", error);
    });


//main image function
function mainImageFun(dataWeather, dataUnsplash){
    const defaultCity = document.querySelector("#conditions");
        defaultCity.innerHTML = `${dataWeather.name} - ${dataWeather.weather[0].description}`;

        const randomIndex = Math.floor(Math.random() * Math.min(dataUnsplash.results.length, 10));
        const randomMainImage = document.querySelector("#photo");
        randomMainImage.innerHTML = `<img src="${dataUnsplash.results[randomIndex].urls.regular}" alt="random image">`;
}

// Function to update images
function weatherImage(dataWeather, dataUnsplash) {

    const thumbsDiv = document.getElementById("thumbs");
    thumbsDiv.innerHTML = ""; // Clear previous thumbnails
    const resultsUnsplash = dataUnsplash.results; // Extract the 'results' array

    resultsUnsplash.forEach(image => {
        const thumb = document.createElement("img");
        thumb.src = image.urls.thumb;
        thumb.alt = image.alt_description || "Thumbnail";
        thumb.dataset.fullImageUrl = image.urls.full; // Full-size image URL (used for main image)
        thumb.classList.add("thumb");
        thumbsDiv.appendChild(thumb);

        // Add click event to load the full image
        thumb.addEventListener("click", (event) => {
            const fullImageUrl = event.target.dataset.fullImageUrl;
            const mainImage = document.querySelector("#photo");
            mainImage.innerHTML = `<img src="${fullImageUrl}" alt="main image">`;
        });
    });
}

// Event listener for city search
const searchForm = document.querySelector("#search");
const searchInput = document.querySelector("#search-tf");
searchForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent form submission and page reload
    const cityNew = searchInput.value.trim();
    if (cityNew) {
        try {
            const weatherApiNew = `http://api.openweathermap.org/data/2.5/weather?q=${cityNew}&appid=${myWeatherApiKey}`;
            const weatherResponse = await fetch(weatherApiNew);
            const dataWeather = await weatherResponse.json();

            const conditionNew = dataWeather.weather[0].description;
            const myUnsplashApiNew = `https://api.unsplash.com/search/photos?query=${conditionNew}&client_id=${myUnsplashApiKey}`;
            const unsplashResponse = await fetch(myUnsplashApiNew);
            const dataUnsplash = await unsplashResponse.json();

            mainImageFun(dataWeather, dataUnsplash);
            weatherImage(dataWeather, dataUnsplash);
        } catch (error) {
            console.error("Error fetching new city weather or Unsplash images:", error);
        }
    }
});
