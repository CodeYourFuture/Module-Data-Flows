// Original exercise - demonstrates basic object destructuring
const personOne = {
  name: "Popeye",
  age: 34,
  favouriteFood: "Spinach",
};

// Basic destructuring in function parameter
function introduceYourself({name, age, favouriteFood}) {
  console.log(
    `Hello, my name is ${name}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}

introduceYourself(personOne);

// Additional examples to demonstrate different destructuring patterns
const personTwo = {
  firstName: "Bruce",
  lastName: "Wayne",
  occupation: "Superhero",
  city: "Gotham",
  age: 35
};

// Destructuring with default values
function introduceWithDefaults({firstName, lastName, occupation = "Unknown", age = "Unknown"}) {
  console.log(
    `Hello, I'm ${firstName} ${lastName}. I work as a ${occupation} and I'm ${age} years old.`
  );
}

// Destructuring with renaming
function introduceWithAlias({firstName: first, lastName: last, city}) {
  console.log(
    `Hi, I'm ${first} ${last} from ${city}.`
  );
}

// Nested destructuring example
const personThree = {
  name: "Clark",
  details: {
    age: 30,
    powers: ["Flight", "Super Strength", "Heat Vision"]
  },
  location: {
    city: "Metropolis",
    planet: "Earth"
  }
};

function introduceWithNested({name, details: {age, powers}, location: {city}}) {
  console.log(
    `${name} is ${age} years old, has powers like ${powers.join(", ")}, and lives in ${city}.`
  );
}

// Error handling with destructuring
function introduceSafely(person) {
  try {
    const {name, age, favouriteFood} = person;
    console.log(
      `Hello, my name is ${name || "Unknown"}. I am ${age || "Unknown"} years old and my favourite food is ${favouriteFood || "Unknown"}.`
    );
  } catch (error) {
    console.log("Sorry, I couldn't get the person's information.");
  }
}

// Test the different functions
console.log("\n--- Basic Destructuring ---");
introduceYourself(personOne);

console.log("\n--- Destructuring with Defaults ---");
introduceWithDefaults(personTwo);
introduceWithDefaults({firstName: "John", lastName: "Doe"}); // Missing properties use defaults

console.log("\n--- Destructuring with Aliases ---");
introduceWithAlias(personTwo);

console.log("\n--- Nested Destructuring ---");
introduceWithNested(personThree);

console.log("\n--- Safe Destructuring ---");
introduceSafely(personOne);
introduceSafely(null); // Handles invalid input gracefully
