//OBJECTIVES
// - What is the syntax to destructure the object `personOne` in exercise.js? let { name, age, favouriteFood } = personOne;
// - Update the parameter of the function `introduceYourself` to use destructuring on the object that gets passed in.

const personOne = {
  name: "Popeye",
  age: 34,
  favouriteFood: "Spinach",
};
//The paramter given to the function needs to be the declared object
let { name, age, favouriteFood } = personOne;

// Update the parameter to this function to make it work. 
// Don't change anything else.
function introduceYourself({ name, age, favouriteFood }) {
  console.log(
    `Hello, my name is ${name}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}

introduceYourself(personOne);
