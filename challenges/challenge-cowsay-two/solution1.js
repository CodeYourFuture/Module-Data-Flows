// solution1.js

// 1. Accept arguments from the command line
const args = process.argv.slice(2); // Get all arguments after `node` and the script name
const text = args.join(' '); // Combine the arguments into one string

// 2. Function to generate the cow with speech bubble
function cowsay(saying) {
    if (!saying) {
        saying = "Mooooo"; // Default text if no argument is passed
    }

    // Create speech bubble lines based on text length
    const bubbleWidth = saying.length + 2;
    const topLine = "_".repeat(bubbleWidth);
    const bottomLine = "-".repeat(bubbleWidth);

    // Speech bubble + cow ASCII art
    const cow = `
 ${topLine}
< ${saying} >
 ${bottomLine}
        \   ^__^
         \  (oo)\\_______
            (__)\\       )\/\\
                ||----w |
                ||     ||
    `;

    return cow;
}

// 3. Log the cow with the speech bubble to the console
console.log(cowsay(text));
