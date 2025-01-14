// =================
// Stripped down cowsayer CLI, no libraries
// =================

// 1. Accept arguments
// Accept the argument from the command line
const args = process.argv.slice(2); // Skip node and script name
let saying = args[0] || "Moo!"; // Default saying if no argument is provided

// 2. Make supplies for our speech bubble
let topLine = '_';
let bottomLine = '-';

// 3. Make a cow that takes a string
function cowsay(saying) {
    // Create speech bubble
    const speechBubble = `
 ${topLine.repeat(saying.length + 2)}
< ${saying} >
 ${bottomLine.repeat(saying.length + 2)}
`;

    // Add ASCII cow to speech bubble
    const cow = `
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`;

    // Combine speech bubble and cow
    return speechBubble + cow;
}

// 4. Pipe argument into cowsay function and return a cow
console.log(cowsay(saying));
