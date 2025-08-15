
let myData;

async function fetchData() {
    try{
        const response = await fetch("https://xkcd.now.sh/?comic=latest");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        myData = await response.json();
        let section = document.body;
        const image = document.createElement("img");
        image.src = myData.img;
        image.alt = myData.alt;
        section.appendChild(image);
    }
    catch(error) { 
        console.error("an error happened", error.message);
        alert("Something went wrong. Please try again later.");
    }

};


fetchData();

