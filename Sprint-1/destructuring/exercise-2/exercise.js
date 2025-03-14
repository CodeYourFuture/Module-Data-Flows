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

function gryffindorChecker(hogwarts) {

  const result = hogwarts.filter(({house}) => house === "Gryffindor") // filters out each member of hose Gryffindor

  .map(({firstName, lastName}) => `${firstName} ${lastName}` ) // Extracts the first and last names of each member

  return result.map(i=> console.log(i)) // prints out each member
}


// Task 2

function petChecker(hogwarts){
  const result = hogwarts.filter(({pet, occupation}) => (pet !== null && occupation === "Teacher")) // filters out each teacher having a pet
  
  .map(({firstName, lastName}) => `${firstName} ${lastName}`) // Extracts the first and last names of each member

  return result.map(i=> console.log(i)) // prints out each member
}




