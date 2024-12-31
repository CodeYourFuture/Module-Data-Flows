

//A function should make an API call to the given endpoint: `https://xkcd.now.sh/?comic=latest`
//Incorporate error handling

//1- bring elements to javascript

const joke = document.getElementById("joke");
const jokeBtn= document.getElementById ("jokeBtn")

//3- add Event listier to the bottun to give new joke

jokeBtn.addEventListener('click', generateJoke)

// 2- generate function joke 

generateJoke()

function generateJoke() {
     fetch('https://xkcd.now.sh/?comic=latest', {
         headers: {
            Accept: 'application/json',
     },
    }

    fetch(`https://xkcd.now.sh/?comic=latest`, headers)
    .then((res) => res.json())
    .then((data) => {
    joke.innerHtml = data.joke
})
}