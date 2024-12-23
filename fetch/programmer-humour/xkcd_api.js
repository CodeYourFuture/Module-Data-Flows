
async function fetchLatestComic() {
    const apiUrl = 'https://xkcd.now.sh/?comic=latest';

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        const comicImage = document.getElementById('comic-image');
        comicImage.src = data.img;
        document.querySelector('.loading').style.display = 'none';

    } catch (error) {
        console.error('Error fetching the comic:', error);
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = `Oops! There was an error fetching the comic: ${error.message}`;
    }
}
fetchLatestComic();

