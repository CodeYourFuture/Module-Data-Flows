// The goal of this project is to fetch the latest comic from the XKCD API and display it on a webpage.
// When the button is clicked, fetch the latest comic and display it.
// Handle API errors gracefully.

// Select the "Load Latest Comic" button
const loadButton = document.getElementById("load-comic");

// Select the img tag where the comic will be displayed
const comicImg = document.getElementById("comic-img");

// This function will fetch the latest comic from the API
async function fetchComic() {
    try {
        // Send a GET request to the XKCD API to get the latest comic
        const response = await fetch("https://xkcd.now.sh/?comic=latest");
        
        // Check if the response is successful (status code 200)
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        // Convert the response to JSON format (the API sends data in JSON)
        const data = await response.json();

         // Set the 'src' attribute of the <img> tag to the image URL from the API response
        comicImg.src = data.img;

        // Set the 'alt' attribute of the <img> tag to the comic's description (optional text)
        comicImg.alt = data.alt;

    } catch (error) {
        // If an error occurs, log it to the console and alert the user
        console.error("Fetch error: ", error);
        alert("There was an error loading the comic.");
    }
};

// Add an event listener to the button so it loads the Latest comic when clicked
loadButton.addEventListener("click", fetchComic);