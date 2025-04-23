// =================
// Stripped down cowsayer CLI, 
// no libraries
// https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line
// =================

// 1. Accept arguments
// how will you accept arguments?
const argument = (process.argv[2]) ? process.argv.slice(2) : ""
// 2. Make supplies for our speech bubble

let topLine = '_';
let bottomLine = '-';
let saying = `< ${argument.join(" ")}> `;

// 3. Make a cow that takes a string

function cowsay(saying) {
// how will you make the speech bubble contain the text?
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
// where will the cow picture go?


// how will you account for the parameter being empty?

}

//4. Pipe argument into cowsay function and return a cow

// how will you log this to the console?
cowsay(saying)