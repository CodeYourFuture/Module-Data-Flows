const personOne = {
  name: "Popeye",
  age: 34,
  favouriteFood: "Spinach",
};

// Update the parameter to this function to make it work.
let { name, age, favouriteFood } = personOne;
// Don't change anything else.
function introduceYourself(personOne) {
  console.log(
    `Hello, my name is ${name}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}

console.log(introduceYourself(personOne));
