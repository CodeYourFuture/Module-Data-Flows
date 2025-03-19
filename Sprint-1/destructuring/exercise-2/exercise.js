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
//Task 1
function searchByHouse(arr, houseName) {
  let result = [];
  for (let n of arr) {
    let { firstName, lastName, house } = n;
    if (house === houseName) {
      result.push(`${firstName} ${lastName}`);
    }
  }
  return result.join("\n");
}
//Task 2
function havePet(arr) {
  let result = [];
  for (let n of arr) {
    let { firstName, lastName, pet, occupation } = n;
    if (occupation === "Teacher" && pet !== null && pet !== undefined && pet !== "") {
      result.push(`${firstName} ${lastName}`);
    }
  }
  return result.join("\n");
}

// Test the functions
console.log(searchByHouse(hogwarts, "Gryffindor"));
console.log(havePet(hogwarts));
