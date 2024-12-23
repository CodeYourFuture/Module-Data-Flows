
async function fetchLatestComic() {
    const apiUrl = 'https://xkcd.now.sh/?comic=latest';

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        if (!response.ok) 
            throw new Error(`HTTP error! Status: ${response.status}`);
        
        const data = await response.json();
        console.log(data);
        const comicImage = document.getElementById('comic-image');
        comicImage.src = data.img;
        document.querySelector('.loading').style.display = 'none';
    } catch (error) {
        console.error('Error fetching the comic:', error);
        document.getElementById('error-message').textContent = `Oops! There was an error fetching the comic: ${error.message}`;
    }
}

fetchLatestComic();
