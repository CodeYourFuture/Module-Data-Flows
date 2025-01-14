document.addEventListener('DOMContentLoaded', () => {
    const addImageBtn = document.getElementById('addImageBtn');
    const clearGalleryBtn = document.getElementById('clearGalleryBtn');
    const gallery = document.getElementById('gallery');

    addImageBtn.addEventListener('click', fetchAndDisplayImage);
    clearGalleryBtn.addEventListener('click', () => {
        gallery.innerHTML = '';
    });

    async function fetchAndDisplayImage() {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            if (data.status !== 'success') {
                throw new Error('Failed to fetch dog image.');
            }
            const listItem = document.createElement('li');
            const image = document.createElement('img');
            image.src = data.message;
            image.alt = 'Random Dog';
            listItem.appendChild(image);
            gallery.appendChild(listItem);
        } catch (error) {
            console.error('Error fetching and displaying image:', error);
            alert('Failed to load dog image. Please try again later.');
        }
    }
});
