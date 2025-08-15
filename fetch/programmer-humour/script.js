let latestNum = null; // Store latest comic number

async function fetchRandomComic() {
  const container = document.getElementById('comic-container');

  try {
    // Get latest comic number if not already fetched
    if (!latestNum) {
      const latestResponse = await fetch('https://xkcd.now.sh/?comic=latest');
      if (!latestResponse.ok) {
        throw new Error(`HTTP error getting latest: ${latestResponse.status}`);
      }
      const latestData = await latestResponse.json();
      latestNum = latestData.num;
    }

    // Pick a random comic number between 1 and latestNum
    const randomNum = Math.floor(Math.random() * latestNum) + 1;

    // Fetch the random comic
    const response = await fetch(`https://xkcd.now.sh/?comic=${randomNum}`);
    if (!response.ok) {
      throw new Error(`HTTP error getting comic: ${response.status}`);
    }

    const data = await response.json();
    console.log('Fetched comic data:', data);

    // Clear container
    container.innerHTML = '';

    // Add title
    const title = document.createElement('div');
    title.className = 'comic-title';
    title.textContent = `#${data.num} – ${data.title}`;
    container.appendChild(title);

    // Add comic image
    const img = document.createElement('img');
    img.src = data.img;
    img.alt = data.alt;
    img.title = data.alt;
    container.appendChild(img);

  } catch (error) {
    console.error('Error fetching the comic:', error);
    container.innerHTML = `<p style="color:red;">Failed to load comic. Try again later.</p>`;
  }
}

// Load first comic when page starts
fetchRandomComic();

// Add button click handler
document.getElementById('new-comic-btn').addEventListener('click', fetchRandomComic);