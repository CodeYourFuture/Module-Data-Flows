// weather.js

const weatherApiKey = 'a905f933c527562a1ab40ad9c7c87c8e'; // Replace with your OpenWeather API key
const unsplashApiKey = 'YOUR_UNSPLASH_API_KEY'; // Replace with your Unsplash API key

const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('searchButton');
const photosDiv = document.getElementById('photos');
const thumbsDiv = document.getElementById('thumbs');

async function getWeatherData(city) {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${weatherApiKey}&units=metric`;
  try {
    const response = await fetch(weatherUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
}

async function getUnsplashImages(query) {
  const unsplashUrl = `https://api.unsplash.com/search/photos?query=${query}&client_id=${unsplashApiKey}`;
  try {
    const response = await fetch(unsplashUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching Unsplash images:', error);
    return null;
  }
}

function displayMainImage(imageUrl, photographerName, photographerLink) {
    photosDiv.innerHTML = '';
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'Main Image';
    photosDiv.appendChild(img);

    const creditDiv = document.createElement('div');
    creditDiv.classList.add('credit');
    creditDiv.innerHTML = `Photo by <a href="${photographerLink}" target="_blank">${photographerName}</a> on Unsplash`;
    photosDiv.appendChild(creditDiv);
}

function displayThumbnails(images) {
  thumbsDiv.innerHTML = '';
  images.forEach(image => {
    const thumb = document.createElement('img');
    thumb.src = image.urls.thumb;
    thumb.alt = image.alt_description;
    thumb.classList.add('thumbnail');

    thumb.addEventListener('click', () => {
      displayMainImage(image.urls.regular, image.user.name, image.user.links.html);
      setActiveThumbnail(thumb);
    });

    thumbsDiv.appendChild(thumb);
  });
  if(images.length > 0){
      displayMainImage(images[0].urls.regular, images[0].user.name, images[0].user.links.html);
      setActiveThumbnail(thumbsDiv.firstChild);
  }

}

function setActiveThumbnail(thumbnail) {
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    thumbnail.classList.add('active');
}

async function updateWeatherAndImages(city) {
  const weatherData = await getWeatherData(city);
  if (weatherData) {
    const weatherDescription = weatherData.weather[0].description;
    const images = await getUnsplashImages(weatherDescription);
    if (images) {
      displayThumbnails(images);
    }
  }
}

searchButton.addEventListener('click', () => {
  const city = cityInput.value;
  if (city) {
    updateWeatherAndImages(city);
  }
});

cityInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const city = cityInput.value;
        if (city) {
            updateWeatherAndImages(city);
        }
    }
});

// Initial load (default city: London)
updateWeatherAndImages('London');