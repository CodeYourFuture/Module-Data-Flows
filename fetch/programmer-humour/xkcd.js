document.addEventListener('DOMContentLoaded', () =>{
    fetchComic();
});
const fetchComic = async ()=>{
    try {
        const response = await fetch('https://xkcd.now.sh/?comic=latest'); //try fetching data from the link 
        if (!response.ok) { //and if this is false throw a new error for the status of our response. 
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); //wait for the response and if we get it parse in to our json file.
        
        const comicContainer = document.getElementById('comic-container'); //get comic container from html.
        comicContainer.innerHTML = ''; 

        const title = document.createElement('h2');
        title.textContent = data.title;
        comicContainer.appendChild(title);

        const img = document.createElement('img');
        img.src = data.img;
        img.alt = data.alt;
        comicContainer.appendChild(img);

        const altText = document.createElement('p');
        altText.textContent = data.alt;
        comicContainer.appendChild(altText);
    } catch (error) {    //if their is any error cache it and console log the error 
        console.error('Failed to load comic ... Error fetching comic:', error);
        comicContainer.textContent = 'Failed to load comic. Please try again later.';
    }

};