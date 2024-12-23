
async function fetchLatestComic() {
    const apiUrl = 'https://xkcd.now.sh/?comic=latest';

    try {
        // Fetch the latest comic data
        const response = await fetch(apiUrl);

        // Check if the response is OK (status code 200)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response as JSON
        const data = await response.json();

        // Log the entire data object to the console
        console.log(data);

        // Set the src attribute of the <img> tag to the comic image URL
        const comicImage = document.getElementById('comic-image');
        comicImage.src = data.img;

        // Hide the loading text once the image is loaded
        document.querySelector('.loading').style.display = 'none';

    } catch (error) {
        console.error('Error fetching the comic:', error);

        // Show error message to the user if the fetch fails
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = `Oops! There was an error fetching the comic: ${error.message}`;
    }
}

// Call the fetch function when the script loads
fetchLatestComic();

