let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",//1
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",//2
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",//3
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
    pet: "Phoenix",//4
    occupation: "Teacher",
  },
];
function GryffindorHouse (hogwarts){
  for(let index = 0; index < hogwarts.length; index++){
    let {firstName, lastName, house} = hogwarts[index];
    if(house == "Gryffindor"){
      console.log(firstName + " " + lastName);
  }
  }
}

//- In `exercise.js` write a program that will take the `hogwarts` array as input and display the names of teachers who have pets.
function pets ( hogwarts){
  for(let index = 0; index < hogwarts.length; index++){
    let {pet, occupation ,firstName ,lastName} = hogwarts[index];
    if(occupation === "teacher"){
      if(pet !== null)
      {
        console.log(`${firstName} ${lastName}`)
      }
    }
  }
}

GryffindorHouse(hogwarts);
pets(hogwarts);
