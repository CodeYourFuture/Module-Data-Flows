const apiUrl = 'https://xkcd.now.sh/?comic=latest';

async function programmerHumour () {
  const response = await fetch(apiUrl);
  let data = await response.json();


  const container = document.getElementById('container');

  const h1 = document.getElementById('title');
  h1.textContent = data.title;

  const image = document.getElementById('image');
  image.src = data.img;

  container.appendChild(h1);
  container.appendChild(image);
  console.log(data);
}



programmerHumour();