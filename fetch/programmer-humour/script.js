async function fetchLatestComic() {
    const apiUrl = 'https://xkcd.now.sh/?comic=latest';
    const comicContainer = document.getElementById('comic-container');

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        comicContainer.innerHTML = `
            <img src="${data.img}" alt="${data.alt}">
            <p>${data.title}</p>
        `;
    } catch (error) {
        console.error('Error fetching the comic:', error);
        comicContainer.innerHTML = '<p>Sorry, there was an error loading the comic. Please try again later.</p>';
    }
}

fetchLatestComic();