const personOne = {
  name: "Popeye",
  age: 34,
  favouriteFood: "Spinach",
};

// Update the parameter to this function to make it work.
// Don't change anything else.
function introduceYourself(person) {
  const name = person.name;
  const age = person.age;
  const favouriteFood = person.favouriteFood;
  console.log(
    `Hello, my name is ${name}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}

introduceYourself(personOne);
