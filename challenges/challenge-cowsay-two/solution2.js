// solution2.js

// Step 1: Import the readline module
const readline = require("readline");

// Step 2: Create an interface for command-line interaction
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Step 3: Construct the cow's speech bubble and ASCII art
const cow = (message) => {
  const topBottomBorder = "_".repeat(message.length + 2);
  const speechBubble = `
 ${topBottomBorder}
< ${message} >
 ${"-".repeat(message.length + 2)}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
  `;
  return speechBubble;
};

// Step 4: Prompt the user for input
rl.question("What should the cow say? ", (answer) => {
  // Step 5: Display the cow with the user's input
  console.log(cow(answer));

  // Step 6: Close the readline interface
  rl.close();
});
