document.addEventListener('DOMContentLoaded', function() {
    const comicImg = document.getElementById('comic-img');
    const comicTitle = document.getElementById('comic-title');
    const comicDate = document.getElementById('comic-date');
    const refreshBtn = document.getElementById('refresh-btn');
    const errorMessage = document.getElementById('error-message');

    // Function to fetch and display the latest XKCD comic
    async function fetchLatestComic() {
        try {
            // Show loading state
            comicImg.alt = "Loading comic...";
            comicTitle.textContent = "Loading...";
            comicDate.textContent = "";
            errorMessage.style.display = 'none';

            // Make API call
            const response = await fetch('https://xkcd.now.sh/?comic=latest');
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            
            // Log the data to console
            console.log('Fetched XKCD comic:', data);
            
            // Update the DOM with the comic data
            comicImg.src = data.img;
            comicImg.alt = data.alt;
            comicTitle.textContent = data.title;
            
            // Format the date (month/day/year)
            const dateStr = `${data.month}/${data.day}/${data.year}`;
            comicDate.textContent = `Published: ${dateStr}`;
            
        } catch (error) {
            console.error('Error fetching XKCD comic:', error);
            errorMessage.textContent = `Failed to load comic: ${error.message}`;
            errorMessage.style.display = 'block';
        }
    }

    // Initial load
    fetchLatestComic();

    // Add click event to refresh button
    refreshBtn.addEventListener('click', fetchLatestComic);
});