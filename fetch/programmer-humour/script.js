async function fetchLatestXKCD() {
  const url = 'https://xkcd.now.sh/?comic=latest';

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Received XKCD Data:", data);

    const img = document.createElement('img');
    img.src = data.img;
    img.alt = data.alt;

    const container = document.getElementById('comic-container');
    container.appendChild(img);
  } catch (error) {
    console.error("Error fetching XKCD comic:", error);
    document.getElementById('error-msg').textContent = "Failed to load the comic. Please try again later.";
  }
}

// Call the function when the page loads
fetchLatestXKCD();
