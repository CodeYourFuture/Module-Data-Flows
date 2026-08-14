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

// Task 1 - Display people who belong to Gryffindor

function studentsGryffindor(arr) {
  const gryffindorStudents = [];

  for (const { firstName, lastName, house } of arr) {
    if (house === "Gryffindor") {
      gryffindorStudents.push(`${firstName} ${lastName}`);
    }
  }

  return gryffindorStudents;
}

const gryffindorStudents = studentsGryffindor(hogwarts);

for (const student of gryffindorStudents) {
  console.log(student);
}

// Task 2 - Display teachers who have pets

function teachersWithPets(arr) {
  const teachers = [];

  for (const { firstName, lastName, pet, occupation } of arr) {
    if (occupation === "Teacher" && pet !== null) {
      teachers.push(`${firstName} ${lastName}`);
    }
  }

  return teachers;
}

const teachers = teachersWithPets(hogwarts);

for (const teacher of teachers) {
  console.log(teacher);
}