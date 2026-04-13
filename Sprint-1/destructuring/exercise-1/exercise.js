const personOne = {
  name: "Popeye",
  age: 34,
  favouriteFood: "Spinach",
};

// Update the parameter to this function to make it work.
// Don't change anything else.
function introduceYourself({ name, age, favouriteFood }) {
  // The curly braces in the parameter tell JavaScript:
  // "When this function receives an object, automatically extract
  // name, age, and favouriteFood from it as separate variables."
  console.log(
    `Hello, my name is ${name}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}

introduceYourself(personOne);
