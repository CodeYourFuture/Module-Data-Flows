async function fetchComic() {
    try {
        const response = await fetch('https://xkcd.now.sh/?comic=latest'); //try fetching data from the link 
        if (!response.ok) { //and if this is false throw a new error for the status of our response. 
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); //wait for the response and if we get it parse in to our json file.
        console.log(data); //log the data to the console
        const comicContainer = document.getElementById('comic-container'); //get comic container from html.
        comicContainer.innerHTML = `<h2>${data.title}</h2> <img src="${data.img}" alt="${data.alt}" /> <p>${data.alt}</p>`; //set its inner html by our title image and alt content of the api response
    } catch (error) {    //if their is any error cache it and console log the error 
        console.error('Error fetching comic:', error);
        document.getElementById('comic-container').innerHTML = '<p>Failed to load comic. Please try again later.</p>';
    }
}
fetchComic();