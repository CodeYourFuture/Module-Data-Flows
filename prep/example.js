
const state = {
    films: [
    {
    title: "Killing of Flower Moon",
    director: "Martin Scorsese",
    times: ["15:35"],
    certificate: "15",
    duration: 112,
},

  {
    title: "Kill Bill",
    director: "Quinton Tarantino",
    times: ["15:20"],
    certificate: "11",
    duration: 120,
},

{
    title: "Jurasic Park",
    director: "Steven Spielberg",
    times: ["11:20"],
    certificate: "21",
    duration: 150, 
},

{
    title: "Indian Jones",
    director: "Carl Marx",
    times: ["18:20"],
    certificate: "27",
    duration: 144,
},

{
    title: "Killing a Mocking Bird",
    director: "Mel Gibson",
    times: ["19:20"],
    certificate: "30",
    duration: 154,
}

],
searchTerm: "",
};

function createFilmCard(film){

    const filmCard = document.getElementById("film-cards").content.cloneNode(true);

    filmCard.querySelector("h3").textContent = film.title;
    filmCard.querySelector("p").textContent = film.director;
    filmCard.querySelector("time").textContent = film.times;
    filmCard.querySelector("data").textContent = film.duration;

    return filmCard;
}

function render(){
    // filter films 
    const filteredFilms = state.films.filter((film) => {
        // compare searchTerm with the film title
        return film.title.toLowerCase().includes(state.searchTerm.toLocaleLowerCase());
    });
    // create a card for every filtered film
    const filmCards = filteredFilms.map(createFilmCard);
    document.getElementById("film-container").append(...filmCards);
}

render();

const input = document.querySelector("input"); // access the input 

input.addEventListener("keyup", () =>{
     // update searchTerm
    state.searchTerm = input.value;
    //clear the previous films
    document.getElementById("film-container").innerHTML = "";

    render();
});

