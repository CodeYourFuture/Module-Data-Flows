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

1 - What is the syntax to destructure the object `personOne` in exercise.js?

For the personOne example, the destructuring syntax would be:

```
let { name, age, favouriteFood } = personOne;

That pulls the three properties out of personOne into separate variables.

```
2 - Update the parameter of the function `introduceYourself` to use destructuring on the object that gets passed in.

```
To update the parameter of introduceYourself function to use destructuring, I would write:

function introduceYourself({ name, age, favouriteFood }) {
  console.log(
    `Hello, my name is ${name}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}
This way, the function immediately unpacks those properties from the object is passed in, without 
needing separate variable assignments.

```
