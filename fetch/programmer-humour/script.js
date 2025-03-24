async function fetchXKCDComic() {
    const comicContainer = document.getElementById("comic-container");
    const errorMessage = document.getElementById("error-message");

    try {
        const response = await fetch("https://xkcd.now.sh/?comic=latest");
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Fetched Data:", data); // Log the response

        // Render the comic image
        comicContainer.innerHTML = `
            <h2>${data.title}</h2>
            <img src="${data.img}" alt="${data.alt}" title="${data.alt}">
        `;
    } catch (error) {
        console.error("Error fetching XKCD comic:", error);
        errorMessage.textContent = "Failed to load comic. Please try again later.";
    }
}

// Run function when page loads
window.onload = fetchXKCDComic;
