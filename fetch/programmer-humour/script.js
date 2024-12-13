function fetchApiData() {
    // assign API url to a variable.
    const url = "https://xkcd.now.sh/?comic=latest";
    // get container by id
    const container = document.getElementById("container");
    
    // error handling
    fetch(url).then(response => {
        //  problem with response connection, 
        if (!response.ok) {
            throw new Error("Error with response connection");
        } else{
        // if response is fine, return response in JSON and convert it to JS object.
            return response.json();
        }     
    })
    // after the first then succecsfully passed, we can manage with JS object data.
    .then(data => {
        // create img tag.
        const imgHumor = document.createElement("img");
        // assign value from data object to src in img tag.
        imgHumor.src = data.img;
        // Add image as a child to div with class container on html.
        container.appendChild(imgHumor);
    })
    .catch(error => {
        console.log("Error fetching from API Programmer humour\n", error);
    });  
}

console.log(fetchApiData());