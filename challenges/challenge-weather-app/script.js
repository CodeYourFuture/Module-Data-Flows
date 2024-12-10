const state = {
  weatherData: {},
  photos: {},
  isFetching: false,
  weatherAPIKey: config.weather_API_Key,
  unsplashAccessKey: config.unsplash_access_key,
};

async function getWeatherData() {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=london&appid=${state.weatherAPIKey}`;
  const response = await fetch(url);
  if (!response.ok) {
    console.error(`Response status: ${response.status}`);
  }
  return response.json();
}

async function getPhotos() {
  const url = `https://api.unsplash.com/search/photos?query=${state.weatherData.weather[0].description}&client_id=${state.unsplashAccessKey}`;
  const response = await fetch(url);

  if (!response.ok) {
    console.error(`Response status: ${response.status}`);
  }
  return await response.json();
}

async function fetchData() {
  state.isFetching = true;
  try {
    const weatherData = await getWeatherData();
    state.weatherData = weatherData;

    const photos = await getPhotos();
    state.photos = photos;


    state.photos.results.forEach(createThumb)
  } catch (error) {
    console.error(error.message);
  } finally {
    state.isFetching = false;
  }
}

fetchData();


const thumbs = document.querySelector("#thumbs");
function createThumb(thumbImg) {
  const thumbSection = document.createElement("section");
  const img = document.createElement("img");
  img.setAttribute("src", thumbImg.urls.thumb);
  img.setAttribute("alt", thumbImg.alt_description);
  thumbSection.append(img);
  thumbSection.style.backgroundColor = "red";

  thumbs.append(thumbSection);
}
