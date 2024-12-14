let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",//1
    pet: "Owl",//1
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",//2
    pet: "Scabbers",//2
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",//3
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
    house: "Gryffindor",//4
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",//5
    pet: "Phoenix",//4
    occupation: "Teacher",
  },
];
//will take the `hogwarts` array as input and display the names of the people who belong to the Gryffindor house.
// Harry Potter
// Ron Weasley
// Hermione Granger
// Minerva McGonagall
// Albus Dumbledore
function belongToGryffindor(){
  
   for (const { firstName, lastName, house } of hogwarts) {
      if(house === "Gryffindor"){
         console.log(`${firstName} ${lastName}`);

  }
   }
}belongToGryffindor();
//- In `exercise.js` write a program that will take the `hogwarts` array as input and display the names of teachers who have pets.

function teachersWithPets(){
 for(const{ firstName, lastName, occupation,pet} of hogwarts){
  if(occupation==="Teacher" && pet !== null)
    console.log(`${firstName} ${lastName}`);
}
}
teachersWithPets()