fetch("https://xkcd.vercel.app/?comic=latest")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Fetching Problem");
    }
  })
  .then((data) => {
    //log the fetching data
    console.log(data);
    //log the link of image
    console.log(data.img);
    //variable of this image
    const imagePhoto = data.img;
    //get the container
    const findContainer = document.getElementById("container");
    //create img element
    const imageTag = document.createElement("img");
    //link to src
    imageTag.src = imagePhoto;
    //add as child of the container
    findContainer.appendChild(imageTag);
  })
  .catch((error) => console.error("Something wrong", error));
