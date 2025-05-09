const personOne = {
  name: "Popeye",
  age: 34,
  favouriteFood: "Spinach",
};
// What is the syntax to destructure the object `personOne` in exercise.js?
// const {property1, property2, property3} = personOne;

// Update the parameter to this function to make it work.
// Don't change anything else.
//function introduceYourself(___________________________) {
function introduceYourself({name, age, favouriteFood}){
  console.log(
    `Hello, my name is ${name}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}

introduceYourself(personOne);
