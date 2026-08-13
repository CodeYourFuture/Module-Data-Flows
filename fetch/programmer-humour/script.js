fetch("https://xkcd.now.sh/?comic=latest")
    .then(function(response) {

        if (!response.ok) {
            throw new Error("Failed to fetch comic");
        }

        return response.json();
    })
    .then(function(data) {
        console.log(data);

        const image = document.createElement("img");

        image.src = data.img;
        image.alt = data.alt;

        const container = document.querySelector("#comic-container");

        container.appendChild(image);
    })
    .catch(function(error) {
        console.error("Error:", error);
    });