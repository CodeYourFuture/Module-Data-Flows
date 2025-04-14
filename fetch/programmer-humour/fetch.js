"use strict"
const img = document.querySelector(img)

const fetchData = async () => {
    const response = await fetch("https://xkcd.now.sh/?comic=latest");
    const data = await response.json()
    return data
}
fetchData().then((data) => {
    console.log(data.img)
    img.setAttribute("src", data.img)

});