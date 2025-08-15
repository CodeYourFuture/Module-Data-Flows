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

function schoolName(hogwarts) {
  for (let i = 0; i < hogwarts.length; i++) {

    // Access each object in the array
    let { firstName, lastName, house } = hogwarts[i];

    // Check if the house is Gryffindor

    if (house === "Gryffindor") {
      console.log(`${firstName} ${lastName}`);
    }
  }
}

function teachesPet(hogwarts) {
  for (let i=0; i< hogwarts.length; i++){
    // Access object in the array
    let { firstName, lastName, pet } = hogwarts[i]; //[i] loop through an array and access each item one by one

    // Check if the pet is valid
    if (pet) {
      console.log(`${firstName} ${lastName} has a: ${pet}`);
    }
  }

}

// Call the function
schoolName(hogwarts);
teachesPet(hogwarts);
