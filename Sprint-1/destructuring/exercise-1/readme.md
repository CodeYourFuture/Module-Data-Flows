We can use object destructuring to extract values from an object and assign them to variables in one line.

```js
let person = {
  firstName: "Bruce",
  lastName: "Wayne",
};

let { firstName, lastName } = person;

console.log(`Batman is ${firstName}, ${lastName}`);
```

The program above will print `Batman is Bruce Wayne`.

This is more concise than doing this without object destructuring:

```js
let person = {
  firstName: "Bruce",
  lastName: "Wayne",
};

let firstName = person.firstName;
let lastName = person.lastName;

console.log(`Batman is ${firstName}, ${lastName}`);
```

# Exercise

- What is the syntax to destructure the object `personOne` in exercise.js?
const { name, age, favouriteFood } = personOne;
   The {} braces are used for destructuring and they exctract object values
   
- Update the parameter of the function `introduceYourself` to use destructuring on the object that gets passed in.
