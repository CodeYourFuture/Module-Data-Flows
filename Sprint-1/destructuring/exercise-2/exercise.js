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

// Task 1: Display names of all Gryffindor members.
// The "for...of" loop goes through each object in the array one by one.
// We use { firstName, lastName, house } to destructure only the three
// properties we need from each object — we ignore the rest.
for (const { firstName, lastName, house } of hogwarts) {
  if (house === "Gryffindor") {
    console.log(`${firstName} ${lastName}`);
  }
}

// Task 2: Display names of teachers who have pets.
// (A blank line separates Task 1 output from Task 2 output in the console.)
// We destructure four properties this time: firstName, lastName,
// occupation, and pet.
// We check two conditions at once using the && (AND) operator:
//   1. occupation must be "Teacher"
//   2. pet must not be null (meaning they actually have a pet)
for (const { firstName, lastName, occupation, pet } of hogwarts) {
  if (occupation === "Teacher" && pet !== null) {
    console.log(`${firstName} ${lastName}`);
  }
}
