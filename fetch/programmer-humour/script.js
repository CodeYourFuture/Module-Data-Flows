async function fetchLatestXKCD() {
    const url = "https://xkcd.now.sh/?comic=latest";
    const container = document.getElementById("comic-container");

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("XKCD Data:", data);

        container.innerHTML = `
            <h2>${data.title}</h2>
            <img src="${data.img}" alt="${data.alt}">
            <p>${data.alt}</p>
        `;
    } catch (error) {
        console.error("Error fetching XKCD:", error);
        container.innerHTML = `<p style="color:red;">Failed to load comic. Please try again later.</p>`;
    }
}

fetchLatestXKCD();
