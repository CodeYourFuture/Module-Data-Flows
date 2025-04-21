// =================
// Stripped down cowsayer CLI, 
// no libraries
// https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line
// =================

// 1. Accept arguments
const args = process.argv.slice(2); // Get arguments after node and script name
const saying = args.join(' '); // Join arguments into a single string

// 2. Make supplies for our speech bubble

let topLine = '_';
let bottomLine = '-';

// 3. Make a cow that takes a string

function cowsay(saying) {
  if (!saying) {
    saying = "Moo!"; // Default saying if none provided
  }

  const maxLength = saying.length;
  const topBorder = ' ' + topLine.repeat(maxLength + 2);
  const bottomBorder = ' ' + bottomLine.repeat(maxLength + 2);

  let speechBubble = '';

  if (maxLength === 0) {
    speechBubble = `
 ${topBorder}
<  >
 ${bottomBorder}
    `;
  } else {

    speechBubble = `
 ${topBorder}
< ${saying} >
 ${bottomBorder}
    `;
  }
  const cow = `
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
    `;
  return speechBubble + cow;
}

//4. Pipe argument into cowsay function and return a cow

console.log(cowsay(saying));