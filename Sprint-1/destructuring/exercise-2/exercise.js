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


//1
// const newItem = oldItem.filter(({ propWeWant }) => propWeWant === 'propValue')

const sortingHat = (hogwarts) => {
  // filter gryffindor
  const filtered = hogwarts.filter(({ house }) => house === "Gryffindor");

  // return names
  let gryffindor = [];
  filtered.forEach(({ firstName, lastName }) => {
    gryffindor.push(`${firstName} ${lastName}`);
  })

  return gryffindor;
}
  
//2
// const newItem = oldItem.filter(({ propWeWant1, propWeWant2 }) => propWeWant 1 === 'propValue' && propWeWant2 === 'propValue2')
// or if checking if prop exists
// const newItem = oldItem.filter(({ propWeWant1, propWeWant2 }) => propWeWant 1 === 'propValue' && propWeWant2)
const findTeachersWithPets = (hogwarts) => {
  let teachersWithPets = [];

  // filter teachers
  // const filtered = hogwarts.filter(({ occupation, pet }) => occupation === 'Teacher');

  // check for pets
  // const withPets = filtered.filter(({ pet }) => pet));

//filter for teachers with pets
  const filtered = hogwarts.filter(({ occupation, pet }) => occupation === 'Teacher' && pet);


  filtered.forEach(({ firstName, lastName }) => {
    teachersWithPets.push(`${firstName} ${lastName}`);
  })

  return teachersWithPets;
}