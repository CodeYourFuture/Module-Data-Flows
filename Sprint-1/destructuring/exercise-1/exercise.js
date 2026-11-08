const personOne = {
  name: "Popeye",
  age: 34,
  favouriteFood: "Spinach",
};
const personTwo = {
  name: "Alice",
  age: 32,
  favouriteFood: "Burger",
};

// Update the parameter to this function to make it work.

// Don't change anything else.
function introduceYourself({name,age,favouriteFood}) {
  console.log(
    `Hello, my name is ${name}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}

introduceYourself(personOne);
introduceYourself(personTwo);

