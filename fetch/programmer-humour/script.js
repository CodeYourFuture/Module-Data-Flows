// fetch data from api 
// console.lgo data
// display my data
// display image
// catch error

document.getElementById("load-comic").addEventListener("click", getData)

async function getData(){
    const comicContainer = document.getElementById("comic-container");
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = ''

    const url = "https://xkcd.now.sh/?comic=latest";  // incoming data

    try{
      const response = await fetch(url); // fetching data from above url
      if(!response.ok) {
        throw new Error(`Failed to fetch the comic, Response status: ${response.status}`)
      }
      // we get data back in response
      const data = await response.json();
      console.log(data)

      // create image element to display img
      const imgElement = document.createElement("img");
      imgElement.src = data.img
      imgElement.alt = data.title

      comicContainer.innerHTML = "" // clear previous image
      comicContainer.appendChild(imgElement);
    } catch(error){
      console.error('Error fetching the comic:', error);
      errorMessage.textContent = "An error occurred while loading the comic."; 
    }
}