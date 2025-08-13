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


// write a program that will take the `hogwarts` array as 
// input and display the names of the people who belong to the Gryffindor house.
// Use object destructuring to extract the values you need out of each element in the array.

function displayGryffindors({ firstName, lastName, house, pet, occupation }) {
   if (house !== "Gryffindor") return;
  console.log(`Hello, my name is ${firstName} ${lastName}. I am a ${occupation} at Hogwarts and I belong to the ${house} house. My pet is a ${pet ? pet : 'none'}.`);
}
hogwarts.forEach(displayGryffindors);

// Write a function named displayGryffindors that takes an object 
// with properties `firstName`, `lastName`, `house`, `pet`, and `occupation`
// and display the names of the people who belong to the Gryffindor house.

