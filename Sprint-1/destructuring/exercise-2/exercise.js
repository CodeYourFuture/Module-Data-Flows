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

// Task 1

// In `exercise.js` write a program that will take the `hogwarts` array as input and display
// the names of the people who belong to the Gryffindor house.
// Use object destructuring to extract the values you need out of each element in the array.

const gryffindor = hogwarts.filter(({ house }) => house === "Gryffindor");

console.log("Hogwarts people in Gryffindor");
for (const person of gryffindor.map(
  ({ firstName, lastName }) => `${firstName} ${lastName}`
)) {
  console.log(person);
}

console.log("\n");

// Task 2
// In exercise.js write a program that will take the hogwarts array as input and display the names of teachers who have pets.
// Use object destructuring to extract the values you need out of each element in the array.

console.log("Hogwarts teachers with pets");
const teachersWithPets = hogwarts.filter(({ occupation, pet }) => {
  return occupation === "Teacher" && pet;
});

for (const { firstName, lastName } of teachersWithPets) {
  console.log(`${firstName} ${lastName}`);
};