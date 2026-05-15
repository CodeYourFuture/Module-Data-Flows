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

function logPeopleByHouse(peopleList, houseName) {
  peopleList.forEach(({ house, firstName, lastName }) => {
    if (house === houseName) {
      console.log(`${firstName} ${lastName}`);
    }
  });
}

function logTeachersWithPets(peopleList) {
  peopleList.forEach(({ occupation, pet, firstName, lastName }) => {
    if (occupation === "Teacher" && pet !== null) {
      console.log(`${firstName} ${lastName}`);
    }
  });
}

// I thought I'd make a more general version which can work for any condition
// though there are no checks for invalid input
function getPersonByPredicate(list, predicate) {
  list.forEach((person) => {
    if (predicate(person)) {
      const { firstName, lastName } = person;
      console.log(`${firstName} ${lastName}`);
    }
  });
}
/* 
Example usable of the above general purpose version which allows the user to filter by different
properties. 

getPersonByPredicate(hogwarts, (person) => person.house === "Gryffindor");

getPersonByPredicate(
  hogwarts,
  (person) => person.occupation === "Teacher" && person.pet
);

*/
