const myWeatherApi = "http://api.openweathermap.org/data/2.5/weather?q=london&appid=6e49ae8965cb6f613d911543030f6a21";
const myUnsplashApi = "https://api.unsplash.com/search/photos?query=snow&client_id=9g7Ek1p5R0VH2oqrNqOmgA9ndGUzh_2YIfYqOhazMB8";

// fetch(`${myWeatherApi}`)
//     .then(Response => {
//         return Response.json();
//     })
//     .then(weatherData => {
//         console.log(weatherData);
//         let defaultCity = document.querySelector("#conditions");
//         defaultCity.innerHTML = `${weatherData.name} ${weatherData.weather[0].description}`;

//     })
//     .catch(error => console.log(error))

Promise.all([
    fetch(myWeatherApi).then(response => response.json()), // Fetch and parse JSON from myWeatherApi
    fetch(myUnsplashApi).then(response => response.json())  // Fetch and parse JSON from myUnsplashApi
])
.then(([dataWeather, dataUnsplash]) => {
    // Process the results together
    console.log('Data from API 1:', dataWeather);
    console.log('Data from API 2:', dataUnsplash);
    let defaultCity = document.querySelector("#conditions");
    defaultCity.innerHTML = `${dataWeather.name} ${dataWeather.weather[0].description}`;

    const thumbsDiv = document.getElementById("thumbs");
    thumbsDiv.innerHTML = ""; // Clear previous thumbnails
    const resultsUnsplash = dataUnsplash.results; // Extract the 'results' array
    resultsUnsplash.forEach(image => {
        let thumb = document.createElement("img");
        thumb.src = image.urls.thumb;
        thumb.alt = image.alt_description;
        thumb.dataset.fullImageUrl = image.urls.full; // Full-size image URL (used for main image)
        thumb.classList.add("thumb");
        thumbsDiv.appendChild(thumb);

        // Add click event to load the full image
        thumb.addEventListener("click", (event) => {
            const fullImageUrl = event.target.dataset.fullImageUrl;
            const mainImage = document.querySelector("#photo");
            mainImage.innerHTML = `<img src="${fullImageUrl}" alt="main image">`
        });

    });

     



})
.catch(error => {
    // Handle errors
    console.error('Error fetching one or both APIs:', error);
});

