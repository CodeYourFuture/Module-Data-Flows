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

function displayGryffindor(hogwarts) {
  for (const person of hogwarts) {

  }
  for (let i = 0; i < hogwarts.length; i++) {
    const { firstName, lastName, house, pet, occupation } = hogwarts[i];
    if (house == "Gryffindor") {
      console.log(firstName + " " + lastName);
    }
  }
}

function displayTeachersWithPet(hogwarts) {
  for (let i = 0; i < hogwarts.length; i++) {
    const { firstName, lastName, house, pet, occupation } = hogwarts[i];
    if (occupation == "Teacher" && pet != null) {
      console.log(firstName + " " + lastName);
    }
  }
}
console.log("Gryffindor members:")
displayGryffindor(hogwarts);

console.log("Teachers with a pet:")
displayTeachersWithPet(hogwarts);
