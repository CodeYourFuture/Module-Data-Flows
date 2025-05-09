const personOne = {
  name: "Popeye",
  age: 34,
  favouriteFood: "Spinach",
};

// Update the parameter to this function to make it work.
// Don't change anything else.
function introduceYourself({ name, age, favouriteFood }) {
  // const {name,age,favouriteFood}=person
  console.log(
    `Hello, my name is ${name}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}

introduceYourself(personOne);

// # Exercise

// - What is the syntax to destructure the object `personOne` in exercise.js?
// - Update the parameter of the function `introduceYourself` to use destructuring on the object that gets passed in.

// PersonOne is calling the Object as paraameter of the function introduceYourself
