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

// Task 1:
// Function to display names of people in Gryffindor house
function displayGryffindorMembers(hogwarts) {
  // Loop through each person in the hogwarts array
  hogwarts.forEach(({ firstName, lastName, house }) => {
    // If the person belongs to Gryffindor house, log their full name
    if (house === "Gryffindor") {
      console.log(`${firstName} ${lastName}`);
    }
  });
}

// Call the function to display Gryffindor members
displayGryffindorMembers(hogwarts);

// Task 2:
// Function to display names of teachers with pets
function displayTeachersWithPets(hogwarts) {
  // Loop through each person in the hogwarts array
  hogwarts.forEach(({ firstName, lastName, occupation, pet }) => {
    // If the person is a teacher and has a pet, log their full name
    if (occupation === "Teacher" && pet) {
      console.log(`${firstName} ${lastName}`);
    }
  });
}

// Call the function to display teachers with pets
displayTeachersWithPets(hogwarts);