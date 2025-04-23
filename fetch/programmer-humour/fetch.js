"use strict";
const imgElem = document.querySelector("img");
const errorMessage = document.querySelector("#errorMessage");

const fetchData = async () => {
  try {
    const response = await fetch("https://xkcd.now.sh/?comic=latest");
    const data = await response.json();
    return data;
  } catch (error) {
    errorMessage.style.display = `contents`;
    errorMessage.textContent = error;
  }
};
fetchData().then((data) => {
  imgElem.setAttribute("src", data.img);
});
