// =================
// Stripped down cowsayer CLI, 
// no libraries or arguments
// https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs
// =================

// 1. Make  a command line interface.

// 2. Make supplies for our speech bubble
let topLine = '_';
let bottomLine = '-';
// 3. Make a cow that takes a string

const cow = (saying) => {
    // how did you make the cow before?
    console.log(`
        ${topLine.repeat(saying.length)}
        ${saying}
        ${bottomLine.repeat(saying.length)}
           /
          /
    ^__^ /
    (oo)'_______
    (__)        )-~
       ||----w |
       ||     ||`)
}

// 4. Use readline to get a string from the terminal 
// (with a prompt so it's clearer what we want)
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Enter the phrase for the cow `, saying => {

    let formatted_saying = `< ${saying}> `;
  cow(formatted_saying)
  rl.close();
});
