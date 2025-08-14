const container = document.getElementById('container');
const img = document.createElement('img');

container.appendChild(img);
img.style.width = '100%';
img.style.height = 'auto';

function fetchImage() {
    fetch('https://xkcd.vercel.app/?comic=latest') // or the ridvanaltun endpoint
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status} ${r.statusText}`);
        return r.json();
      })
      .then(data => {
        console.log('XKCD data:', data);           // logs the JSON
        img.src = data.img || data.imageUrl || data.image;
        img.alt = data.alt || data.title || 'XKCD comic';
      })
      .catch(err => {
        console.error('Error fetching image:', err);
        container.textContent = 'Could not load the comic.';
      });
  }

fetchImage();
