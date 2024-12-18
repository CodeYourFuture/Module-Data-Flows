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

// Task-1
// Function to display names of people members of Gryffindor house

function displayGryffindorPeople(hogwarts) {
  hogwarts.forEach(({ firstName, lastName, house }) => {
    if (house === "Gryffindor") {
      console.log(`${firstName} ${lastName}`);
    }
  });
}

console.log("Gryffindor Members:");
displayGryffindorPeople(hogwarts);


// Task-2: 
// Function to Display names of teachers with pets

function displayTeachersWithPets(hogwarts) {
  hogwarts.forEach(({ firstName, lastName, occupation, pet }) => {
    if (occupation === "Teacher" && pet) {
      console.log(`${firstName} ${lastName}`);
    }
  });
}

console.log("\nTeachers with Pets:");
displayTeachersWithPets(hogwarts);



// Function to Display Gryffindor member with Cat as pet.

function displayGryffindorMemberWithCat(hogwarts) {
  hogwarts.forEach(({ firstName, lastName, house, pet }) => {     // The .forEach method executes a provided function (indicated by: =>) once for each array element.
    if (house === "Gryffindor" && pet === "Cat") {
      console.log(`${firstName} ${lastName}`);
    }
  });
}

console.log("\nGryffindor Member with Cat:")
displayGryffindorMemberWithCat(hogwarts);

/*  This function can be read like this:  For all object in the array "hogwart", consider heach firstName, lastName, house 
and pet. Then execute the following argument( =>  or assigment), if(as coditional), any house is strictly equal(===) to "Gryffindor"
and(&&) pet strictly equal(===) to "Cat", then print firstName and lastName in console( Terminal). 