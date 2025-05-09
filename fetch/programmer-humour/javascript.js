// Function to fetch the latest comic
function fetchLatestComic() {
  // Set the loading message
  document.getElementById('loading').style.display = 'block';
  document.getElementById('comic-container').innerHTML = ''; // Clear previous comic if any
  document.getElementById('error-message').innerHTML = ''; // Clear previous error message

  fetch('https://xkcd.now.sh/?comic=latest')
    .then(response => {
      // Check if the response is successful (status 200)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Log the received data to the console
      console.log(data);

      // Get the image URL from the response data
      const imageUrl = data.img;

      // Render the image in the DOM
      const comicImage = `<img src="${imageUrl}" alt="Latest XKCD Comic">`;
      document.getElementById('comic-container').innerHTML = comicImage;

      // Hide the loading message after data is fetched
      document.getElementById('loading').style.display = 'none';
    })
    .catch(error => {
      // Handle any errors
      console.error('There was an error!', error);
      document.getElementById('loading').style.display = 'none'; // Hide loading message
      document.getElementById('error-message').textContent = 'Failed to load comic. Please try again later.';
    });
}

// Call the function to fetch the latest comic
fetchLatestComic();
