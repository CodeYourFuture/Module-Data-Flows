document.addEventListener('DOMContentLoaded', () => {
    const dogGallery = document.getElementById('dog-gallery');
    const addButton = document.getElementById('add-dog');
    const clearButton = document.getElementById('clear-gallery');

    const fetchDogImage = async () => {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            if (!response.ok) throw new Error('Failed to fetch dog image');
            const data = await response.json();

            const li = document.createElement('li');
            const img = document.createElement('img');
            img.src = data.message;
            img.alt = 'Random Dog';
            img.classList.add('dog-image');
            li.appendChild(img);
            dogGallery.appendChild(li);
        } catch (error) {
            console.error(error);
            alert('Something went wrong. Please try again.');
        }
    };

    const clearGallery = () => {
        dogGallery.innerHTML = '';
    };

    addButton.addEventListener('click', fetchDogImage);
    clearButton.addEventListener('click', clearGallery);
});
