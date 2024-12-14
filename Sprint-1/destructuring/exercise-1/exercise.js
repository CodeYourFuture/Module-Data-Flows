const personOne = {
  name: "Popeye",
  age: 34,
  favouriteFood: "Spinach",
};

// Update the parameter to this function to make it work.
// Don't change anything else.
function introduceYourself() {
  

  // I can create anew variable by extracting values from the object (make the parametre empty )or pass the Keys as a parametre (introduceYourself({name,age , favouriteFood}))in the introduceYourself 

  let{name,age , favouriteFood} = personOne;
  console.log(
    `Hello, my name is ${name}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}

introduceYourself(personOne);
