async function fetchData(url, errorMessage) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(errorMessage, error);
        throw error; 
    }
}

async function fetchLatestXKCD() {
    const url = "https://xkcd.now.sh/?comic=latest";
    const container = document.getElementById("comic-container");
    
    try {
        const data = await fetchData(url, "Error fetching XKCD:");
        renderComic(container, data);
    } catch (error) {
        container.innerHTML = `<p style="color:red;">Failed to load comic. Please try again later.</p>`;
    }
}

function renderComic(container, data) {
    console.log("XKCD Data:", data);
    container.innerHTML = `
        <h2>${data.title}</h2>
        <img src="${data.img}" alt="${data.alt}">
        <p>${data.alt}</p>
    `;
}

fetchLatestXKCD();