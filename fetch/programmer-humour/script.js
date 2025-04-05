async function fetchComic(){
    const comicContainer = document.getElementById("comic-container");
    const errorMessage = document.getElementById("error-message");
    try{
        const apiResponse = await fetch("https://xkcd.now.sh/?comic=latest");
        if(!apiResponse.ok){
            throw new Error(`HTTP error! Status: ${apiResponse.status}`);
        }

        const comicData = await apiResponse.json();
        console.log("Fetched data:", comicData);// log the apiResponse

        //to render comic image
        comicContainer.innerHTML = `
            <h2>${comicData.title}</h2>
            <img src="${comicData.img}" alt="${comicData.alt}" title="${comicData.alt}">
            <p>${comicData.alt}</p>
        `;

    }catch(error){
        console.error("Error fetching comic data:", error);
        errorMessage.textContent = "Failed to load comic. Please try again!";
    }
}
window.onload = fetchComic;

