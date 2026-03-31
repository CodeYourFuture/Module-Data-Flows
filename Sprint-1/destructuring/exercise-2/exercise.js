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
// write your function here; Use Destructuring !!!!

// Its much easier with destructuring. (first exercise)
function residentsOfGryffindor(hogwarts) {
  let result = [];
  for (let { firstName, lastName, house } of hogwarts) {
    if (house === "Gryffindor") {
      result.push(`${firstName} ${lastName}`);
    }
  }
  return result.join("\n");
}

// second exercise;
function teacherWithPet(hogwarts) {
  let result2 = [];
  for (let { firstName, lastName, pet, occupation } of hogwarts) {
    if (pet !== null && occupation === "Teacher") {
      result2.push(`${firstName} ${lastName}`);
    }
  }
  return result2.join("\n");
}
console.log(residentsOfGryffindor(hogwarts));
console.log(teacherWithPet(hogwarts));
