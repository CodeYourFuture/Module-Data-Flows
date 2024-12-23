
async function fetchLatestComic() {
    const apiUrl = 'https://xkcd.now.sh/?comic=latest';

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        const comicImage = document.getElementById('comic-image');
        comicImage.src = data.img;
        document.querySelector('.loading').style.display = 'none';

    } catch (error) {
        console.error('Error fetching the comic:', error);
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = `Oops! There was an error fetching the comic: ${error.message}`;
    }
}
fetchLatestComic();


// I get this out put 

/*
{
  month: '12',
  num: 3027,
  link: '',
  year: '2024',
  news: '',
  safe_title: 'Exclusion Principle',
  transcript: '',
  alt: "Fermions are weird about each other in a standoffish way. Integer-spin particles are weird about each other in a 'stand uncomfortably close while talking' kind of way.",
  img: 'https://imgs.xkcd.com/comics/exclusion_principle.png',
  title: 'Exclusion Principle',
  day: '20'
}

Then I can access the img one browser
*/
