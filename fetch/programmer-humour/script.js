const imageSelector = document.getElementById('imageContainer');

// Function to fetch the latest comic data
async function getImage() {
    try {
        const res = await fetch(`https://xkcd.now.sh/?comic=latest`);
        if (!res.ok) throw new Error("Network response was not ok " + res.statusText);
        const data = await res.json();

        console.log(data);

        renderImage(data.img); 

    } catch (error) {
        console.error("Error fetching the data", error);
    }
}

// Function to create and append the image element
function renderImage(imgUrl) {
    const image = document.createElement('img');
    image.src = imgUrl; 
    image.alt = "xkcd comic";
    image.classList.add('comic-image');
    imageSelector.appendChild(image); 
}

// Call the getImage function to load and display the comic
getImage();
