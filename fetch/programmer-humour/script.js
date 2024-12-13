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

    
}

console.log(fetchApiData());