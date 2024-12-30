document.getElementById('btn-click').addEventListener('click', () => {
    fetch("https://dog.ceo/api/breeds/image/random").then(Response => Response.json())
    .then(data =>{
        console.log(data)
        let photoLink = data.message;

        let ulElement = document.querySelector("#gallery");
        let liNew = document.createElement("li");

        liNew.innerHTML = `<img src="${photoLink}" class="li-img" alt="random dog">`;
        ulElement.appendChild(liNew);
    })
    .catch(error => {
        console.error("Error fetching dog image:", error);
        alert("Oops! Something went wrong. Please try again.");
    });
})



