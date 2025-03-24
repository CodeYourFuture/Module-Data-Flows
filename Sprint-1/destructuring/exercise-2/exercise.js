let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];

// - In `exercise.js` write a program that will take the `hogwarts` array as input and display the names of the people who belong to the Gryffindor house.
// - Use object destructuring to extract the values you need out of each element in the array.
function gryffindorMembers(hogwarts) {
  return hogwarts.filter(({ house }) => house === "Gryffindor")
    .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
}
console.log(gryffindorMembers(hogwarts));
// - In `exercise.js` write a program that will take the `hogwarts` array as input and display the names of teachers who have pets.
// - Use object destructuring to extract the values you need out of each element in the array.
function teachersWithPets(hogwarts) {
  return hogwarts.filter(({ occupation, pet }) => occupation === "Teacher" && pet)
    .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
}
console.log(teachersWithPets(hogwarts));