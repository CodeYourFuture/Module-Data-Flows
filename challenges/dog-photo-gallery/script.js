document.getElementById('btn-click').addEventListener('click', () => {
    fetch("https://dog.ceo/api/breeds/image/random").then(response => response.json())
    .then(data =>{
        console.log(data)
        const photoLink = data.message;

        let ulElement = document.querySelector("#gallery");
        let liNew = document.createElement("li");

        // Create an img element
        let imgNew = document.createElement("img");
        imgNew.src = photoLink;
        imgNew.alt = "random dog";
        imgNew.className = "li-img";

        liNew.appendChild(imgNew);
        ulElement.appendChild(liNew);
    })
    .catch(error => {
        console.error("Error fetching dog image:", error);
        alert("Oops! Something went wrong. Please try again.");
    });
});



