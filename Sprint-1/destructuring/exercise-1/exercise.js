const personOne = {
  firstName: "Popeye",
  age: 34,
  favouriteFood: "Spinach",
};

// let { firstName, age, favouriteFood } = personOne;
// Update the parameter to this function to make it work.
// Don't change anything else.
function introduceYourself({ firstName, age, favouriteFood }) {
  console.log(
    `Hello, my name is ${firstName}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}

console.log(introduceYourself(personOne));
