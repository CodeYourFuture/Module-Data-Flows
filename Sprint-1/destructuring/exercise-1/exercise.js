const personOne = {
  name: "Aida",
  age: 37,
  favouriteFood: "Pasta",
};

// Update the parameter to this function to make it work.
// Don't change anything else.
function introduceYourself({name,age,favouriteFood}) {
  console.log(
    `Hello, my name is ${name}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}

introduceYourself(personOne);
