const films = [
  {
    title: "Killing of Flower Moon",
    director: "Martin Scorsese",
    times: ["15:35"],
    certificate: "15",
    duration: 112,
  },
  {
    title: "Typist Artist Pirate King",
    directory: "Carol Morley",
    times: ["15:00", "20:00"],
    certificate: "12A",
    duration: 108,
  },
];
function createFilmCard(film) {
    const card = document.getElementById("film-card").content.cloneNode(true);
    // Now we are querying our cloned fragment, not the entire page.
    card.querySelector("h3").textContent = film.title;
    card.querySelector(
    "[data-director]"
    ).textContent = `Director: ${film.director}`;
    card.querySelector("time").textContent = `Duration: ${film.duration} minutes`;
    card.querySelector(
    "[data-certificate]"
    ).textContent = `Certificate: ${film.certificate}`;
    document.body.append(card);
    return card;
}

const filmCards = films.map(createFilmCard)

console.log(filmCards)