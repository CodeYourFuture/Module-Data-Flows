// =================
// Stripped down cowsayer CLI, no libraries or arguments
// =================

// 1. Make a command line interface.
const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 2. Make supplies for our speech bubble
let topLine = '_';
let bottomLine = '-';

// 3. Make a cow that takes a string
const cow = (saying) => {
    // Create speech bubble
    const speechBubble = `
 ${topLine.repeat(saying.length + 2)}
< ${saying} >
 ${bottomLine.repeat(saying.length + 2)}
`;

    // Add ASCII cow to speech bubble
    const cowArt = `
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`;

    return speechBubble + cowArt;
};

// 4. Use readline to get a string from the terminal
// Prompt the user for input
rl.question("What do you want the cow to say? ", (input) => {
    // If input is empty, provide a default message
    const saying = input.trim() || "Moo!";
    console.log(cow(saying)); // Generate and print the cow with speech bubble
    rl.close(); // Close the readline interface
});
