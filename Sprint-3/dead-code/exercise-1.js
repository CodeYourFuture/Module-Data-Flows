// Find the instances of unreachable and redundant code - remove them!

let testName = "Jerry";
const greeting = "hello";

function sayHello(greeting, name) {
  const greetingStr = greeting + ", " + name + "!";
  return `${greeting}, ${name}!`;
  console.log(greetingStr);
}

testName = "Aman";

const greetingMessage = sayHello(greeting, testName);

console.log(greetingMessage); // 'hello, Aman!'
