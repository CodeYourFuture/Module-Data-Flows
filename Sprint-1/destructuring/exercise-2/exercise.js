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

function GryffindorHouse(obj){
  for(let index in hogwarts){
    let {firstName, house, lastName} = hogwarts[index];
    if(house == 'Gryffindor'){
      console.log(`${parseInt(index) + 1}-` + firstName, lastName);
    }
  }
}

function havePets(obj){
  let num = 1
  for(let index in hogwarts){
    let {firstName} = hogwarts[index];
    let {pet} = hogwarts[index];
    let {lastName} = hogwarts[index];
    if(pet != null){
      console.log(`${num}-` + firstName, lastName);
      num += 1;
    }
  }
}
console.log('--Names of the people who belong to the Gryffindor house:');
GryffindorHouse(hogwarts);
console.log('--Names of teachers who have pets:');
havePets(hogwarts);